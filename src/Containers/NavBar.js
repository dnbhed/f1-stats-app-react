import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <h2 id="driver-stats-link"><Link to="/driver-stats">Driver Stats</Link></h2>
            <h2 id="comopare-drivers-link">Compare Drivers</h2>
            <h1 id="logo-home"><Link to="/">F1 V</Link></h1>
            <h2 id="track-stats-link">Track Stats</h2>
            <h2 id="constructor-stats-link">Constructor Stats</h2>
        </nav>
    )
}

{/* <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/pricing">Pricing</Link>
    </li>

</ul> */}

export default NavBar