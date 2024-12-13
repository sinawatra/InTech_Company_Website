import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [isHoveredLearnMore, setIsHoveredLearnMore] = useState(false);

  const handleMouseEnterLearnMore = () => setIsHoveredLearnMore(true);
  const handleMouseLeaveLearnMore = () => setIsHoveredLearnMore(false);

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
        
        {/* Learn More Button */}
        <div className="learn-more-container">
          <button 
            className="learn-more" 
            aria-label="Learn More"
            onMouseEnter={handleMouseEnterLearnMore}
            onMouseLeave={handleMouseLeaveLearnMore}
          >
            Learn More
          </button>
          {isHoveredLearnMore && <div className="constructing-text">Constructing...</div>}
        </div>
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
