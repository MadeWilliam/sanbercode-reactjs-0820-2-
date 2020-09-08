import React, { Component } from 'react';
import AppBuah from './AppBuah.jsx';
import FormBuah2 from './tugas12/FormBuah2';
import Countdown from './tugas11/Countdown.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="outer container">
                {/* <Countdown/> */}
                {/* <AppBuah/> */}
                <FormBuah2 />
            </div>
        );
    }
}

export default App;