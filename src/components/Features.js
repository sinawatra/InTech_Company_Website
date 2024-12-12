import React from 'react';

const features = [
  {
    title: 'Mobile Attendance System',
    description:
      'An intuitive mobile app that makes clocking in and out seamless for employees.',
    image: 'https://via.placeholder.com/150', // Replace with appropriate image
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'Advanced face recognition technology for accurate attendance tracking.',
    image: 'https://via.placeholder.com/150', // Replace with appropriate image
  },
  {
    title: 'Smart Laundry System',
    description:
      'Receive weekly QR codes to activate laundry machines with ease.',
    image: 'https://via.placeholder.com/150', // Replace with appropriate image
  },
];

const Features = () => {
  return (
    <section className="features" id="features" >
      <h2>Our Smart Solutions</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
