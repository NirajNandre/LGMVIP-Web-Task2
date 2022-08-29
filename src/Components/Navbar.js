import React from 'react'
import './Navbar.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">Let's Grow More Services</span>
                <div className='button'>
                <button onClick={getData}>Get Users Data</button>
                </div>
            </div>
        </nav>
    )
}