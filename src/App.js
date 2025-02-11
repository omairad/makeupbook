import React from 'react';
import HeaderComponent from './Component/HeaderComponent';
import HeroSection from './Component/HeroSection';
import ServicesSection from './Component/ServicesSection';
import TestimonialsSection from './Component/TestimonialsSection';
import ContactSection from './Component/ContactSection';
import FooterComponent from './Component/FooterComponent';
import BookingSchedulerComponent from './Component/BookingSchedulerComponent';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSchedulerComponent />
      <ContactSection />
      <FooterComponent />
    </div>
  );
};

export default App;