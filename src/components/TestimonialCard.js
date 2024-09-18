// src/components/TestimonialCard.js
import React from 'react';
import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, message, image }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <h2>{name}</h2>
      <p>"{message}"</p>
    </div>
  );
};

export default TestimonialCard;
