import { useEffect } from "react";
import MainComponent from "./components/MainComponent";
import { API_KEY } from "./utils/constants";

const App = () => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${21.76}&lon=${78.87}&appid=${API_KEY}`
      );
      const data = await respone.json();
      console.log(data);
    };
    fetchWeatherData();
  }, []);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <MainComponent />
    </div>
  );
};

export default App;
