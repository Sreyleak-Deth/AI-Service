import React from 'react';
import '../styles/Header.css';
import logo from '../asset/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="app-bar">
      <div className="app-bar-center">
        <div className="app-bar-logo">
          <img src={logo} alt="AI Logo" />
        </div>
        <div className="app-bar-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="app-bar-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
