import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/header";
import FilterBar from "../Components/FilterBar";
import FlightFilterOptions from "../Components/FlightFilterOptions.js"; // Import bộ lọc chuyến bay
import FlightList from "../Components/FlightList"; // Import danh sách chuyến bay
import Footer from "../Components/footer";

const FlightSearch = () => {
  const [activeCategory, setActiveCategory] = useState("flights"); // Mặc định là chuyến bay
  const [filters, setFilters] = useState({});
  const [flights, setFlights] = useState([
    // Mock dữ liệu chuyến bay
    { id: 1, departure: 'Đà Nẵng', destination: 'Hà Nội', price: 900, airline: 'VietJet', stops: 0 },
    { id: 2, departure: 'Đà Nẵng', destination: 'Hà Nội', price: 1500, airline: 'Vietnam Airlines', stops: 1 },
    { id: 3, departure: 'Đà Nẵng', destination: 'Hà Nội', price: 1200, airline: 'Jetstar Pacific', stops: 0 },
  ]);
  const [filteredFlights, setFilteredFlights] = useState(flights);

  // Hàm xử lý khi thay đổi loại danh mục từ FilterBar
  const handleCategoryChange = (value) => {
    setActiveCategory(value);
  };

  // Hàm xử lý khi thay đổi bộ lọc
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  // Hàm áp dụng bộ lọc cho danh sách chuyến bay
  const applyFilters = (filters) => {
    let filtered = flights;

    // Áp dụng bộ lọc giá
    if (filters.price) {
      filtered = filtered.filter(
        (flight) => flight.price >= filters.price[0] && flight.price <= filters.price[1]
      );
    }

    // Thêm logic bộ lọc khác như số điểm dừng, hãng hàng không, v.v.
    if (filters.stops) {
      filtered = filtered.filter(flight => filters.stops.includes(String(flight.stops)));
    }

    setFilteredFlights(filtered); // Cập nhật danh sách chuyến bay đã lọc
  };

  return (
    <div>
      {/* Header của trang */}
      <Header />

      {/* Layout nội dung */}
      <div style={{ paddingLeft: "112px", paddingRight: "112px" }}>
        {/* Filter Bar */}
        <FilterBar onCategoryChange={handleCategoryChange} />

        {/* Danh mục chuyến bay */}
        {activeCategory === "flights" && (
          <>
            <Row className="mt-4">
              {/* Tùy chọn bộ lọc chuyến bay */}
              <Col md={3}>
                <FlightFilterOptions onFilterChange={handleFilterChange} />
              </Col>

              {/* Danh sách chuyến bay */}
              <Col md={9}>
                <FlightList flights={filteredFlights} /> {/* Truyền danh sách chuyến bay đã lọc */}
              </Col>
            </Row>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FlightSearch;
