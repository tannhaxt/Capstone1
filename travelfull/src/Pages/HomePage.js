import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/header";
import SearchBar from "../Components/Searchbar";
import HeroBanner from "../Components/Herobanner";
import NavTab from "../Components/Navtab";
import MainContent from "../Components/Maincontent-Landingpage";  // Import MainContent mới
import Footer from "../Components/footer";
import '../Style/Style.css'; // Import file CSS

const Landing = () => {
  return (
    <>
      {/* Header */}
      <div className="landing-page">
        <Header />

        {/* Main Section */}
        <Container>
          <Row className="align-items-center flex-nowrap mb-2">
            {/* SearchBar */}
            <Col xs={12} md={8} className="d-flex mb-3 mb-md-0">
              <SearchBar />
            </Col>

            {/* NavTab */}
            <Col xs={12} md={4} className="d-flex justify-content-end">
              <NavTab />
            </Col>
          </Row>

          {/* HeroBanner */}
          <HeroBanner />

          {/* MainContent */}
          <MainContent /> {/* Thêm phần nội dung chính vào */}
        </Container>
      </div>

      {/* Footer */}
      <Footer />  {/* Đặt footer bên ngoài landing-page để full-width */}
    </>
  );
};

export default Landing;
