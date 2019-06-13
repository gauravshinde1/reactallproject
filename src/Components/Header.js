import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/projectone">All Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/projectone">Project One</Nav.Link>
                            <Nav.Link href="/projecttwo">Project Two</Nav.Link>
                            <Nav.Link href="/projectthree">Project Three</Nav.Link>
                            <Nav.Link href="/projectfour">Project Four</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
