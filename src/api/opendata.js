import axios from "axios";

const openDataApi = {
  fetchWeatherForecast: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/weatherforecast`),
};

export default openDataApi;
