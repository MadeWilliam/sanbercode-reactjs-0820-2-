import React, { Component } from 'react';
import DataBuah from './DataBuah';

const dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class TabelBuah extends Component {
    render() {
        return (
            <div className="outer">
                <table>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataHargaBuah.map((el,i) => {
                                return (
                                    <DataBuah key={i} item={el} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TabelBuah;