import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/header";
import FilterBar from "../Components/FilterBar";
import HotelSearchSection from "../Components/HotelSearchSection";
import HotelFilterCard from "../Components/HotelFilterCard";
import HotelList from "../Components/HotelList";
import Footer from "../Components/footer";

const ResultSearch = () => {
  const [activeCategory, setActiveCategory] = useState("hotels");

  const handleCategoryChange = (value) => {
    setActiveCategory(value);
  };

  return (
    <div>
      <Header />
      <div style={{ paddingLeft: "112px", paddingRight: "112px" }}>
        {/* Filter Bar */}
        <FilterBar onCategoryChange={handleCategoryChange} />

        {/* Hotel Search Section */}
        {activeCategory === "hotels" && <HotelSearchSection />}
        
        <Row className="mt-4">
          {/* Filter Card */}
          <Col md={3}>
            {activeCategory === "hotels" && <HotelFilterCard />}
          </Col>

          {/* Hotel List */}
          <Col md={9}>
            {activeCategory === "hotels" && <HotelList />}
          </Col>
        </Row>
      </div>

      {/* Footer không cần căn chỉnh 2 bên 112px */}
      <Footer />
    </div>
  );
};

export default ResultSearch;
