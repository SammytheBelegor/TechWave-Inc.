// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to="/">TechWave</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Product Page</Link></li>
                        <li><Link to="/order">Order Form</Link></li>
                        <li><Link to="/contact">Contact Info</Link></li>
                        <li><Link to="/news">News Feed</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
