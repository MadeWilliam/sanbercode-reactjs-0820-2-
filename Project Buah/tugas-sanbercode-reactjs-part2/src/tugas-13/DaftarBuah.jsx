import React, { useState, useEffect } from 'react';

const DaftarBuah = () => {
  const [daftarBuah, setDaftarBuah] = useState([
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
  ])
  const [inputName, setInputName] = useState("")
  const [inputHarga, setInputHarga] = useState("")
  const [inputBerat, setInputBerat] = useState(0)
  /// array tidak punya index -1
  const [indexOfForm, setIndexOfForm] = useState(-1)
  

  const handleDelete = (event) => {
    let index = event.target.value
    let newDaftarBuah = daftarBuah
    let editedDataBuah = newDaftarBuah[indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined) {
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      setDaftarBuah(newDaftarBuah)
      setIndexOfForm(newIndex)

    } else {
      setDaftarBuah(newDaftarBuah)
    }

  }

  const handleEdit = (event) => {
    let index = event.target.value
    let dataBuah = daftarBuah[index]
    setInputName(dataBuah.nama)
    setInputHarga(dataBuah.harga)
    setInputBerat(dataBuah.berat)
    setIndexOfForm(index)
  }

  const handleChange = (event) => {
    let typeOfInput = event.target.name
    switch (typeOfInput) {
      case "name":
        {
          setInputName(event.target.value);
          break
        }
      case "harga":
        {
          setInputHarga(event.target.value);
          break
        }
      case "berat":
        {
          setInputBerat(event.target.value);
          break
        }
      default:
        { break; }
    }
  }

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault()

    let nama = inputName
    let harga = inputHarga.toString()
    let berat = inputBerat

    if (nama.replace(/\s/g, '') !== "" && harga.replace(/\s/g, '') !== "") {
      let newDaftarBuah = daftarBuah
      let index = indexOfForm

      if (index === -1) {
        newDaftarBuah = [...newDaftarBuah, { nama, harga, berat }]
      } else {
        newDaftarBuah[index] = { nama, harga, berat }
      }
      setDaftarBuah(newDaftarBuah)
      setInputName("")
      setInputHarga("")
      setInputBerat(0)
    }

  }

  return (
    <>
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
            daftarBuah.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.harga}</td>
                  <td>{item.berat / 1000} kg</td>
                  <td style={{ justifyContent: "space-evenly", display: "flex" }}>
                    <button onClick={handleEdit} value={index}>Edit</button>
                    <button onClick={handleDelete} value={index}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Daftar Harga Buah</h1>
      <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
        <div style={{ border: "1px solid #aaa", padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>
              Nama:
              </label>
            <input style={{ float: "right" }} type="text" name="name" value={inputName} onChange={handleChange} />
            <br />
            <br />
            <label style={{ float: "left" }}>
              Harga:
              </label>
            <input style={{ float: "right" }} type="text" name="harga" value={inputHarga} onChange={handleChange} />
            <br />
            <br />
            <label style={{ float: "left" }}>
              Berat (dalam gram):
              </label>
            <input style={{ float: "right" }} type="number" name="berat" value={inputBerat} onChange={handleChange} />
            <br />
            <br />
            <div style={{ width: "100%", paddingBottom: "20px" }}>
              <button style={{ float: "right" }}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DaftarBuah
