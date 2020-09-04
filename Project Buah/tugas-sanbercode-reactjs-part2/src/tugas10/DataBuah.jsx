import React, { Component } from 'react';

class DataBuah extends Component {
    render() {
        return (
            <tr>
                <td> {this.props.name} </td>
                <td> {this.props.price} </td>
                <td> {this.props.weight / 1000} kg</td>
            </tr>
        );
    }
}

export default DataBuah;