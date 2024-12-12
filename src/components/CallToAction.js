import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="call-to-action" id="cta">
      <div className="cta-text">
        <h2>Ready to Upgrade Your Business?</h2>
        <p>Request a demo today and discover how InTech can transform your workplace!</p>
        <button className="cta-button">Request Demo Now</button>
      </div>
      <div className="cta-image">
        <img src={require('./Images/demo-image.png')} alt="Upgrade Business" />
      </div>
    </section>
  );
}

export default CallToAction;
