import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Style/NewsDetails.css";
//import DOMPurify from 'dompurify';

const NewsDetails = () => {
    const location = useLocation();
    const news = location.state.news;
    const imageUrl = location.state.imageUrl;
	
    //const sanitizedHTML = DOMPurify.sanitize(news.fullDescription);

    return (
 		<div className="news-first-div">
            <img className="news-details-image" src={imageUrl} alt={news.title} />
            <div className="news-details">
                <p className="news-details-date">{news.date}</p>
                <h1 className="news-details-title">{news.title}</h1>
                <div className="news-details-content" dangerouslySetInnerHTML={{ __html: news.fullDescription }} />
            </div>
        </div>
    );
};

export default NewsDetails;
