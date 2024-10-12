import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

// Mock data cho form và booking
const mockData = {
  checkinDate: new Date(),  // Dữ liệu ngày mặc định
  checkoutDate: new Date(),
  guestInfo: {
    adults: 2,
    children: 0,
    pets: 1
  },
  bookingOptions: [
    {
      partner: 'Booking',
      price: '1.350.000 VNĐ',
      buttonText: 'Đặt'
    },
    {
      partner: 'Agoda',
      price: '1.320.000 VNĐ',
      buttonText: 'Đặt'
    },
    {
      partner: 'Expedia',
      price: '1.400.000 VNĐ',
      buttonText: 'Đặt'
    }
  ]
};

const BookingSection = () => {
  const [data, setData] = useState(mockData);  // Sử dụng state để mock data
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);  // Trạng thái modal guest
  const [isCheckinOpen, setIsCheckinOpen] = useState(false);  // Kiểm soát trạng thái hiển thị DatePicker cho check-in
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // Kiểm soát trạng thái hiển thị DatePicker cho check-out
  const [guests, setGuests] = useState(data.guestInfo);  // Trạng thái khách

  const handleGuestModal = () => {
    setIsGuestModalOpen(!isGuestModalOpen);
  };

  const handleDateChange = (date, type) => {
    // Kiểm tra khi thay đổi ngày check-in
    if (type === 'checkinDate') {
      setData({
        ...data,
        checkinDate: date,
        checkoutDate: date > data.checkoutDate ? date : data.checkoutDate  // Nếu ngày check-in lớn hơn ngày check-out, đặt lại check-out bằng check-in
      });
    }

    // Kiểm tra khi thay đổi ngày check-out
    if (type === 'checkoutDate') {
      if (date >= data.checkinDate) {
        setData({
          ...data,
          checkoutDate: date
        });
      } else {
        alert('Ngày Check-out phải lớn hơn hoặc bằng ngày Check-in!');
      }
    }
  };

  const handleGuestChange = (type, value) => {
    setGuests({
      ...guests,
      [type]: value
    });
  };

  const saveGuestInfo = () => {
    setData({
      ...data,
      guestInfo: guests
    });
    setIsGuestModalOpen(false);  // Đóng modal
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '20px 0' }}>
      {/* Search form bên trái */}
      <div style={{ flex: '1' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '30px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            {/* Check-in */}
            <div style={{ width: '48%', paddingRight: '10px', position: 'relative' }}>
              <label>Check-in</label>
              <input
                type="text"
                value={data.checkinDate.toLocaleDateString('vi-VN')}
                onClick={() => setIsCheckinOpen(true)}  // Hiển thị DatePicker khi người dùng nhấn vào input
                className="form-control"
                readOnly
              />
              {isCheckinOpen && (
                <DatePicker
                  selected={data.checkinDate}
                  onChange={(date) => handleDateChange(date, 'checkinDate')}
                  dateFormat="dd/MM/yyyy"
                  inline
                  onClickOutside={() => setIsCheckinOpen(false)}  // Đóng DatePicker khi người dùng click ra ngoài
                />
              )}
            </div>

            {/* Check-out */}
            <div style={{ width: '48%', paddingLeft: '10px', position: 'relative' }}>
              <label>Check-out</label>
              <input
                type="text"
                value={data.checkoutDate.toLocaleDateString('vi-VN')}
                onClick={() => setIsCheckoutOpen(true)}  // Hiển thị DatePicker khi người dùng nhấn vào input
                className="form-control"
                readOnly
              />
              {isCheckoutOpen && (
                <DatePicker
                  selected={data.checkoutDate}
                  onChange={(date) => handleDateChange(date, 'checkoutDate')}
                  dateFormat="dd/MM/yyyy"
                  inline
                  onClickOutside={() => setIsCheckoutOpen(false)}  // Đóng DatePicker khi người dùng click ra ngoài
                />
              )}
            </div>
          </div>

          {/* Guest Info */}
          <div style={{ marginBottom: '20px' }}>
            <label>Guest</label>
            <div
              onClick={handleGuestModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '10px',
                cursor: 'pointer'
              }}
            >
              <span role="img" aria-label="guest">👤</span>{' '}
              {`${guests.adults} người lớn, ${guests.children} trẻ em, ${guests.pets} thú cưng`}
            </div>
          </div>

          <p style={{ color: '#666', fontSize: '14px' }}>
            Giá là giá trung bình mỗi đêm mà các đối tác của chúng tôi cung cấp và có thể không bao gồm tất cả thuế và phí. Thuế và phí được hiển thị chỉ là ước tính. Vui lòng xem các đối tác của chúng tôi để biết thêm chi tiết.
          </p>
        </div>
      </div>

      {/* Booking info bên phải */}
      <div style={{ flex: '0.5' }}>
        {data.bookingOptions.map((option, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #2E3192',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div
                  style={{
                    color: '#2E3192',
                    fontWeight: 'bold',
                    fontSize: '20px'
                  }}
                >
                  {option.partner}
                </div>
                <div>{option.price}</div>
              </div>
              <button
                style={{
                  padding: '10px',
                  backgroundColor: '#2E3192',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px'
                }}
              >
                {option.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal cho phần chọn Guest */}
      <Modal
        isOpen={isGuestModalOpen}
        onRequestClose={handleGuestModal}
        contentLabel="Guest Modal"
      >
        <h2>Chọn số lượng khách</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Người lớn:</label>
          <input
            type="number"
            value={guests.adults}
            onChange={(e) => handleGuestChange('adults', e.target.value)}
            min="1"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Trẻ em:</label>
          <input
            type="number"
            value={guests.children}
            onChange={(e) => handleGuestChange('children', e.target.value)}
            min="0"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Thú cưng:</label>
          <input
            type="number"
            value={guests.pets}
            onChange={(e) => handleGuestChange('pets', e.target.value)}
            min="0"
          />
        </div>
        <button onClick={saveGuestInfo}>Lưu thông tin</button>
      </Modal>
    </div>
  );
};

export default BookingSection;
