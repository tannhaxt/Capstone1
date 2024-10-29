import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts.css';
import logo from '../Images/Logo.png'; // Đảm bảo đường dẫn chính xác

const header = () => {
  const navBarStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // Căn các phần tử về phía đầu
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    width: '1270px',
    height: '35px',
    margin: '27px auto' // Cách đều hai bên lề và cách trên dưới 27px
  };

  const navLinksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '60px' // Cách logo 60px
  };

  const navLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '329px'
  };

  const navLinkStyle = {
    textDecoration: 'none',
    fontSize: '16px', // 16px
    fontWeight: '600', // Semibold
    color: '#000'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginLeft: 'auto' // Đẩy các nút về phía cuối
  };

  const buttonStyle = {
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const registerButtonStyle = {
    ...buttonStyle,
    border: '2px solid #2E3192',
    backgroundColor: 'transparent',
    color: '#2E3192'
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2E3192',
    color: '#fff',
    border: 'none'
  };

  return (
    <nav style={navBarStyle}>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Travello Logo" style={{ height: '100%' }} />
        </a>
      </div>
      <div style={navLinksContainerStyle}>
        <div style={navLinksStyle}>
          <a href="#" style={navLinkStyle}>Trang chủ</a>
          <a href="#" style={navLinkStyle}>Chuyến đi</a>
          <a href="#" style={navLinkStyle}>Hỗ trợ</a>
          <a href="#" style={navLinkStyle}>Đặt chỗ</a>
        </div>
      </div>
      <div className="buttons" style={buttonContainerStyle}>
        <button style={registerButtonStyle}>Đăng ký</button>
        <button style={loginButtonStyle}>Đăng nhập</button>
      </div>
    </nav>
  );
};

export default header;
