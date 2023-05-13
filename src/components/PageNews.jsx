import React from 'react';
import '../Style/PageNews.css';
import NewsBlock from './NewsBlock';
import newsData from '../data/newsData.json';
import SingleNebulous from '../Image/Morceaux/Single-Nebulous.jpg'; // Importez l'image ici

const PageNews = () => {
  return (
    <div className="page-news">
      <h1>News & Updates</h1>
      <div className="news-grid">
        {newsData.map((news) => (
          <NewsBlock
            key={news.id}
            imageUrl={news.imageUrl === 'Single-Nebulous.jpg' ? SingleNebulous : ''}
            news={news}
          />
        ))}
      </div>
    </div>
  );
};

export default PageNews;
