import React, { useState, Component } from 'react';
import './App.css';
import Navbar from './tugas-15/Navbar';
import Routes from './tugas-15/Routes';
import { ThemeContext, themes } from './tugas-15/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
    const [selectedTheme, setSelectedTheme] = useState(themes.dark)
    return (
        <ThemeContext.Provider value={{
            theme: selectedTheme,
            setSelectedTheme: setSelectedTheme
        }}>
            <Router>
                <div style={{display: "flex"}}>
                    <Navbar />
                    <div className="outer">
                        <Routes />
                    </div>
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;