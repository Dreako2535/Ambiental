import React from 'react';
import '../styles/ArticleCard.css';

const ArticleCard = ({ title, description }) => {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
}

export default ArticleCard;
