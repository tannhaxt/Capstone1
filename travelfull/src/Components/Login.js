import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post('/auth/login', formData);
      console.log('Đăng nhập thành công', res.data);
    } catch (error) {
      console.error('Đăng nhập thất bại: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={handleChange} placeholder="Mật khẩu" required />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Login;
