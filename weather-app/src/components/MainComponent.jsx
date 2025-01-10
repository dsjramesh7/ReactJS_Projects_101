import { useState } from "react";
import SearchWeather from "./SearchWeather";
import WeatherDataShow from "./WeatherDataShow";
import { API_KEY } from "../utils/constants";

const MainComponent = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await respone.json();
      // console.log(data);
      setWeatherData(data);
    } catch (err) {
      setError("City not found or error in fetching data!!", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto h-auto p-5 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <SearchWeather
        city={city}
        setCity={setCity}
        handleSearch={fetchWeatherData}
      />
      <WeatherDataShow
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default MainComponent;
