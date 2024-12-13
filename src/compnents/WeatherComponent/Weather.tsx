export default function Weather({lat, lng}: any) {
    const fetchWeather = async (lat, lng) => {
        if (!lat || !lng) {
          return;
        }
    
        try {
          const response = await fetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`);
          const data = await response.json();
          
          if (data.error) {
            setError(data.error);
          } else {
            setWeatherData(data);
            setError('');
          }
        } catch (err) {
          setError('Error fetching weather data');
        }
      };
    return ( <>
        <div>


        </div>
    </>);
}