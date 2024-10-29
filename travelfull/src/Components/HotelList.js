import React from "react";
import { Row, Col } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../Style/HotelList.css";

const HotelList = ({ hotels }) => {
  const navigate = useNavigate();

  const handleHotelClick = (hotelId) => {
    navigate(`/hotel-detail/${String(hotelId)}`);

  };

  return (
    <div className="hotel-card-list" style={{ maxWidth: '821px', margin: '0 auto' }}>
      {Array.isArray(hotels) && hotels.map((hotel, index) => {
        const hotelId = hotel.id;
        const name = hotel.title || "Tên khách sạn không khả dụng";
        const imageUrl = hotel.cardPhotos?.[0]?.sizes?.urlTemplate
          ? hotel.cardPhotos[0].sizes.urlTemplate.replace("{width}", "300").replace("{height}", "200")
          : "default-image-url.png";
        const price = hotel.priceForDisplay || "Giá không khả dụng";
        const rating = hotel.bubbleRating?.rating || 0;
        const reviewCount = hotel.bubbleRating?.count || "0";

        return (
          <div 
            key={index} 
            className="hotel-card mb-4 rounded shadow-sm p-3" 
            onClick={() => handleHotelClick(hotelId)} // Gọi hàm điều hướng khi nhấp vào khách sạn
            style={{ cursor: 'pointer' }} // Thêm con trỏ chuột dạng 'pointer' để người dùng biết rằng phần tử có thể nhấp vào được
          >
            <Row>
              <Col md={4} className="mb-3 mb-md-0">
                <div style={{ width: '100%', height: '270px', overflow: 'hidden', borderRadius: '8px' }}>
                  <img 
                    src={imageUrl} 
                    alt={name} 
                    className="img-fluid w-100" 
                    style={{ objectFit: 'cover', height: '100%' }}
                  />
                </div>
              </Col>

              <Col md={8}>
                <h5 className="mb-0" style={{ color: '#1C1D58', fontSize: '24px', fontFamily: 'SVN-Gilroy', fontWeight: '700' }}>
                  {name}
                </h5>
                <div className="d-flex align-items-center">
                  {[...Array(5)].map((star, i) => (
                    <StarFill 
                      key={i} 
                      className="star-icon" 
                      style={{ color: i < Math.round(rating) ? '#248232' : '#ccc' }} 
                    />
                  ))}
                  <span className="ms-2" style={{ color: '#474A49', fontSize: '16px' }}>
                    {rating} ({reviewCount} reviews)
                  </span>
                </div>
                <h4 className="mb-3" style={{ color: '#2E3192', fontSize: '32px', fontFamily: 'SVN-Gilroy', fontWeight: '600' }}>
                  {price}
                </h4>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default HotelList;
