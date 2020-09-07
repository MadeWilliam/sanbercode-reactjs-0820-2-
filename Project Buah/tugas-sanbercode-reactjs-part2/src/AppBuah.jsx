import React, { Component } from 'react';
import FormBuah from './tugas9/FormBuah.jsx';
import TabelBuah from './tugas10/TabelBuah.jsx';
import './App.css';

class AppBuah extends Component {
    render() {
        return (
            <div>
                <FormBuah></FormBuah>
                <TabelBuah></TabelBuah>
            </div>
        );
    }
}

export default AppBuah;