import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import styles from "./scss/App.module.scss";
import Audio from "./pages/Audios";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className={styles.menu}>
                    <Link to="/">Home page</Link>
                    <Link to="/about">About page</Link>
                    <Link to="/audio">Audio page</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="audio" element={<Audio/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
