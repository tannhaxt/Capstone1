import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "../Style/HotelSearchSection.css"; 

const HotelSearchSection = () => {
  const data = {
    city: "Đà Nẵng",
    mapImageUrl: "https://www.google.com/maps/d/thumbnail?mid=1Y1F2xC7du2dGx1wS_O8L9jN6rG2M&hl=vi", // Thay bằng URL ảnh bản đồ của bạn
    checkInDate: "2024-10-29",
    checkOutDate: "2024-10-31",
    guestInfo: "1 phòng, 2 người lớn, 0 trẻ em"
  };

  return (
    <div className="hotel-search-section">
      <Container>
        <Row>
          <Col md={4} className="map-container">
          <Col md={4} className="map-container">
            <div 
              className="map-image" 
              style={{ 
                backgroundImage: `url(${data.mapImageUrl})`, 
                borderRadius: '12px', 
                width: '250px',  // Thêm width
                height: '250px' // Thêm height
              }}
            ></div>
          </Col>
          </Col>
          <Col md={8}>
            <h2 className="section-title">
              Khách sạn tại thành phố {data.city}
            </h2>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Group controlId="checkInDate">
                  <Form.Label className="input-label">Check-in</Form.Label>
                  <Form.Control type="date" defaultValue={data.checkInDate} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="checkOutDate">
                  <Form.Label className="input-label">Check-out</Form.Label>
                  <Form.Control type="date" defaultValue={data.checkOutDate} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="guestInfo">
              <Form.Label className="input-label">Guest</Form.Label>
              <Form.Control 
                type="text" 
                readOnly 
                value={data.guestInfo} 
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HotelSearchSection;