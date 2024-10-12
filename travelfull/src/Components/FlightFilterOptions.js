import React from 'react';
import GenericFilter from './GenericFilter'; // Sử dụng lại GenericFilter đã viết

const flightFiltersConfig = [
  {
    type: 'range',
    key: 'price',
    label: 'Giá vé',
    step: 1,
    min: 0,
    max: 1000,
    values: [0, 100], // Giá trị khởi tạo cho thanh trượt
  },
  {
    type: 'checkbox',
    key: 'stops',
    label: 'Số trạm dừng',
    options: [
      { value: 'direct', label: 'Bay thẳng' },
      { value: '1-stop', label: '1 điểm dừng' },
      { value: '2-stop', label: '2 điểm dừng' },
      { value: '3-stop', label: '3 điểm dừng trở lên' },
    ],
    selected: [], // Không chọn mặc định
  },
  {
    type: 'range',
    key: 'departureTime',
    label: 'Giờ khởi hành',
    step: 1,
    min: 0,
    max: 24,
    values: [8, 20], // Giá trị khởi tạo cho giờ
  },
  {
    type: 'range',
    key: 'arrivalTime',
    label: 'Giờ hạ cánh',
    step: 1,
    min: 0,
    max: 24,
    values: [8, 20], // Giá trị khởi tạo cho giờ
  },
  {
    type: 'checkbox',
    key: 'airlines',
    label: 'Hãng hàng không',
    options: [
      { value: 'vietjet', label: 'VietJet Air' },
      { value: 'vietnam-airlines', label: 'Vietnam Airlines' },
      { value: 'jetstar', label: 'Jetstar Pacific' },
      { value: 'bamboo', label: 'Bamboo Airways' },
    ],
    selected: [], // Không chọn mặc định
  },
  {
    type: 'checkbox',
    key: 'ticketClass',
    label: 'Hạng vé',
    options: [
      { value: 'economy', label: 'Phổ thông' },
      { value: 'premium-economy', label: 'Phổ thông đặc biệt' },
      { value: 'business', label: 'Thương gia' },
      { value: 'first', label: 'Hạng nhất' },
    ],
    selected: [], // Không chọn mặc định
  },
  {
    type: 'checkbox',
    key: 'layoverAirports',
    label: 'Sân bay quá cảnh',
    options: [
      { value: 'atl', label: 'ATL Atlanta' },
      { value: 'dtw', label: 'DTW Detroit' },
      { value: 'dta', label: 'DTA Washington DC' },
      { value: 'bna', label: 'BNA Nashville' },
    ],
    selected: [], // Không chọn mặc định
  },
];

const FlightFilterOptions = ({ onFilterChange }) => {
  return (
    <GenericFilter 
      filtersConfig={flightFiltersConfig} 
      onFilterChange={onFilterChange} 
    />
  );
};

export default FlightFilterOptions;
