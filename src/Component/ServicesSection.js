import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Bridal Makeup</h3>
          <p>Professional bridal makeup for your special day.</p>
        </div>
        <div className="service-item">
          <h3>Fashion Shoots</h3>
          <p>High-quality makeup for fashion and editorial shoots.</p>
        </div>
        <div className="service-item">
          <h3>Everyday Makeup</h3>
          <p>Natural and flawless makeup for everyday wear.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;