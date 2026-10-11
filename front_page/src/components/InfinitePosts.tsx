import { useCallback, useEffect, useRef, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function InfinitePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const observerTarget = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const loadPosts = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );

      if (!response.ok) {
        throw new Error("Failed to load posts");
      }

      const data: Post[] = await response.json();

      setPosts((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);

      if (data.length < 10) {
        setHasMore(false);
      }
    } catch {
      setError("Не удалось загрузить посты.");
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [page, hasMore]);

  // Первоначальная загрузка
  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  // Отслеживание конца списка
  useEffect(() => {
    const target = observerTarget.current;

    if (!target || !hasMore || error) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          void loadPosts();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [loadPosts, hasMore, error]);

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      <h1>Posts</h1>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            padding: 16,
            marginBottom: 12,
            border: "1px solid #ddd",
            borderRadius: 8,
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}

      {loading && <p>Загрузка постов...</p>}

      {error && (
        <div>
          <p>{error}</p>
          <button onClick={() => void loadPosts()}>
            Повторить
          </button>
        </div>
      )}

      {!hasMore && <p>Все посты загружены.</p>}

      {/* Невидимый элемент в конце списка */}
      <div ref={observerTarget} style={{ height: 1 }} />
    </main>
  );
}