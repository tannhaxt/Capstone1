import React from 'react';

const MapComponent = ({ address, mapImage }) => {
  return (
    <div className="map-component">
      <h4>Bản đồ</h4>
      <p>{address}</p>
      <img src={mapImage} alt="Map" className="img-fluid" />
    </div>
  );
};

export default MapComponent;
