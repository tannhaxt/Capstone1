import React from 'react';

const Amenities = ({ amenities }) => {
  return (
    <div className="amenities">
      <h4>Tiện ích</h4>
      <div className="d-flex flex-wrap">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity d-flex align-items-center me-4">
            <i className="bi bi-check-circle" style={{ fontSize: '1.5rem', color: '#2E3192', fontWeight: 'bold' }}></i>
            <span className="ms-2" style={{ color: '#2E3192' }}>{amenity.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
