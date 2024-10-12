import React, { useState } from 'react';

const FlightInput = ({ setFilters, flightType, setFlightType }) => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [legs, setLegs] = useState([{ from: '', to: '' }]); // Chỉ dùng cho chuyến bay nhiều chặng

  // Hàm thêm chặng bay (nếu chọn chuyến nhiều chặng)
  const addLeg = () => {
    setLegs([...legs, { from: '', to: '' }]);
  };

  const updateLeg = (index, field, value) => {
    const updatedLegs = legs.map((leg, i) =>
      i === index ? { ...leg, [field]: value } : leg
    );
    setLegs(updatedLegs);
  };

  const handleSearch = () => {
    setFilters({
      departure,
      destination,
      departureDate,
      returnDate: flightType === 'return' ? returnDate : null,
      multiStopLegs: flightType === 'multi-stop' ? legs : [],
    });
  };

  return (
    <div>
      {/* Nút chọn loại chuyến bay */}
      <div>
        <button onClick={() => setFlightType('return')}>Chuyến khứ hồi</button>
        <button onClick={() => setFlightType('one-way')}>Chuyến một chiều</button>
        <button onClick={() => setFlightType('multi-stop')}>Chuyến bay nhiều chặng</button>
      </div>

      {/* Input cho Điểm đi, Điểm đến, Ngày đi, Ngày về */}
      <div>
        <input
          type="text"
          placeholder="Điểm đi"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          placeholder="Điểm đến"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          placeholder="Ngày đi"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />

        {flightType === 'return' && (
          <input
            type="date"
            placeholder="Ngày về"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        )}

        {flightType === 'multi-stop' && (
          <div>
            {legs.map((leg, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder={`Điểm đi ${index + 1}`}
                  value={leg.from}
                  onChange={(e) => updateLeg(index, 'from', e.target.value)}
                />
                <input
                  type="text"
                  placeholder={`Điểm đến ${index + 1}`}
                  value={leg.to}
                  onChange={(e) => updateLeg(index, 'to', e.target.value)}
                />
              </div>
            ))}
            <button onClick={addLeg}>Thêm chặng</button>
          </div>
        )}
      </div>

      <button onClick={handleSearch}>Tìm kiếm chuyến bay</button>
    </div>
  );
};

export default FlightInput;
