import React from 'react';
import FlightCard from './FlightCard';

const ListFlightCard = () => {
  const flightData = [
    {
      fromCity: 'Đà Nẵng',
      toCity: 'Hà Nội',
      duration: '1 giờ 30 phút',
      stops: 'Bay thẳng',
      price: '900.000',
      airlineLogo: 'https://via.placeholder.com/40x40'
    },
    {
      fromCity: 'TP.HCM',
      toCity: 'Hà Nội',
      duration: '2 giờ 15 phút',
      stops: '1 điểm dừng',
      price: '1.200.000',
      airlineLogo: 'https://via.placeholder.com/40x40'
    },
    {
      fromCity: 'Đà Nẵng',
      toCity: 'Hà Nội',
      duration: '3 giờ 45 phút',
      stops: '2 điểm dừng',
      price: '1.500.000',
      airlineLogo: 'https://via.placeholder.com/40x40'
    },
    // Thêm các chuyến bay khác
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {flightData.map((flight, index) => (
        <FlightCard
          key={index}
          fromCity={flight.fromCity}
          toCity={flight.toCity}
          duration={flight.duration}
          price={flight.price}
          airlineLogo={flight.airlineLogo}
          stops={flight.stops}
        />
      ))}
    </div>
  );
};

export default ListFlightCard;
