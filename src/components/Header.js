import React from 'react';
import './Header.css';
import logo from './Images/logo.png'; // Adjust the path as necessary

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero-section" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#solution" className="nav-link">Products</a></li>
          <li><a href="#footer" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <button className="request-demo" aria-label="Request Demo">
        Request Demo
      </button>
    </header>
  );
}

export default Header;
