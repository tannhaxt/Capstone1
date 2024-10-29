import React from 'react';

const BookingInfo = ({ price }) => {
  return (
    <div className="booking-info">
      <h3 style={{ color: '#2E3192' }}>{price}</h3>
      <button className="btn btn-primary" style={{ backgroundColor: '#2E3192', borderColor: '#2E3192' }}>Đặt ngay</button>
    </div>
  );
};

export default BookingInfo;
