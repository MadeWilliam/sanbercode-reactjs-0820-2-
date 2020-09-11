import React, { Component } from 'react';
import AppBuah from '../tugas10/AppBuah';
import Countdown from './Countdown.jsx';

class CountApps extends Component {
    render() {
        return (
            <div className="outer container">
                <Countdown />
                <AppBuah />
            </div>
        );
    }
}

export default CountApps; 