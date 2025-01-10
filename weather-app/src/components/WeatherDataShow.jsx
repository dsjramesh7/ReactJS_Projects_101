// WeatherDataShow.jsx
const WeatherDataShow = ({ loading, error, weatherData }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center mt-10 gap-4 w-full">
      {weatherData ? (
        <>
          <div className="flex gap-2">
            <p className="font-medium text-lg">Temperature:</p>
            <h2 className="text-2xl font-bold text-blue-500">
              {weatherData.main.temp}°C
            </h2>
          </div>
          <div className="flex gap-2">
            <p className="font-medium text-lg">Weather Conditions:</p>
            <h2 className="text-2xl font-bold text-blue-500">
              {weatherData.weather[0].description}
            </h2>
          </div>
        </>
      ) : (
        <p>Search for a city to see the weather.</p>
      )}
    </div>
  );
};

export default WeatherDataShow;
