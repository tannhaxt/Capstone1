import React from 'react';

const ImageGallery = () => {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Phần hiển thị ảnh lớn của khách sạn */}
      <div className="main-image">
        <img 
          src="https://via.placeholder.com/755x453" 
          alt="Hotel main" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>

      {/* Các ảnh nhỏ */}
      <div className="small-images" style={{ display: 'flex', gap: '10px' }}>
        <img 
          src="https://via.placeholder.com/231x138" 
          style={{ width: '20%', height: 'auto' }} 
          alt="Small image 1" 
        />
        <img 
          src="https://via.placeholder.com/231x138" 
          style={{ width: '20%', height: 'auto' }} 
          alt="Small image 2" 
        />
        <img 
          src="https://via.placeholder.com/231x138" 
          style={{ width: '20%', height: 'auto' }} 
          alt="Small image 3" 
        />
        <img 
          src="https://via.placeholder.com/231x138" 
          style={{ width: '20%', height: 'auto' }} 
          alt="Small image 4" 
        />
        <img 
          src="https://via.placeholder.com/231x138" 
          style={{ width: '20%', height: 'auto' }} 
          alt="Small image 5" 
        />
      </div>
    </div>
  );
};

export default ImageGallery;
