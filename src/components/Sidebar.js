// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>EcoMundo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/guides">Guides</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>  {/* Enlace a la página de Testimonios */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
