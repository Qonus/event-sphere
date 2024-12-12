'use client';

import { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LeafletMap = () => {
  useEffect(() => {
    let map = L.map('map').setView([51.08, 71.43], 13);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          L.marker([latitude, longitude]).addTo(map).bindPopup('Вы здесь!').openPopup();
        },
        (error) => {
          console.error('Geolocation Error:', error);
        }
      );
    } else {
      console.error('Geolocation not supported by your browser.');
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

      map.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        console.log(`Coordinates: ${lat}, ${lng}`);
        L.marker([lat, lng]).addTo(map).bindPopup(`Coordinates: ${lat}, ${lng}`).openPopup();
      });
  
      return () => {
        map.off('click');
      };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '800px',
      }}
    />
  );
};

export default LeafletMap;
