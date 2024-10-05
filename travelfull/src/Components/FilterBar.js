import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Style/FilterBar.css'

const FilterBar = () => {
  const [activeCategory, setActiveCategory] = useState('hotels'); // Mặc định chọn "Khách sạn"

  const categories = [
    { label: 'Khách sạn', value: 'hotels' },
    { label: 'Chuyến bay', value: 'flights' },
    { label: 'Địa điểm vui chơi', value: 'attractions' },
    { label: 'Nhà hàng', value: 'restaurants' },
  ];

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
  };

  return (
    <Container className="filter-bar py-3">
      <Row>
        <Col>
          <ul className="nav nav-underline">
            {categories.map((category) => (
              <li key={category.value} className="nav-item">
                <a
                  href={`/${category.value}`} // Điều hướng đến trang tương ứng
                  className={`nav-link ${activeCategory === category.value ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category.value)}
                  style={{
                    color: activeCategory === category.value ? '#2E3192' : 'black',
                    fontSize: '24px',
                    fontFamily: 'SVN-Gilroy',
                    fontWeight: '600',
                    
                  }}
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="filter-line"></div> {/*  Thêm  div  cho  đường  line  */}
        </Col>
      </Row>
    </Container>
  );
};

export default FilterBar;