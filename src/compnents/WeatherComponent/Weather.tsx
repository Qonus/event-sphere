import { AnyBulkWriteOperation } from "mongoose";

export default async function Weather({ lat, lng, timestamp }: any) {
    let weatherData : any = null

  const fetchWeather = async (lat: any, lng: any, timestamp: any) => {
    if (!lat || !lng) {
      return;
    }

    try {
        const url = `${process.env.NEXT_PUBLIC_URL}/api/weather?latitude=${lat}&longitude=${lng}&timestamp=${timestamp}`;
        const response = await fetch(url);
        const data = await response.json();

      if (!data.error) {
        weatherData = data;
      }
    } catch (err) {
      console.log("Error fetching weather data");
    }
  };

  await fetchWeather(lat, lng, timestamp);
  return (
    <>
      {weatherData && (
        <div>
          <h3>Weather for Timestamp: {timestamp}</h3>
          <p>Temperature: {weatherData.temp}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.wind_speed} m/s</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
    </>
  );
}
