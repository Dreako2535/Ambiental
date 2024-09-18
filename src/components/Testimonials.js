// src/components/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Laura Martínez",
      message: "Participar en las campañas de reforestación ha sido una experiencia transformadora. Ahora me siento más conectada con la naturaleza.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Carlos Pérez",
      message: "Las charlas sobre vida sostenible me han ayudado a reducir mi huella ecológica. Recomiendo EcoMundo a todos.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Ana González",
      message: "Los eventos de limpieza de playas me enseñaron la importancia de mantener nuestros océanos libres de plásticos.",
      image: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="testimonials-page">
      <h1>What People Are Saying</h1>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            message={testimonial.message}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
