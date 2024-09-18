import React from 'react';
import '../styles/home.css';
import ArticleCard from './ArticleCard';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to EcoMundo</h1>
      <p>Explore our resources to learn how to protect the environment.</p>
      <div className="article-cards">
        <ArticleCard title="How to Recycle Properly" description="Learn the best recycling practices." />
        <ArticleCard title="Saving Energy at Home" description="Tips to reduce energy consumption." />
        <ArticleCard title="Reduce Plastic Waste" description="Practical steps to reduce plastic." />
      </div>
    </div>
  );
}

export default Home;
