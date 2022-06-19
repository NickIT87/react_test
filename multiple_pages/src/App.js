import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
