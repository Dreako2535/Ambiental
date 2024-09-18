// src/components/Events.js
import React from 'react';
import '../styles/Events.css';
import EventCard from './EventCard';

const Events = () => {
  const events = [
    {
      title: "Tree Planting Workshop",
      date: "October 5, 2024",
      location: "Green Park",
      description: "Join us in planting trees to restore the local ecosystem.",
    },
    {
      title: "Sustainable Living Seminar",
      date: "November 10, 2024",
      location: "City Hall",
      description: "Learn about sustainable living practices and how to implement them.",
    },
    {
      title: "Beach Cleanup",
      date: "December 12, 2024",
      location: "Sunset Beach",
      description: "Help us clean up plastic waste from the shorelines.",
    },
    {
      title: "Eco-Friendly Products Expo",
      date: "January 15, 2025",
      location: "Community Center",
      description: "Explore eco-friendly products and services from local vendors.",
    },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Environmental Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
