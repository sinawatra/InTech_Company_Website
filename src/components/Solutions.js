import React from 'react';
import './Solutions.css';

function Solutions() {
  const solutions = [
    {
      title: 'Mobile Attendance System',
      description: 'An intuitive mobile app that makes clocking in and out seamless for employees.',
      Image: require('./Images/mobile_attendance.png'),
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'Advanced face recognition technology for accurate attendance tracking.',
      Image: require('./Images/face-recognition.png'),
    },
    {
      title: 'Smart Laundry System',
      description: 'Receive weekly QR codes to activate laundry machines with ease.',
      Image: require('./Images/smart-laundry.png'),
    },
  ];

  return (
    <section className="solutions-section" id='solution'>
      <h2>Our Smart Solutions</h2>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <img src={solution.Image} alt={solution.title} className="solution-image" />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
