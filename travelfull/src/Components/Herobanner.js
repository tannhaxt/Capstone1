import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../Images/HeroImage.png";
import '../Style/Style.css'; // Import file Style.css

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-overlay"></div>
      <Container>
        <Row>
          <Col xs={12} className="hero-content">
            <h1 className="hero-title">
              Khám phá thế giới <br />
              Trải nghiệm bất tận <br />
              cùng Travelfull
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
