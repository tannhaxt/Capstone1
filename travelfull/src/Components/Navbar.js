import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../Images/Logo.png';
import '../Style/Style.css'; // Import file Style.css

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-section">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Travelfull Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="nav-link-item">Trang chủ</Nav.Link>
            <Nav.Link href="#" className="nav-link-item">Chuyến đi</Nav.Link>
            <Nav.Link href="#" className="nav-link-item">Hỗ trợ</Nav.Link>
            <Nav.Link href="#" className="nav-link-item">Đặt chỗ</Nav.Link>
          </Nav>
          <div className="button-group">
            <button className="register-button">Đăng ký</button>
            <button className="login-button">Đăng nhập</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
