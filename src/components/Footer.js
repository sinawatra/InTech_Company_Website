import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
  
    <footer className="footer" id='footer' >
      <div className="footer-left">
        <p>"Empowering smarter workplaces with innovative solutions – InTech."</p>
      </div>
      <div className="footer-right">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
          <li><a href="#hero-section" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#solution" className="nav-link">Products</a></li>
          <li><a href="#footer" className="nav-link">Contact</a></li>
        </ul>
        </div>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>
            Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune, Phnom Srouch
            District, Kampong Speu Province, Cambodia
          </p>
          <p>012 345 678</p>
          <div className="social-icons">
  <a href="https://github.com/sinawatra" target="_blank" rel="noopener noreferrer">
    <img src={require('./Images/telegram.png')} alt="telegram" className="social-icon" />
    </a>

    <a href="https://github.com/sinawatra" target="_blank" rel="noopener noreferrer">
    <img src={require('./Images/instagram.png')} alt="instagram" className="social-icon" />
    </a>

    <a href="https://github.com/sinawatra" target="_blank" rel="noopener noreferrer">
    <img src={require('./Images/facebook.png')} alt="Facebook" className="social-icon" />
    </a>

    <a href="https://github.com/sinawatra" target="_blank" rel="noopener noreferrer">
    <img src={require('./Images/X.png')} alt="x" className="social-icon" />
    </a>
    </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
