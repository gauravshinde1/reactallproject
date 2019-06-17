import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="mr-4 text-warning" to="/">Card List</Link>
                            <Link className="mr-4 text-warning" to="/projecttwo">Tour</Link>
                            <Link className="mr-4 text-warning" to="/projectthree">TODO List</Link>
                            <Link className="mr-4 text-warning" to="/projectfour">Recipes</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
