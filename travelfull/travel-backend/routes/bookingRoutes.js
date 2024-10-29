// tripadvisorRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// API key và host cho TripAdvisor
const API_KEY = '8b784eede5msh08055aa52c4ab1ap129ab5jsn0a057d2d0d77';
const API_HOST = 'tripadvisor16.p.rapidapi.com';

// Hàm gọi API của TripAdvisor với cơ chế retry khi gặp lỗi 429
const callTripAdvisorAPI = async (url, params, res, retries = 3) => {
  try {
    const options = {
      method: 'GET',
      url: `https://${API_HOST}${url}`,
      params,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    };
    const response = await axios.request(options);
    res.json(response.data); // Trả về dữ liệu từ API TripAdvisor trực tiếp
  } catch (error) {
    if (error.response && error.response.status === 429 && retries > 0) {
      console.warn('Rate limit hit, retrying after delay...');
      setTimeout(() => callTripAdvisorAPI(url, params, res, retries - 1), 3000); // Retry sau 3 giây
    } else {
      console.error('Lỗi khi gọi API:', error.message);
      res.status(500).send('Lỗi khi lấy dữ liệu từ TripAdvisor API');
    }
  }
};

// Route - Tìm kiếm địa điểm
router.get('/search-location', (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).send('Thiếu từ khóa tìm kiếm');
  }
  callTripAdvisorAPI('/api/v1/hotels/searchLocation', { query }, res);
});

// Route - Tìm kiếm khách sạn
router.get('/search-hotels', (req, res) => {
  const { geoId, checkIn, checkOut, pageNumber, currencyCode } = req.query;

  // Kiểm tra các tham số bắt buộc
  if (!geoId || !checkIn || !checkOut) {
    return res.status(400).json({ message: 'Thiếu các tham số bắt buộc: geoId, checkIn, hoặc checkOut' });
  }

  const params = {
    geoId,
    checkIn,
    checkOut,
    pageNumber: pageNumber || '1',
    currencyCode: currencyCode || 'USD',
  };

  callTripAdvisorAPI('/api/v1/hotels/searchHotels', params, res);
});


// Route - Lấy chi tiết khách sạn
router.get('/get-hotel-details', (req, res) => { 
  const id = req.query.id; // Đổi tên tham số thành id
  if (!id) {
    return res.status(400).send('Thiếu id'); // Thông báo lỗi khi thiếu id
  }

  const params = {
    id,
    currency: req.query.currency || 'USD',
    checkIn: req.query.checkIn || new Date().toISOString().split('T')[0], // Giá trị mặc định cho checkIn là ngày hôm nay
    checkOut: req.query.checkOut || new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0] // Giá trị mặc định cho checkOut là ngày tiếp theo
  };

  callTripAdvisorAPI('/api/v1/hotels/getHotelDetails', params, res);
});

module.exports = router;
