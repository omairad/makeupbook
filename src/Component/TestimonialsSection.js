import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial-item">
          <p>"Fatima did an amazing job on my bridal makeup! She made me feel like a princess."</p>
          <h4>- Sarah</h4>
        </div>
        <div className="testimonial-item">
          <p>"I love the makeup look she created for my fashion shoot. It was exactly what I wanted."</p>
          <h4>- Aisha</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;