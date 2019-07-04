import React from 'react'
import './NavBar.css'

const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <h2 id="driver-stats-link">Driver Stats</h2>
            <h2 id="comopare-drivers-link">Compare Drivers</h2>
            <h1>F1 V</h1>
            <h2 id="track-stats-link">Track Stats</h2>
            <h2 id="constructor-stats-link">Constructor Stats</h2>
        </nav>
    )
}

export default NavBar