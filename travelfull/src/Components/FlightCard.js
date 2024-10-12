import React from 'react';
import ticketImage from '../Images/ticket-bg.png';
import '../Style/FlightCard.css';

const FlightCard = ({ flight }) => {
  const { departureCity, arrivalCity, duration, price, airline, logo } = flight; // Nhận dữ liệu chuyến bay từ props

  return (
    <div className="flight-card-container">
      {/* Không thêm khung viền, chỉ có nền */}
      <div className="ticket-bg" style={{ backgroundImage: `url(${ticketImage})` }}>
        <div className="info-container">
          {/* Thông tin chuyến bay */}
          <div className="info-block">
            <div className="label">Thành phố</div>
            <div className="value">{departureCity}</div>
          </div>

          <div className="info-block">
            <h6 className="duration">{duration}</h6>
            <div className="label">Bay thẳng</div> {/* Giả định là bay thẳng */}
          </div>

          <div className="info-block">
            <div className="label">Thành phố</div>
            <div className="value">{arrivalCity}</div>
          </div>
        </div>

        {/* Phần giữa với đường đứt đoạn */}
        <div className="dash-container">
          <div className="dash left"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc56dc1fb01d0c72f04b456e2b63a4f5b6b0e00a67a17f202216a2f92c75abe?placeholderIfAbsent=true&apiKey=54303e3ce45868140930e8b43c931"
            alt="plane"
            className="plane"
          />
          <div className="dash right"></div>
        </div>

        {/* Phần giá vé và logo hãng hàng không */}
        <div className="price-container">
          <img
            src={logo} // Logo hãng hàng không
            alt={`${airline} logo`}
            className="logo"
          />
          <div className="price">
            <span className="price-label">Chỉ từ</span>
            <span className="price-value">{price} VNĐ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
