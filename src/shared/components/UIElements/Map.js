import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Hook to fix map rendering inside modal
const MapResize = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
};

const Map = ({ center, zoom, className, style }) => {
  return (
    <MapContainer center={center} zoom={zoom} className={className} style={style}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={center}>
        <Popup>
          Marker at {center[0]}, {center[1]}
        </Popup>
      </Marker>
      <MapResize />
    </MapContainer>
  );
};

export default Map;