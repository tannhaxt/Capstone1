// src/api/userApi.js
import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/register'; // Đường dẫn của API đăng ký
    return axiosClient.post(url, data); // Gửi POST request
  },
  
  login(data) {
    const url = '/auth/login'; // Đường dẫn của API đăng nhập
    return axiosClient.post(url, data);
  },
};

export default userApi;
