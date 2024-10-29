import React from 'react';

const ImageGallery = ({ mainImage, galleryImages }) => {
  return (
    <div className="image-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="main-image">
        <img src={mainImage || "default-main-image-url.png"} alt="Hotel main" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="small-images" style={{ display: 'flex', gap: '10px' }}>
        {galleryImages.map((image, index) => {
          const imageUrl = image ? image.replace("{width}", "300").replace("{height}", "200") : "default-image-url.png";
          return <img key={index} src={imageUrl} style={{ width: '20%', height: 'auto' }} alt={`Small image ${index + 1}`} />;
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
