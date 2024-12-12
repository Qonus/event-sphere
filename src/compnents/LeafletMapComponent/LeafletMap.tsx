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

const getAddressFromCoordinates = async (lat: number, lng: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch address');
    const data = await response.json();
    console.log('Address:', data.display_name);
    return data.display_name;
  } catch (error) {
    console.error('Error getting address:', error);
    return null;
  }
};

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
          alert('Не получилось получить вашу геолокацию.');
        }
      );
    } else {
      alert('Геолокация не поддерживается вашим браузером');
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

      map.on('click', async (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        console.log(`Coordinates: ${lat}, ${lng}`);
        const address = await getAddressFromCoordinates(lat, lng);
        L.popup()
    .setLatLng([lat, lng])
    .setContent((address || 'Address not found') + `<br><br>Coordinates: ${lat}, ${lng}`)
    .openOn(map);
      });
  
      return () => {
        map.off('click');
        map.remove();
      };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '500px',
        width: '1100px',
      }}
    />
  );
};

export default LeafletMap;
