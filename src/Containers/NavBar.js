import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Navbar, { Nav, NavDropdown } from 'react-bootstrap/Navbar'


const NavBar = (props) => {
    return (
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="#home">F1 V</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             {/* <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#link">Link</Nav.Link>
        //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //             </NavDropdown> */}
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <nav id="nav-bar">
            <h1 id="driver-stats-link"><Link to="/driver-stats">Driver Stats</Link></h1>
            <h1 id="compare-drivers-link"><Link to="/compare-drivers">Compare Drivers</Link></h1>
            <h1 id="logo-home"><Link to="/">F1 V</Link></h1>
            <h1 id="track-stats-link"><Link to="/track-stats">Track Stats</Link></h1>
            <h1 id="constructor-stats-link"><Link to="/constructor-stats">Constructor Stats</Link></h1>
        </nav>
    )
}

export default NavBar