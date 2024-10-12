import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/header";
import FilterBar from "../Components/FilterBar";
import HotelFilterOptions from "../Components/HotelFilterOptions"; // Importing the hotel filter options
import HotelList from "../Components/HotelList"; // Assuming this component lists hotels
import Footer from "../Components/footer";

const HotelSearch = () => {
  const [activeCategory, setActiveCategory] = useState("hotels");
  const [filters, setFilters] = useState({});
  const [hotels, setHotels] = useState([
    // List of mock hotel data for demonstration
    { id: 1, name: 'Hotel A', price: 300, rating: 5 },
    { id: 2, name: 'Hotel B', price: 150, rating: 4 },
    { id: 3, name: 'Hotel C', price: 500, rating: 3 },
  ]);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  // Handle category change from FilterBar
  const handleCategoryChange = (value) => {
    setActiveCategory(value);
  };

  // Function to handle filter change
  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  // Function to apply filters to the hotel list
  const applyFilters = (filters) => {
    let filtered = hotels;

    // Apply price filter
    if (filters.price) {
      filtered = filtered.filter(
        (hotel) => hotel.price >= filters.price[0] && hotel.price <= filters.price[1]
      );
    }

    // Add other filter logics like categories, roomType, rating, promotions, etc.

    setFilteredHotels(filtered); // Update the filtered hotels to display
  };

  return (
    <div>
      {/* Header of the page */}
      <Header />

      {/* Content layout */}
      <div style={{ paddingLeft: "112px", paddingRight: "112px" }}>
        {/* Filter Bar */}
        <FilterBar onCategoryChange={handleCategoryChange} />

        {/* Hotel category filtering */}
        {activeCategory === "hotels" && (
          <>
            <Row className="mt-4">
              {/* Hotel Filter Options */}
              <Col md={3}>
                <HotelFilterOptions onFilterChange={handleFilterChange} />
              </Col>

              {/* Hotel List */}
              <Col md={9}>
                <HotelList hotels={filteredHotels} /> {/* Pass filtered hotels */}
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

export default HotelSearch;
