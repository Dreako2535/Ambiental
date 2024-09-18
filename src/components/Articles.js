// src/components/Articles.js
import React from 'react';
import '../styles/Articles.css';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = [
    {
      title: "The Impact of Climate Change",
      description: "Learn how climate change affects ecosystems around the world.",
    },
    {
      title: "How to Start Composting at Home",
      description: "A beginner's guide to start composting in your backyard.",
    },
    {
      title: "Reducing Plastic Waste",
      description: "Practical steps you can take to reduce plastic waste.",
    },
    {
      title: "The Importance of Reforestation",
      description: "Discover why reforestation is essential to save our planet.",
    },
  ];

  return (
    <div className="articles-page">
      <h1>Environmental Articles</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <ArticleCard 
            key={index}
            title={article.title}
            description={article.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
