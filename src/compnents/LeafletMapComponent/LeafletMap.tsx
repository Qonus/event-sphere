'use client';

import { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup('A pretty marker.<br> Easily customizable.')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '90%',
      }}
    />
  );
};

export default LeafletMap;
