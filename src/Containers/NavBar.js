import React from 'react'
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" id="nav-bar">
            <h1 id="logo-home" style={{ textDecoration: 'none' }}><Link to="/">F1 STATS</Link></h1>
            <Button id="driver-stats-link"><Link to="/driver-stats" style={{ textDecoration: 'none' }}>Driver Stats</Link></Button>
            <Button id="compare-drivers-link"><Link to="/compare-drivers" style={{ textDecoration: 'none' }}>Compare Drivers</Link></Button>

            {/* <h1 id="track-stats-link" style={{ textDecoration: 'none' }}><Link to="/track-stats">Track Stats</Link></h1>
            <h1 id="constructor-stats-link" style={{ textDecoration: 'none' }}><Link to="/constructor-stats">Constructor Stats</Link></h1> */}
        </Navbar>
    )
}

export default NavBar