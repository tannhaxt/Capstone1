import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const mockData = {
  checkinDate: new Date(),
  checkoutDate: new Date(),
  guestInfo: {
    adults: 2,
    children: 0,
    pets: 1,
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
    }
  ]
};

const BookingSection = () => {
  const [data, setData] = useState(mockData); 
  const [guests, setGuests] = useState(data.guestInfo || { adults: 1, children: 0, pets: 0 });
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isCheckinOpen, setIsCheckinOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleGuestModal = () => setIsGuestModalOpen(!isGuestModalOpen);

  const handleDateChange = (date, type) => {
    if (type === 'checkinDate') {
      setData({
        ...data,
        checkinDate: date,
        checkoutDate: date > data.checkoutDate ? date : data.checkoutDate,
      });
    }
    if (type === 'checkoutDate') {
      if (date >= data.checkinDate) {
        setData({
          ...data,
          checkoutDate: date,
        });
      } else {
        alert('Ngày Check-out phải lớn hơn hoặc bằng ngày Check-in!');
      }
    }
  };

  const handleGuestChange = (type, value) => {
    setGuests({
      ...guests,
      [type]: value,
    });
  };

  const saveGuestInfo = () => {
    setData({
      ...data,
      guestInfo: guests,
    });
    setIsGuestModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', margin: '20px 0' }}>
      <div style={{ flex: '1' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ width: '48%', paddingRight: '10px', position: 'relative' }}>
              <label>Check-in</label>
              <input
                type="text"
                value={data.checkinDate.toLocaleDateString('vi-VN')}
                onClick={() => setIsCheckinOpen(true)}
                className="form-control"
                readOnly
              />
              {isCheckinOpen && (
                <DatePicker
                  selected={data.checkinDate}
                  onChange={(date) => handleDateChange(date, 'checkinDate')}
                  dateFormat="dd/MM/yyyy"
                  inline
                  onClickOutside={() => setIsCheckinOpen(false)}
                />
              )}
            </div>

            <div style={{ width: '48%', paddingLeft: '10px', position: 'relative' }}>
              <label>Check-out</label>
              <input
                type="text"
                value={data.checkoutDate.toLocaleDateString('vi-VN')}
                onClick={() => setIsCheckoutOpen(true)}
                className="form-control"
                readOnly
              />
              {isCheckoutOpen && (
                <DatePicker
                  selected={data.checkoutDate}
                  onChange={(date) => handleDateChange(date, 'checkoutDate')}
                  dateFormat="dd/MM/yyyy"
                  inline
                  onClickOutside={() => setIsCheckoutOpen(false)}
                />
              )}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Guest</label>
            <div onClick={handleGuestModal} style={{ cursor: 'pointer', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginTop: '10px' }}>
              <span role="img" aria-label="guest">👤</span>
              {`${guests.adults} người lớn, ${guests.children} trẻ em, ${guests.pets} thú cưng`}
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: '0.5' }}>
        {data.bookingOptions.map((option, index) => (
          <div key={index} style={{ border: '1px solid #2E3192', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#2E3192', fontWeight: 'bold', fontSize: '20px' }}>{option.partner}</div>
                <div>{option.price}</div>
              </div>
              <button style={{ backgroundColor: '#2E3192', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
                {option.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isGuestModalOpen} onRequestClose={handleGuestModal} contentLabel="Guest Modal">
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
