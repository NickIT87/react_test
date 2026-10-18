import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

export type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useAppTheme must be used within AppThemeProvider',
    );
  }

  return context;
}

type AppThemeProviderProps = {
  children: ReactNode;
};

export default function AppThemeProvider({
  children,
}: AppThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    return localStorage.getItem('theme') === 'dark'
      ? 'dark'
      : 'light';
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';

      localStorage.setItem('theme', next);

      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}