
import farToCel from './fartocel';

  async function WeatherAPI (city) {
    console.log(`Fetching weather data for ${city}`);
    // Implement API call here

    const res  = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PP2G7PAWMQLFSUFM36PU7VDR7`)
    const data = await res.json();
    const dataWeather = [data.resolvedAddress, farToCel(data.currentConditions.temp), data.currentConditions.cloudcover];
    console.log(data);
    return dataWeather;
  };

export default WeatherAPI;
