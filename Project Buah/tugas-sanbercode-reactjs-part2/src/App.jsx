import React, { Component } from 'react';
import AppBuah from './AppBuah.jsx';
import FormBuah2 from './tugas12/FormBuah2';
import Countdown from './tugas11/Countdown.jsx';
import './App.css';
import DaftarBuah from './tugas-14/Buah.jsx';
import Buah from './tugas-14/Buah.jsx';

class App extends Component {
    render() {
        return (
            <div className="outer container">
                {/* <Countdown/> */}
                {/* <AppBuah/> */}
                {/* <FormBuah2 /> */}
                <Buah />
            </div>
        );
    }
}

export default App;