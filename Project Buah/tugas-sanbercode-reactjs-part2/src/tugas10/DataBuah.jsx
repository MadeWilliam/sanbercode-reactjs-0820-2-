import React, { Component } from 'react';

class DataBuah extends Component {
    render() {
        return (
            <tr>
                <td> {this.props.item.nama} </td>
                <td> {this.props.item.harga} </td>
                <td> {this.props.item.berat / 1000} kg</td>
            </tr>
        );
    }
}

export default DataBuah;