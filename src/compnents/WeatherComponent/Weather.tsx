import Image from "next/image";  // Import Image from next/image for optimization

interface WeatherProps {
  lat: number;
  lng: number;
  timestamp: number;
}

// Define the structure of the weather data.
interface WeatherData {
  temp: number;
  humidity: number;
  wind_speed: number;
  weather: {
    description: string;
    icon: string;
  }[];
}

export default async function Weather({ lat, lng, timestamp }: WeatherProps) {
  let weatherData: WeatherData | null = null;  // Explicitly define the type

  const fetchWeather = async (lat: number, lng: number, timestamp: number) => {
    if (!lat || !lng) {
      return;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/api/weather?latitude=${lat}&longitude=${lng}&timestamp=${timestamp}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data.error) {
        weatherData = data;  // Now TypeScript knows this is of type WeatherData
      }
    } catch (err) {
      console.log("Error fetching weather data", err);  // Log the error if any
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
          <Image
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
            width={50}  // Set a fixed width and height to optimize loading
            height={50}
          />
        </div>
      )}
    </>
  );
}
