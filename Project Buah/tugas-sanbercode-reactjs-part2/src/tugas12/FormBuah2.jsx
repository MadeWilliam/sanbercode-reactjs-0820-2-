import React, { Component } from "react"

class FormBuah2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fruits: [
                { key: 1, name: 'Semangka', price: '10000', weight: 1000, pelanggan: "Budi" },
                { key: 2, name: 'Anggur', price: '40000', weight: 500, pelanggan: "Budi" },
                { key: 3, name: 'Strawberry', price: '30000', weight: 400, pelanggan: "Tina" },
                { key: 4, name: 'Mangga', price: '30000', weight: 1000, pelanggan: "Tono" },
                { key: 5, name: 'Jeruk', price: '30000', weight: 500, pelanggan: "Dono" }
            ],
            fruitsPriceList: [
                { key: 1, fruitName: "Semangka", pricePerGram: 10000 },
                { key: 2, fruitName: "Anggur", pricePerGram: 80000 },
                { key: 3, fruitName: "Strawberry", pricePerGram: 80000 },
                { key: 4, fruitName: "Jeruk", pricePerGram: 30000 },
                { key: 5, fruitName: "Mangga", pricePerGram: 60000 },
                { key: 6, fruitName: "Nanas", pricePerGram: 20000 },
                { key: 7, fruitName: "Salak", pricePerGram: 50000 },
            ],
            inputName: "",
            inputFruitWeight: "",
            defaultName: "",
            defaultFruitWeight: "",
            selectedFruit: "Semangka",
            defaultSelectedFruit: "Semangka",
            isEdit: false,
            id: null,
            mockData: {},
            // Price
            idPr: null,
            isPrEdit: false,
            inputPrFruitName: "",
            inputPrFruitPrice: 0,
            defaultPrFruitName: "",
            defaultPrFruitPrice: 0
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFruitChange = this.handleFruitChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFruitChange(event) {
        this.setState({ selectedFruit: event.target.value });
    }

    handleWeightChange(event) {
        this.setState({ inputFruitWeight: event.target.value });
    }


    handleNameChange(event) {
        this.setState({ inputName: event.target.value });
    }

    handleToggleEdit() {
        this.state.isEdit
            ? this.setState({ isEdit: false })
            : this.setState({ isEdit: true });
    }

    handleEdit(fruit) {
        console.log("handleEdit");
        console.log(fruit);
        this.handleToggleEdit()
        this.setState({
            id: fruit.key,
            defaultSelectedFruit: fruit.name,
            defaultFruitWeight: fruit.weight,
            defaultName: fruit.pelanggan
        })
    }

    handleUpdate(event) {
        event.preventDefault()

        console.log("handleUpdate");
        console.log(event);

        let fruitPrice = 0;

        this.setState({
            mockData: this.state.fruits.map(fruit => {
                if (fruit.key === this.state.id) {
                    fruit['name'] = event.target.updatedFrName.value;
                    fruit['price'] = this.state.fruitsPriceList.map(el => {
                        if (fruit.name === el.fruitName) {
                            return fruitPrice = event.target.updatedBerat.value * el.pricePerGram
                        }
                    })
                    fruit['weight'] = event.target.updatedBerat.value;
                    return fruit;
                }
                return fruit;
            }),
            inputName: "",
            inputFruitWeight: ""

        });
        this.handleToggleEdit()
    }

    handleDelete(key) {
        console.log("handleDelete");
        console.log(key);
        this.setState({ fruits: this.state.fruits.filter(item => { if (item.key !== key) { return item; } }) });
    }

    handleSubmit(event) {
        event.preventDefault()

        let fruitPrice = 0;

        this.state.fruitsPriceList.map(el => {
            if (this.state.selectedFruit === el.fruitName) {
                return fruitPrice = this.state.inputFruitWeight * el.pricePerGram
            }
        })

        this.setState({
            id: this.state.id + 1,
            fruits: [...this.state.fruits, { key: this.state.id, name: this.state.selectedFruit, price: fruitPrice, weight: this.state.inputFruitWeight, pelanggan: this.state.inputName }],
            inputName: "",
            inputFruitWeight: "",
        });
        alert(`Terimakasih ${this.state.inputName} telah membeli ${this.state.selectedFruit}`);
    }

    // Price

    handlePrFruitChange = (event) => {
        this.setState({ inputPrFruitName: event.target.value });
    }

    handlePrFruitPriceChange = (event) => {
        this.setState({ inputPrFruitPrice: event.target.value });
    }

    handlePrSubmit = (event) => {
        event.preventDefault()

        this.setState({
            fruitsPriceList: [...this.state.fruitsPriceList, { key: this.state.fruitsPriceList.length + 1, fruitName: this.state.inputPrFruitName, pricePerGram: this.state.inputPrFruitPrice }],
            inputPrFruitName: "",
            inputPrFruitPrice: ""
        });
        setTimeout(() => {
            alert(`Harga ${this.state.fruitsPriceList[this.state.fruitsPriceList.length - 1].fruitName} sebesar ${this.state.fruitsPriceList[this.state.fruitsPriceList.length - 1].pricePerGram} berhasil ditambahkan`);
        }, 100);
    }

    handlePrToggleEdit = () => {
        this.state.isPrEdit
            ? this.setState({ isPrEdit: false })
            : this.setState({ isPrEdit: true });
    }

    handlePrEdit = (price) => {
        console.log("handleEdit");
        console.log(price);
        this.handlePrToggleEdit()
        this.setState({
            idPr: price.key,
            defaultPrFruitName: price.fruitName,
            defaultPrFruitPrice: price.pricePerGram,
        })
    }

    handlePrUpdate = (event) => {
        event.preventDefault()

        console.log("handlePrUpdate");
        console.log(event);

        this.setState({
            mockPrData: this.state.fruitsPriceList.map(pr => {
                if (pr.key === this.state.idPr) {
                    pr['fruitName'] = event.target.updatedPrFruitName.value;
                    pr['pricePerGram'] = event.target.updatedPrFruitPrice.value;
                    return pr;
                }
                return pr;
            }),
            inputPrFruitName: "",
            inputPrFruitPrice: "",
        });
        this.handlePrToggleEdit()
    }


    handlePrDelete = (key) => {
        console.log("handlePrDelete");
        console.log(key);
        this.setState({ fruitsPriceList: this.state.fruitsPriceList.filter(item => { if (item.key !== key) { return item; } }) });
    }

    render() {
        return (
            <div className="container">
                <h1 className="textCentered" style={{ color: "blue" }}>{("Tugas 12".toLocaleUpperCase())}</h1>
                <div style={{ display: "flex", minWidth: "1000px", justifyContent: "space-evenly"}}>
                    <div>
                        <h1>Tabel Harga Buah</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: "20px" }}>No</th>
                                    <th>Nama</th>
                                    <th>Harga (kg)</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.fruitsPriceList.map((el, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{el.fruitName}</td>
                                                <td>{el.pricePerGram}</td>
                                                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                                    {!this.state.isPrEdit &&
                                                        <button className="btn-edit" onClick={() => this.handlePrEdit(el)}>Edit</button>
                                                    }
                                                    <button className="btn-delete" onClick={() => this.handlePrDelete(el.key)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>


                        <h1>Form Harga Buah</h1>
                        {/* Form */}
                        {!this.state.isPrEdit &&
                            <form onSubmit={this.handlePrSubmit}>
                                <div className="container">
                                    <h1 className="textCentered">Tambah Harga Buah</h1>
                                    <div>
                                        <div className="headerOuter">
                                            <label htmlFor="prName" className="headerInner">Nama Buah:</label>
                                            < input className="inlineBlock" type="text" name="prFruitName" id="prName" value={this.state.inputPrFruitName} onChange={this.handlePrFruitChange} placeholder="Tulis nama buah di sini" required />
                                        </div>
                                        <div className="headerOuter">
                                            <label htmlFor="prPrice" className="headerInner"> Harga per kg: </label>
                                            < input className="inlineBlock" type="number" name="prFruitPrice" id="prPrice" value={this.state.inputPrFruitPrice} onChange={this.handlePrFruitPriceChange} required />
                                        </div>
                                        <button className="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        }

                        {/* Form Update */}
                        {this.state.isPrEdit &&
                            <form onSubmit={this.handlePrUpdate}>
                                <div className="container">
                                    <h1 className="textCentered">Edit Harga Buah</h1>
                                    <div>
                                        <div className="headerOuter">
                                            <label htmlFor="prName" className="headerInner">Nama Buah: </label>
                                            < input className="inlineBlock" type="text" name="updatedPrFruitName" id="prName" defaultValue={this.state.defaultPrFruitName} onChange={this.handlePrFruitChange} placeholder="Tulis nama buah di sini" required />
                                        </div>
                                        <div className="headerOuter">
                                            <label htmlFor="prPrice" className="headerInner">Harga per kg: </label>
                                            < input className="inlineBlock" type="number" name="updatedPrFruitPrice" id="prPrice" defaultValue={this.state.defaultPrFruitPrice} onChange={this.handlePrFruitPriceChange} placeholder="Harga dalam rupiah" required />
                                        </div>
                                        <button className="btn-update">Update</button>
                                        <button className="btn-cancel" onClick={() => this.handlePrToggleEdit()}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        }

                    </div>

                    <div>

                        <h1>Tabel Pembelian Buah</h1>
                        <table>
                            <thead>
                                <tr>
                                    {/* <th style={{ width: "20px" }}>No</th> */}
                                    <th style={{ width: "50px" }}>Pelanggan</th>
                                    <th>Nama</th>
                                    <th>Harga</th>
                                    <th>Berat</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.fruits.map((fruit, index) => {
                                        return (
                                            <tr>
                                                {/* <td>{index + 1}</td> */}
                                                <td>{fruit.pelanggan}</td>
                                                <td>{fruit.name}</td>
                                                <td>{fruit.price}</td>
                                                <td>{fruit.weight / 1000} kg</td>
                                                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                                    {!this.state.isEdit &&
                                                        <button className="btn-edit" onClick={() => this.handleEdit(fruit)}>Edit</button>
                                                    }
                                                    <button className="btn-delete" onClick={() => this.handleDelete(fruit.key)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <h1>Form Pembelian Buah</h1>
                        {/* Form */}
                        {!this.state.isEdit &&
                            <form onSubmit={this.handleSubmit}>
                                <div className="container">
                                    <h1 className="textCentered">Tambah Buah</h1>
                                    <div>
                                        <div className="headerOuter">
                                            <label htmlFor="name" className="headerInner">Nama Pelanggan:</label>
                                            < input className="inlineBlock" type="text" name="name" id="name" value={this.state.inputName} onChange={this.handleNameChange} placeholder="Tulis nama kamu di sini" required />
                                        </div>
                                        <div className="mainOuter">
                                            <div className="mainHeaderContainer"> Daftar Item: </div>
                                            <div className="inlineBlock">
                                                <input type="radio"
                                                    id="semangka"
                                                    name="frName"
                                                    value="Semangka"
                                                    checked={this.state.selectedFruit === "Semangka"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="semangka">Semangka</label><br />
                                                <input type="radio"
                                                    id="jeruk"
                                                    name="frName"
                                                    value="Jeruk"
                                                    checked={this.state.selectedFruit === "Jeruk"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="jeruk">Jeruk</label><br />
                                                <input type="radio"
                                                    id="nanas"
                                                    name="frName"
                                                    value="Nanas"
                                                    checked={this.state.selectedFruit === "Nanas"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="nanas">Nanas</label><br />
                                                <input type="radio"
                                                    id="salak"
                                                    name="frName"
                                                    value="Salak"
                                                    checked={this.state.selectedFruit === "Salak"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="salak">Salak</label><br />
                                                <input type="radio"
                                                    id="anggur"
                                                    name="frName"
                                                    value="Anggur"
                                                    checked={this.state.selectedFruit === "Anggur"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="anggur">Anggur</label><br />
                                                <input type="radio"
                                                    id="strawberry"
                                                    name="frName"
                                                    value="Strawberry"
                                                    checked={this.state.selectedFruit === "Strawberry"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="strawberry">Strawberry</label><br />
                                                <input type="radio"
                                                    id="mangga"
                                                    name="frName"
                                                    value="Mangga"
                                                    checked={this.state.selectedFruit === "Mangga"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="mangga">Mangga</label><br />
                                            </div>
                                        </div>
                                        <div className="headerOuter">
                                            <label htmlFor="berat" className="headerInner"> Berat buah: </label>
                                            < input className="inlineBlock" type="number" name="berat" id="berat" value={this.state.inputFruitWeight} onChange={this.handleWeightChange} placeholder="dalam gram" required />
                                        </div>
                                        <button className="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        }

                        {/* Form Update */}
                        {
                            this.state.isEdit &&
                            <form onSubmit={this.handleUpdate}>
                                <div className="container">
                                    <h1 className="textCentered">Edit Buah</h1>
                                    <div>
                                        <div className="headerOuter">
                                            <label htmlFor="name" className="headerInner">Nama Pelanggan:</label>
                                            < input className="inlineBlock" type="text" name="updatedNama" id="name" defaultValue={this.state.defaultName} onChange={this.handleNameChange} placeholder="Tulis nama kamu di sini" required />
                                        </div>
                                        <div className="mainOuter">
                                            <div className="mainHeaderContainer"> Daftar Item: </div>
                                            <div className="inlineBlock">
                                                <input type="radio"
                                                    id="semangka"
                                                    name="updatedFrName"
                                                    value="Semangka"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Semangka"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="semangka">Semangka</label><br />
                                                <input type="radio"
                                                    id="jeruk"
                                                    name="updatedFrName"
                                                    value="Jeruk"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Jeruk"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="jeruk">Jeruk</label><br />
                                                <input type="radio"
                                                    id="nanas"
                                                    name="updatedFrName"
                                                    value="Nanas"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Nanas"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="nanas">Nanas</label><br />
                                                <input type="radio"
                                                    id="salak"
                                                    name="updatedFrName"
                                                    value="Salak"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Salak"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="salak">Salak</label><br />
                                                <input type="radio"
                                                    id="anggur"
                                                    name="updatedFrName"
                                                    value="Anggur"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Anggur"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="anggur">Anggur</label><br />
                                                <input type="radio"
                                                    id="strawberry"
                                                    name="updatedFrName"
                                                    value="Strawberry"
                                                    defaultChecked={this.state.defaultSelectedFruit === "Strawberry"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="strawberry">Strawberry</label><br />
                                                <input type="radio"
                                                    id="mangga"
                                                    name="updatedFrName"
                                                    value="Mangga"
                                                    defaultChecked={this.state.selectedFruit === "Mangga"}
                                                    onChange={this.handleFruitChange}
                                                />
                                                <label htmlFor="mangga">Mangga</label><br />
                                            </div>
                                        </div>
                                        <div className="headerOuter">
                                            <label htmlFor="berat" className="headerInner"> Berat buah: </label>
                                            < input className="inlineBlock" type="number" name="updatedBerat" id="berat" defaultValue={this.state.defaultFruitWeight} onChange={this.handleWeightChange} placeholder="dalam gram" required />
                                        </div>
                                        <button className="btn-update">Update</button>
                                        <button className="btn-cancel" onClick={() => this.handleToggleEdit()}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default FormBuah2