// src/components/Guides.js
import React from 'react';
import '../styles/Guides.css';
import GuideCard from './GuideCard';

const Guides = () => {
  const guides = [
    {
      title: "Beginner's Guide to Recycling",
      description: "Step-by-step instructions on how to recycle properly.",
    },
    {
      title: "How to Save Water at Home",
      description: "Tips and tricks to reduce water consumption.",
    },
    {
      title: "Sustainable Gardening Practices",
      description: "Learn eco-friendly ways to maintain a garden.",
    },
    {
      title: "Energy-Efficient Living",
      description: "How to reduce your energy usage and save money.",
    },
  ];

  return (
    <div className="guides-page">
      <h1>Environmental Guides</h1>
      <div className="guides-list">
        {guides.map((guide, index) => (
          <GuideCard 
            key={index}
            title={guide.title}
            description={guide.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Guides;
