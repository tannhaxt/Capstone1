import React, { useState } from 'react';
import '../Style/Filter.css';
import { Range } from 'react-range';
import '../fonts.css';



const Filter = () => {
  const [values, setValues] = useState([100, 900]); // Giá trị mặc định: $100 - $900

  return (
    <div className="filters-container">
      {/* Price Filter */}
      <div className="price-range-slider">
      <h6>Giá mỗi đêm</h6>
      <Range
        step={1}
        min={0}
        max={1000}
        values={values}
        onChange={(values) => setValues(values)}
        
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="slider-track"
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            <div // Thêm div với class slider-range
              className="slider-range"
              style={{
                position: 'absolute',
                top: 0,
                left: `${(values[0] / 1000) * 100}%`,
                width: `${((values[1] - values[0]) / 1000) * 100}%`,
                height: '6px',
                backgroundColor: '#000' 
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="slider-thumb"
            style={{
              ...props.style,
              height: '18px', //  Thay đổi  kích  thước 
              width: '18px', // Thay đổi  kích thước
              backgroundColor: '#000',
              cursor: 'pointer' 
            }}
          />
        )}
      />
       <div className="price-range-labels">
          <span>${values[0]} - ${values[1]}</span> {/* Hiển thị giá trị min-max */} 
        </div>
      {/* ... */}
    </div>
    <hr style={{ marginTop: '0px' }} /> {/* Thêm đường kẻ ngang */}

      {/* Hotel Type Filter */}
      <div className="card-filter">
        <div className="card-header">
          <h6>Loại khách sạn</h6>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="luxury-hotel" />
            <label className="form-check-label" htmlFor="luxury-hotel">
              Khách sạn sang trọng
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="resort" />
            <label className="form-check-label" htmlFor="resort">
              Resort
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="hostel" />
            <label className="form-check-label" htmlFor="hostel">
              Hostel
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="service-apartment" />
            <label className="form-check-label" htmlFor="service-apartment">
              Căn hộ dịch vụ
            </label>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '0px' }} /> {/* Thêm đường kẻ ngang */}

      {/* Amenities Filter */}
      <div className="card-filter">
        <div className="card-header">
          <h6>Tiện ích</h6>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wifi" />
            <label className="form-check-label" htmlFor="wifi">
              Wifi tiện ích
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="breakfast" />
            <label className="form-check-label" htmlFor="breakfast">
              Bữa sáng miễn phí
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="pool" />
            <label className="form-check-label" htmlFor="pool">
              Hồ bơi
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gym" />
            <label className="form-check-label" htmlFor="gym">
              Phòng gym
            </label>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '0px' }} /> {/* Thêm đường kẻ ngang */}

      {/* Room Type Filter */}
      <div className="card-filter">
        <div className="card-header">
          <h6>Loại phòng</h6>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="single-room" />
            <label className="form-check-label" htmlFor="single-room">
              Phòng đơn
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="double-room" />
            <label className="form-check-label" htmlFor="double-room">
              Phòng đôi
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="family-room" />
            <label className="form-check-label" htmlFor="family-room">
              Phòng gia đình
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sea-view-room" />
            <label className="form-check-label" htmlFor="sea-view-room">
              Phòng có view hướng biển
            </label>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '0px' }} /> {/* Thêm đường kẻ ngang */}

      {/* Rating Filter */}
      <div className="card-filter">
        <div className="card-header">
          <h6>Đánh giá</h6>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rating-5" />
            <label style={{ color:"green"}} className="form-check-label" htmlFor="rating-5">
              ★★★★★ 
            </label>
            <label clas>Trở lên</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rating-4" />
            <label style={{ color:"green"}} className="form-check-label" htmlFor="rating-4">
              ★★★★☆ 
            </label>
            <label>Trở lên</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rating-3" />
            <label style={{ color:"green"}} className="form-check-label" htmlFor="rating-3">
              ★★★☆☆ 
            </label>
            <label>Trở lên</label>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '10px' }} /> {/* Thêm đường kẻ ngang */}

      {/* Promotion Filter */}
      <div className="card-filter">
        <div className="card-header">
          <h6>Khuyến mãi</h6>
        </div>
        <div className="card-body">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="discount" />
            <label className="form-check-label" htmlFor="discount">
              Giảm giá
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="special-offer" />
            <label className="form-check-label" htmlFor="special-offer">
              Ưu đãi đặc biệt
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="no-promotion" />
            <label className="form-check-label" htmlFor="no-promotion">
              Không
            </label>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Filter;
