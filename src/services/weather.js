import axios from "axios";

export const getCurrentWeather = async (lat, long) => {
  const weatherApi = process.env.REACT_APP_OPEN_METEO_WEATHER_API;
  return await axios.get(`${weatherApi}/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`, { timeout: 5000 });
}