import React, { Component } from 'react';
import { BuahProvider } from "./BuahContext.jsx"
import FormBuah from './FormBuah';

class Buah extends Component {
    render() {
        return (
            <div>
                <BuahProvider>
                    <FormBuah/>
                </BuahProvider>
            </div>
        );
    }
}

export default Buah;