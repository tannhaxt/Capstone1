import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const FlightDetail = () => {
  const location = useLocation(); // Lấy thông tin URL hiện tại

  // Lấy dữ liệu chuyến bay từ location.state (nếu truyền từ component khác qua)
  const flight = location.state?.flight;

  if (!flight) {
    return <div>Không tìm thấy thông tin chuyến bay!</div>;
  }

  return (
    <div>
      <h2>Chi tiết chuyến bay</h2>
      <p>Từ: {flight.departure}</p>
      <p>Đến: {flight.destination}</p>
      <p>Giá: {flight.price} VND</p>
      <p>Hãng: {flight.airline}</p>
      {/* Thêm các thông tin khác nếu cần */}
    </div>
  );
};

export default FlightDetail;
