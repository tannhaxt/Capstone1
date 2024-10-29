import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api';

export const searchLocation = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search-location`, { params: { query } });
    return response.data.data || []; // Truy cập vào `data` theo đúng cấu trúc trả về
  } catch (error) {
    console.error('Lỗi khi gọi API tìm kiếm địa điểm:', error);
    throw error;
  }
};

export const searchHotels = async (geoId, checkIn, checkOut) => {
  // Thiết lập giá trị mặc định nếu checkIn và checkOut chưa được cung cấp
  const today = new Date();
  const defaultCheckIn = checkIn || today.toISOString().split('T')[0]; // Định dạng mặc định: YYYY-MM-DD
  const defaultCheckOut = checkOut || new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0]; // Ngày checkOut mặc định là ngày tiếp theo

  try {
    const response = await axios.get(`${BASE_URL}/search-hotels`, {
      params: {
        geoId,
        checkIn: defaultCheckIn,
        checkOut: defaultCheckOut,
        pageNumber: 1,
        currencyCode: 'USD',
      },
    });
    return response.data.data || []; // Đảm bảo trả về mảng khách sạn (hoặc mảng rỗng nếu không có)
  } catch (error) {
    console.error('Lỗi khi gọi API tìm kiếm khách sạn:', error);
    throw error;
  }
};

export const getHotelDetails = async (id, checkIn, checkOut, currency = 'USD') => {
  // Thiết lập giá trị mặc định cho checkIn và checkOut
  const today = new Date();
  const defaultCheckIn = checkIn || today.toISOString().split('T')[0]; // Ngày hôm nay
  const defaultCheckOut = checkOut || new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0]; // Ngày tiếp theo

  try {
    const response = await axios.get(`${BASE_URL}/get-hotel-details`, {
      params: {
        id,
        checkIn: defaultCheckIn,
        checkOut: defaultCheckOut,
        currency,
      },
    });
    return response.data.data || {}; // Truy cập vào `data` theo đúng cấu trúc trả về
  } catch (error) {
    console.error('Lỗi khi lấy chi tiết khách sạn:', error);
    throw error;
  }
};