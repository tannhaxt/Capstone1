import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { searchHotels } from "../Services/bookingService"; 
import Header from "../Components/header";
import FilterBar from "../Components/FilterBar";
import HotelFilterOptions from "../Components/HotelFilterOptions";
import HotelList from "../Components/HotelList"; 
import Footer from "../Components/footer";

const HotelSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const geoId = queryParams.get('geoId');

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filters, setFilters] = useState({});
  const [activeCategory, setActiveCategory] = useState("hotels");

  useEffect(() => {
    const fetchHotels = async () => {
      if (!geoId) {
        console.error("Missing geoId");
        return;
      }

      try {
        const data = await searchHotels(geoId);
        console.log("Data from API:", data); // Kiểm tra dữ liệu trả về từ API
        setHotels(data.data || []); // Sử dụng data.data nếu đó là mảng
        setFilteredHotels(data.data || []); // Kiểm tra dữ liệu có dạng mảng không
      } catch (error) {
        console.error("Lỗi khi lấy danh sách khách sạn:", error);
      }
    };

    fetchHotels();
  }, [geoId]);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filters) => {
    let filtered = hotels;

    if (filters.price) {
      filtered = filtered.filter(
        (hotel) => hotel.priceForDisplay >= filters.price[0] && hotel.priceForDisplay <= filters.price[1]
      );
    }

    setFilteredHotels(filtered); 
  };

  return (
    <div>
      <Header />

      <div style={{ paddingLeft: "112px", paddingRight: "112px" }}>
        <FilterBar onCategoryChange={(category) => setActiveCategory(category)} />

        {activeCategory === "hotels" && (
          <Row className="mt-4">
            <Col md={3}>
              <HotelFilterOptions onFilterChange={handleFilterChange} />
            </Col>

            <Col md={9}>
              <HotelList hotels={filteredHotels} /> 
            </Col>
          </Row>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HotelSearch;
