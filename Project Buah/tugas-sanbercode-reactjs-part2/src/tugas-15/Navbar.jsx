import React, { useState, useContext } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [flag, setFlag] = useState(true);
    const { theme, setSelectedTheme } = useContext(ThemeContext)
    
    const setTheme = (params) => {
        setSelectedTheme(params);
        setFlag(!flag)
        console.log(flag);
    }
    
    return (
        <div className="navbar" style={{ background: theme.background, color: theme.color, }}>
            <div style={{ background: "" }}></div>
            <ul>
                <li>
                    {
                        flag === true &&
                        <button className="btn-light" onClick={() => setTheme(themes.light)}>Light</button>
                    }
                    {
                        flag !== true &&
                        <button className="btn-dark" onClick={() => setTheme(themes.dark)}>Dark</button>
                    }
                </li>
                <li>
                    <Link to='/'>Tugas 9</Link>
                </li>
                <li>
                    <Link to='/tugas10'>Tugas 10</Link>
                </li>
                <li>
                    <Link to='/tugas11'>Tugas 11</Link>
                </li>
                <li>
                    <Link to='/tugas12'>Tugas 12</Link>
                </li>
                <li>
                    <Link to='/tugas13'>Tugas 13</Link>
                </li>
                <li>
                    <Link to='/tugas14'>Tugas 14</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;