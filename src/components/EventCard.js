// src/components/EventCard.js
import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <button>Register Now</button>
    </div>
  );
};

export default EventCard;
