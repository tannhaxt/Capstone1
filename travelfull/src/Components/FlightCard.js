import React from 'react';
import { Link } from 'react-router-dom'; // Import Link để điều hướng
import ticketImage from '../Images/ticket-bg.png';
import '../Style/FlightCard.css';

const FlightCard = ({ flight }) => {
  const { departureCity, arrivalCity, duration, price, airline, logo } = flight;

  return (
    <div className="flight-card-container">
      {/* Thay <div> bằng <Link> để có thể nhấn vào card */}
      <Link to={`/flight-detail/${flight.id}`} state={{ flight }}>  {/*  Truyền flight qua state */}
        <div className="ticket-bg" style={{ backgroundImage: `url(${ticketImage})` }}>
          <div className="info-container">
            <div className="info-block">
              <div className="label">Thành phố</div>
              <div className="value">{departureCity}</div>
            </div>

            <div className="info-block">
              <h6 className="duration">{duration}</h6>
              <div className="label">Bay thẳng</div>
            </div>

            <div className="info-block">
              <div className="label">Thành phố</div>
              <div className="value">{arrivalCity}</div>
            </div>
          </div>

          <div className="dash-container">
            <div className="dash left"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc56dc1fb01d0c72f04b456e2b63a4f5b6b0e00a67a17f202216a2f92c75abe?placeholderIfAbsent=true&apiKey=54303e3ce45868140930e8b43c931"
              alt="plane"
              className="plane"
            />
            <div className="dash right"></div>
          </div>

          <div className="price-container">
            <img src={logo} alt={`${airline} logo`} className="logo" />
            <div className="price">
              <span className="price-label">Chỉ từ</span>
              <span className="price-value">{price} VNĐ</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlightCard;
