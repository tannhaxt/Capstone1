const Amenities = ({ amenities }) => {
    return (
      <div className="amenities">
        <h4>Tiện ích</h4>
        <div className="d-flex flex-wrap">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity d-flex align-items-center me-4">
              <i 
                className={`bi bi-${amenity.icon}`} 
                style={{ 
                  fontSize: '1.5rem', // Tăng kích thước icon để solid hơn
                  color: '#2E3192', // Đổi màu icon thành #2E3192
                  fontWeight: 'bold' // Đảm bảo icon trông đậm hơn
                }}
              ></i>
              <span className="ms-2" style={{ 
                  color: '#2E3192', // Đổi màu icon thành #2E3192
                  }}>{amenity.name}
                </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Amenities;
  