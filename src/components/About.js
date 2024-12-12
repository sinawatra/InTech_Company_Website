import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-box">
          <div className="about-content">
            <div className="about-image">
              <img src={require('./Images/Intechblue.png')} alt="InTech Office" />
            </div>
            <div className="about-text">
              <h2 style={{ textAlign: 'left' }}>About InTech</h2>
              <div className="mission-vision">
                <div className="mission">
                  <h3 style={{ textAlign: 'left' }}>Mission</h3>
                  <p style={{ textAlign: 'left' }}>Revolutionize workplace efficiency and security through innovative smart technology solutions.</p>
                  <div className="vision">
                    <h3 style={{ textAlign: 'left' }}>Vision</h3>
                    <p style={{ textAlign: 'left' }}>Be the leading provider of cutting-edge smart technology, creating smarter, more efficient, and secure work environments for businesses of all sizes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;