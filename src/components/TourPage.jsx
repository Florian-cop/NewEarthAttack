import React, { useState } from 'react';
import TourBlock from './TourBlock';
import tourDataAll from '../data/tourDataUpcoming';
import '../Style/TourPage.css';

const TourPage = () => {
	const [filter, setFilter] = useState('upcoming');

	const handleFilterClick = (filterType) => {
	  setFilter(filterType);
	};
  
	const filteredTourData = tourDataAll.filter((tourData) => {
	  const dateTour = new Date(tourData.date);
	  const dateToday = new Date();
  
	  if (filter === 'upcoming') {
		return dateTour >= dateToday;
	  } else if (filter === 'past') {
		return dateTour < dateToday;
	  } else {
		return true;
	  }
	});

  return (
    <div className="tour-page">
		<div className="tour-title-container">
			<span className="tour-title">Tour</span>
		</div>
			<button className="follow-btn">
				<i className="fas fa-plus"></i> Follow
			</button>
		<div className="tour-filter">
			<span className="filter-option" onClick={() => handleFilterClick('upcoming')}>
			Upcoming
			</span>
			<span className="separator">|</span>
			<span className="filter-option" onClick={() => handleFilterClick('past')}>
			Past
			</span>
			{/* <span className="separator">|</span>
			<span className="filter-option">Near me</span> */}
		</div>
			<div className="tour-block-container">
			{filteredTourData.map((tourData, index) => (
			<TourBlock key={index} tour={tourData} />
			))}
			</div>
    </div>
  );
};

export default TourPage;
