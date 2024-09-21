import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Fatima Makeup Artist</h1>
        <p>Enhancing your beauty for every occasion.</p>
        <a href="#book" className="hero-button">Book Now</a>
      </div>
    </section>
  );
};

export default HeroSection;