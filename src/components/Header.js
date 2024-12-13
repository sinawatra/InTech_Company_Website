import React, { useState } from 'react';
import './Header.css';
import logo from './Images/logo.png'; // Adjust the path as necessary

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
      <div className="request-demo-container">
        <button 
          className="request-demo" 
          aria-label="Request Demo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Request Demo
        </button>
        {isHovered && <div className="constructing-text">Constructing...!!</div>}
      </div>
    </header>
  );
}

export default Header;
