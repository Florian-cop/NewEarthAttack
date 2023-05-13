import React, { useState } from 'react';
import "../Style/TourBlock.css"

const TourBlock = ({ tour }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [addressPart1, addressPart2] = tour.address.split(',');
  const dateTour = new Date(tour.date);
  const dateToday = new Date();
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const formattedDateTour = `${days[dateTour.getDay()]} ${dateTour.getDate()} ${months[dateTour.getMonth()]}, ${dateTour.getFullYear()}`;

  function handleTicketsButtonClick() {
    setShowPopup(true);
  }
  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="tour-block">
      <div className="tour-block-text">
        <h3 className="tour-block-title">{tour.title}</h3>
        {tour.description.map((description, index) => (
          <p key={index} className="tour-block-description">{description}</p>
        ))}
      </div>
	  {dateTour >= dateToday ? (
        	<div className="tour-block-buttons">
				<button className="tour-block-btn set-reminder-btn">Set Reminder</button>
				<button className="tour-block-btn tickets-btn" onClick={handleTicketsButtonClick}>Tickets</button>
	  		</div>
		) : (	
			<div className="tour-block-buttons">
				<button className="tour-block-btn set-reminder-btn">I was here</button>
	  		</div>
			)
		}
      {showPopup && (
            <div className="overlay" onClick={handleClosePopup} >
              <div className="popup" onClick={(e) => e.stopPropagation()}>
                  <button className="close-popup-btn" onClick={handleClosePopup}>
                      &times;
                  </button>
                <h1 className="popup-title-informations">Informations</h1>
                <div className="popup-content">
					<i className="fas fa-info-circle"></i>
					<div className="popup-left">
						<h3>
							{tour.title}
						</h3>
						<p>{formattedDateTour}</p>
						<p>{tour.heure}</p>
					</div>
					<div className="popup-right">
						<i className="fas fa-info-circle"></i>
						<a href={`https://www.google.com/maps/search/?api=1&query=${tour.address}`} target="_blank" rel="noreferrer" className="popup-address">
							<span className="address-part-1">{addressPart1}</span>
							<span className="address-part-2">{addressPart2}</span>
						</a>
					</div>
                </div>
				<div className="ticket-button-container">
					{tour.tickets ? (
						<button className="buy-tickets-btn">Buy Tickets</button>
					) : (
						<p className="no-reservation-text">No need reservation</p>
					)}
				</div>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default TourBlock;
