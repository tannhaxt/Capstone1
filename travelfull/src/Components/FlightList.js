import React from 'react';
import FlightCard from './FlightCard'; // Giả định bạn đã có component FlightCard

const FlightList = () => {
  // Mock data tạm thời cho chuyến bay
  const flights = [
    {
      id: 1,
      departureCity: "Đà Nẵng",
      arrivalCity: "Hà Nội",
      duration: "1 giờ 30 phút",
      price: "900.000",
      airline: "VietJet Air",
      logo: "vietjet-logo.png",  // Đường dẫn tới logo của hãng hàng không
    },
    {
      id: 2,
      departureCity: "Đà Nẵng",
      arrivalCity: "TP Hồ Chí Minh",
      duration: "2 giờ",
      price: "1.200.000",
      airline: "Vietnam Airlines",
      logo: "vna-logo.png",  // Đường dẫn tới logo của hãng hàng không
    },
    // Thêm nhiều chuyến bay giả khác nếu cần
  ];

  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
      {/* Pagination (phân trang) */}
    </div>
  );
};

export default FlightList;
