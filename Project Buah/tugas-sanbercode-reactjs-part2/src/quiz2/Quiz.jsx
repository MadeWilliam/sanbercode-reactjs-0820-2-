import React, { Component } from 'react';

const data = [
    { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" },
    { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" },
    { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" },
    { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]



class App extends Component {
    render() {
        return (
            <div style={{ width: "600px", height: '100%', margin: '0 auto' }}>
                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', margin: 0, padding: 0 }}>
                    {
                        data.map((el, i) => {
                            return (
                                <Komponen key={i} item={el} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

class Komponen extends Component {
    render() {
        return (
            <li style={{ display: 'flex', padding: '1rem' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '0.5rem', boxShadow: '0 20px 40px -14px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ height: '150px', width: '250px', overflow: 'hidden' }}>
                        <img src={this.props.item.photo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%' }} height="150px" alt="" />
                    </div>
                    <div style={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', padding: '1rem' }}>
                        <p><b> {this.props.item.gender === "Male" ? `Mr ${this.props.item.name}` : `Mrs ${this.props.item.name}`} </b></p>
                        <p> {this.props.item.profession} </p>
                        <td> {`${this.props.item.age} years old`} </td>
                    </div>
                </div>
            </li>
        );
    }
}


export default App;