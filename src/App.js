// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Articles from './components/Articles';
import Guides from './components/Guides';
import Events from './components/Events';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';  // Importa el componente de Testimonios
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />  {/* Ruta para la página de Testimonios */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
