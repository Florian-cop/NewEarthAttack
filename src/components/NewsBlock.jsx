import React from "react";
import "../Style/NewsBlock.css";
import { Link } from "react-router-dom";

const NewsBlock = ({ news, imageUrl }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`news-block-container news-block-container-number${news.id}`}>
      <img className="news-image" src={imageUrl} alt="Earth Attack - News" />
      <Link
        to={'/news/' + news.url}
        state={{
          news: news,
          imageUrl: imageUrl,
        }}
        className="news-title-link"
        onClick={scrollToTop}
      >
        <h1 className="news-title">{news.title}</h1>
      </Link>

      <p className="news-date">{news.date}</p>
      <p className="news-excerpt">{news.excerpt}</p>
      <Link
        to={'/news/' + news.url}
        state={{
          news: news,
          imageUrl: imageUrl,
        }}
        onClick={scrollToTop}
      >
        <button className="read-more-button">Read more</button>
      </Link>
    </div>
  );
};

export default NewsBlock;
