import React, { useState } from 'react';
import './Header.css';
import logo from './Images/logo.png'; // Adjust the path as necessary

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      {/* Hamburger Menu */}
      <div
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        ☰
      </div>
      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
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
