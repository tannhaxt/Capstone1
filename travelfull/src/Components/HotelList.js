import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons'; 
import RosamiaImage from "../Images/Rosamia.jpg";
import BookingLogo from "../Images/Booking.png"; // Thay đường dẫn đến logo Booking
import "../Style/HotelList.css";

const HotelList = () => {
  const hotels = [
    {
      name: "Khách sạn Rosamia Đà Nẵng",
      rating: 4.87,
      reviews: 202,
      imageUrl: RosamiaImage, 
      price: "1.350.000",
      beds: 3,
      bathrooms: 2,
      area: "60m2",
      capacity: 6,
      partnerLogo: BookingLogo, 
    },
    {
      name: "Khách sạn Furama Resort Đà Nẵng",
      rating: 4.5,
      reviews: 150,
      imageUrl: "https://via.placeholder.com/301x250", // Thay bằng hình ảnh thực tế
      price: "2.500.000",
      beds: 2,
      bathrooms: 1,
      area: "45m2",
      capacity: 4,
      partnerLogo: BookingLogo,  // Thay bằng logo đối tác
    },
    
    // ... thêm dữ liệu khách sạn khác
  ];

  return (
    <div className="hotel-card-list" style={{ maxWidth: '821px', margin: '0 auto' }}> 
    {hotels.map((hotel, index) => (
      <div key={index} className="hotel-card mb-4 rounded shadow-sm p-3">
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <div style={{ width: '100%', height: '270px', overflow: 'hidden', borderRadius: '8px' }}>  {/* Container cho ảnh */}
              <img 
                src={hotel.imageUrl} 
                alt={hotel.name} 
                className="img-fluid w-100" 
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Col>
            <Col md={8}>
              <Row>
                <Col md={12} className="mb-2"> 
                  <h5 className="mb-0" style={{ color: '#1C1D58', fontSize: '24px', fontFamily: 'SVN-Gilroy', fontWeight: '700' }}>{hotel.name}</h5>
                </Col>
                <Col md={12} className="d-flex align-items-center"> 
                  {[...Array(5)].map((star, i) => (
                    <StarFill key={i} className="star-icon" style={{ color: i < hotel.rating ? '#248232' : '#ccc' }} />
                  ))}
                  <span className="ms-2" style={{ color: '#474A49', fontSize: '16px' }}>{hotel.rating}</span>
                  <span className="ms-2" style={{ color: '#474A49', fontSize: '16px' }}>({hotel.reviews} reviews)</span>
                </Col>
              </Row>

              <div className="d-flex align-items-center mt-2"> 
                <img src={hotel.partnerLogo} alt="Partner Logo" minWidth="120" height="60" />
              </div>

              <h4 className="mb-3" style={{ color: '#2E3192', fontSize: '32px', fontFamily: 'SVN-Gilroy', fontWeight: '600' }}>{hotel.price} VNĐ</h4>
              <Row className="hotel-details">
                <Col xs={6} md={3} className="mb-2">
                  <p className="text-muted">Số giường</p>
                  <p className="fw-bold">{hotel.beds}</p>
                </Col>
                <Col xs={6} md={3} className="mb-2">
                  <p className="text-muted">Phòng tắm</p>
                  <p className="fw-bold">{hotel.bathrooms}</p>
                </Col>
                <Col xs={6} md={3} className="mb-2">
                  <p className="text-muted">Diện tích</p>
                  <p className="fw-bold">{hotel.area}</p>
                </Col>
                <Col xs={6} md={3} className="mb-2">
                  <p className="text-muted">Số người</p>
                  <p className="fw-bold">{hotel.capacity}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default HotelList;