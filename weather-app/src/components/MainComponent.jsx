import SearchWeather from "./SearchWeather";
import WeatherDataShow from "./WeatherDataShow";

const MainComponent = () => {
  return (
    <div className="w-full max-w-lg mx-auto h-auto p-5 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <SearchWeather />
      <WeatherDataShow />
    </div>
  );
};

export default MainComponent;
