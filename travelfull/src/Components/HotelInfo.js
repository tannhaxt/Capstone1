import React from 'react';

const HotelInfo = ({ name, address, reviews }) => {
  return (
    <div className="hotel-info">
      <h2>{name}</h2>
      <div className="address d-flex align-items-center">
        <i style={{paddingRight: '4px'}} className="bi bi-geo-alt-fill"></i>
        <span>{address}</span>
      </div>
      <div className="reviews d-flex align-items-center">
        {[...Array(5)].map((_, idx) => (
          <i key={idx} className="bi bi-star-fill text-success"></i>
        ))}
        <span style={{paddingLeft: '16px'}}>{reviews} reviews</span>
      </div>
    </div>
  );
};

export default HotelInfo;
