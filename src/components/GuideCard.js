// src/components/GuideCard.js
import React from 'react';
import '../styles/GuideCard.css';

const GuideCard = ({ title, description }) => {
  return (
    <div className="guide-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default GuideCard;
