import React, { Component } from 'react';
import { BuahProvider } from "./BuahContext.jsx"
import FormBuah from './FormBuah';
import TabelBuah from './TabelBuah.jsx';

class Buah extends Component {
    render() {
        return (
            <div className="outer container">
                <BuahProvider>
                    <TabelBuah />
                    <FormBuah />
                </BuahProvider>
            </div>
        );
    }
}

export default Buah;