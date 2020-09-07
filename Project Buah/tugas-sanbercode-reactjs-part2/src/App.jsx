import React, { Component } from 'react';
import AppBuah from './AppBuah.jsx';
import Countdown from './tugas11/Countdown.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="outer container">
                <Countdown/>
                <AppBuah/>
            </div>
        );
    }
}

export default App;