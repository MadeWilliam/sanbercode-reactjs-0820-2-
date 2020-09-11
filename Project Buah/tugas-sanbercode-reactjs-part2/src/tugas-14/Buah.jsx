import React, { Component } from 'react';
import { BuahProvider } from "./BuahContext.jsx"
import FormBuah from './FormBuah';
import TabelBuah from './TabelBuah.jsx';

class Buah extends Component {
    render() {
        return (
            <BuahProvider>
                <TabelBuah />
                <FormBuah />
            </BuahProvider>
        );
    }
}

export default Buah;