import axios from "axios";
import NodeCache from "node-cache";

class WeatherRepository {
  // Lets set the default TTL to 60 seconds, so the data will expire from the
  // cache in 60 seconds and we'll have to fetch the updated data from the API.

  weatherCache = new NodeCache({ stdTTL: 60 });

  async getCurrentWeatherInformation(city) {
    // First, lets check if the required data is in cache
    const cachedData = this.weatherCache.get(city);

    // If it is, return it
    if (cachedData) return cachedData;

    const { data: weatherData } = await axios.get(
      `http://api.weatherapi.com/v1`
    );

    // Else, fetch the data from the API then save it on the cache.
    // Here we'll use the city as key.
    this.weatherCache.set(city, weatherData);

    return weatherData;
  }
}

const WeatherRepo = new WeatherRepository()
console.log(WeatherRepo.getCurrentWeatherInformation("london"))
export { WeatherRepository };