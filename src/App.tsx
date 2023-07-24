// Packages
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

// Pages
import Home from './pages/home/Home'
import NotFound from "./pages/notFound/NotFound";

// Style
import './assets/styles/app.scss'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path='/'/>
                    <Route element={<NotFound/>} path='*'/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
