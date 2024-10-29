import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchLocation } from '../Services/bookingService'; // Đảm bảo import đúng service

const SearchBar = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return;

    try {
      const data = await searchLocation(searchTerm);  // Gọi API từ back-end để tìm kiếm địa điểm
      if (data && data.length > 0) {
        const geoId = data[0].geoId;  // Lấy geoId của địa điểm đầu tiên
        navigate(`/search-hotels?geoId=${geoId}`);  // Điều hướng tới trang tìm kiếm khách sạn với geoId
      } else {
        console.log("Không tìm thấy điểm đến phù hợp.");
      }
    } catch (error) {
      console.error('Lỗi khi tìm kiếm:', error);
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Tìm kiếm khách sạn..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
