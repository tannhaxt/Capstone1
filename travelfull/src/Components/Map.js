import React from 'react';

const MapComponent = ({ mapImage }) => {
  return (
    <div className="map-component">
      <h4>Bản đồ</h4>
      <img src={mapImage} alt="Map" className="img-fluid" />
    </div>
  );
};

export default MapComponent;
