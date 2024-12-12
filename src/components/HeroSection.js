import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-text">
        <h1>
          <span>Revolutionizing</span>
          <span> Workplace</span>
          <span> Efficiency with</span>
          <span> Smart Technology!</span>
        </h1>
        <p>Explore our cutting-edge solutions designed to simplify and secure your business operations.</p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="hero-image">
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
        <img src={require('./Images/about-image.png')} alt="InTech Conference Room" />
      </div>
    </section>
  );
}

export default HeroSection;
