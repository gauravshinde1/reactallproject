import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/projectone">All Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/projectone">Project One</Link>
                            <Link to="/projecttwo">Project Two</Link>
                            <Link to="/projectthree">Project Three</Link>
                            <Link to="/projectfour">Project Four</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
