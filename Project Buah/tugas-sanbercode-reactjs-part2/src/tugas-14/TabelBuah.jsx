import React, { useContext } from 'react';
import { BuahContext } from './BuahContext';
import axios from 'axios';

const TabelBuah = () => {
    const [daftarBuah, setDaftarBuah, , setInput] = useContext(BuahContext)

    const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)
        let newdaftarBuah = daftarBuah.filter(el => el.id !== idDataBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
            .then(res => {
                console.log(res)
            })

        setDaftarBuah([...newdaftarBuah])
    }

    const handleEdit = (event) => {
        let idDataBuah = parseInt(event.target.value)
        let dataBuah = daftarBuah.find(x => x.id === idDataBuah)
        setInput({ name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah })
    }

    return (
        <div>
            <h1>Daftar Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "20px" }}>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        daftarBuah !== null && daftarBuah.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight / 1000} Kg</td>
                                    <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TabelBuah;