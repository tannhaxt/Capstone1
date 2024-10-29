import React from 'react';
import { Link } from 'react-router-dom';
import FlightCard from './FlightCard';

const FlightList = () => {
  const flights = [
    {
      id: 1,
      departureCity: "Đà Nẵng",
      arrivalCity: "Hà Nội",
      duration: "1 giờ 30 phút",
      price: "900.000",
      airline: "VietJet Air",
      logo: "vietjet-logo.png",
    },
    {
      id: 2,
      departureCity: "Đà Nẵng",
      arrivalCity: "TP Hồ Chí Minh",
      duration: "2 giờ",
      price: "1.200.000",
      airline: "Vietnam Airlines",
      logo: "vna-logo.png",
    },
  ];

  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <Link
          key={flight.id}
          to={{
            pathname: `/flight-detail/${flight.id}`,
            state: { flight: flight },
          }}
        >
          <FlightCard flight={flight} />
        </Link>
      ))}
    </div>
  );
};

export default FlightList;
