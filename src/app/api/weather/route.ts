import { NextResponse } from 'next/server';

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');
  const timestamp = searchParams.get('timestamp');

  if (!latitude || !longitude) {
    return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await res.json();

    if (timestamp) {
      const targetTimestamp = Number(timestamp);

      const specificDayWeather = data.daily.find((day: any) => {
        return day.dt === targetTimestamp;
      });

      if (specificDayWeather) {
        return NextResponse.json(specificDayWeather);
      } else {
        return NextResponse.json({ error: 'No weather data found for this timestamp' }, { status: 404 });
      }
    }

    return NextResponse.json(data.daily);
  } catch {
  }
}
