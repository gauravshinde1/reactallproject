import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/images/projecttwo/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="City Tours Logo"/>
            <ul className="nav-links">
                <li>
                    <a href="/home" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/about" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/tours" className="nav-link active">tours</a>
                </li>
            </ul>
        </nav>
    )
}
