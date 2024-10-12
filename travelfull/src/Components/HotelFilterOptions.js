import React, { useState } from 'react';
import GenericFilter from './GenericFilter';

const hotelFiltersConfig = [
  {
    type: 'range',
    key: 'price',
    label: 'Giá mỗi đêm',
    step: 1,
    min: 0,
    max: 1000,
    values: [100, 900], // Giá trị khởi tạo
  },
  {
    type: 'checkbox',
    key: 'categories',
    label: 'Loại khách sạn',
    options: [
      { value: 'luxury', label: 'Khách sạn sang trọng' },
      { value: 'resort', label: 'Resort' },
      { value: 'hostel', label: 'Hostel' },
    ],
    selected: ['luxury'], // Mặc định loại nào được chọn
  },
  {
    type: 'checkbox',
    key: 'roomType',
    label: 'Loại phòng',
    options: [
      { value: 'single', label: 'Phòng đơn' },
      { value: 'double', label: 'Phòng đôi' },
      { value: 'family', label: 'Phòng gia đình' },
      { value: 'sea-view', label: 'Phòng có view biển' },
    ],
    selected: ['single'], // Mặc định loại nào được chọn
  },
  {
    type: 'checkbox',
    key: 'ratings',
    label: 'Đánh giá',
    options: [
      { value: '5', label: '★★★★★ Trở lên' },
      { value: '4', label: '★★★★☆ Trở lên' },
      { value: '3', label: '★★★☆☆ Trở lên' },
    ],
    selected: ['5'], // Mặc định loại nào được chọn
  },
  {
    type: 'checkbox',
    key: 'promotions',
    label: 'Khuyến mãi',
    options: [
      { value: 'discount', label: 'Giảm giá' },
      { value: 'special', label: 'Ưu đãi đặc biệt' },
    ],
    selected: [], // Không chọn mặc định
  },
];

const HotelFilterOptions = ({ onFilterChange }) => {
  // Hàm này sẽ gọi khi có sự thay đổi bộ lọc từ GenericFilter
  const handleFilterChange = (updatedFilters) => {
    onFilterChange(updatedFilters);
  };

  return (
    <GenericFilter 
      filtersConfig={hotelFiltersConfig} 
      onFilterChange={handleFilterChange} 
    />
  );
};

export default HotelFilterOptions;
