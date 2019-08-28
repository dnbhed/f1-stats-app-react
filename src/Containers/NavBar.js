import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <h1 id="driver-stats-link"><Link to="/driver-stats" style={{ textDecoration: 'none' }}>Driver Stats</Link></h1>
            <h1 id="logo-home" style={{ textDecoration: 'none' }}><Link to="/">F1 V</Link></h1>
            <h1 id="compare-drivers-link"><Link to="/compare-drivers" style={{ textDecoration: 'none' }}>Compare Drivers</Link></h1>

            {/* <h1 id="track-stats-link" style={{ textDecoration: 'none' }}><Link to="/track-stats">Track Stats</Link></h1>
            <h1 id="constructor-stats-link" style={{ textDecoration: 'none' }}><Link to="/constructor-stats">Constructor Stats</Link></h1> */}
        </nav>
    )
}

export default NavBar