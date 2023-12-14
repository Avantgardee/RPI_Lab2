import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: "/img/pin.png", 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const Map = (props) => {
  const { latitude, longitude, title } = props.Data;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={props.style}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={[latitude, longitude]}
        icon={customIcon}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
