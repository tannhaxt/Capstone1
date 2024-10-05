import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2E3192', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <h5 className="mb-3">Quick links</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white text-decoration-none">About Us</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Contact Us</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Help Center</a></li>
                  <li><a href="/" className="text-white text-decoration-none">My Trips</a></li>
                </ul>
              </Col>
              <Col md={4}>
                <h5 className="mb-3">Connect With Us</h5>
                <ul className="list-unstyled">
                  <li><a href="/" className="text-white text-decoration-none">Newsletter</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Careers</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Partnerships</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Feedback</a></li>
                  <li><a href="/" className="text-white text-decoration-none">Events</a></li>
                </ul>
              </Col>
              <Col md={4}>
                <h5 className="mb-3">Stay Connected</h5>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <Facebook className="me-2" size={16} />
                    <a href="/" className="text-white text-decoration-none">Facebook</a>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Instagram className="me-2" size={16} />
                    <a href="/" className="text-white text-decoration-none">Instagram</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <Youtube className="me-2" size={16} />
                    <a href="/" className="text-white text-decoration-none">Youtube</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="mb-4">
              <h6 className="regular" style={{ marginBottom: '21px' }}>
                Đăng ký nhận bản tin để cập nhật các tính năng và thông tin mới nhất
              </h6>
              <Form className="d-flex" style={{ marginBottom: '21px' }}>
                <Form.Group controlId="formEmail" className="flex-grow-1 me-2">
                  <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    className="rounded-pill" 
                    style={{ height: '40px', paddingLeft: '20px' }}
        />
      </Form.Group>
      <Button 
        variant="light" 
        type="submit" 
        className="rounded-pill"
        style={{ height: '40px', padding: '0 16px' }}
      >
        Join
      </Button>
    </Form>
    <p className="regular" style={{ marginBottom: '21px' }}>
      Bằng cách nhấp vào "Đăng ký", bạn đồng ý với Chính sách quyền riêng tư của chúng tôi.
    </p>
  </div>
</Col>
        </Row>
        <hr style={{ borderColor: '#fff' }} />
        <Row className="text-center">
          <Col md={4} className="text-md-start">
            <p className="mb-0">© 2024 Relume. All rights reserved.</p>
          </Col>
          <Col md={8} className="d-flex justify-content-md-end gap-3">
            <a href="/" className="text-white ">Privacy Policy</a>
            <a href="/" className="text-white ">Term of Service</a>
            <a href="/" className="text-white ">Cookie Settings</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
