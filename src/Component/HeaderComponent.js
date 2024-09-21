import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <h1>Fatima Makeup Artist</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#book">Book Now</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;