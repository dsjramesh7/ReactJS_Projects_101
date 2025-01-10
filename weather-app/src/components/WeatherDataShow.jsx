// WeatherDataShow.jsx
const WeatherDataShow = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-4 w-full">
      <div className="flex gap-2">
        <p className="font-medium text-lg">Temperature:</p>
        <h2 className="text-2xl font-bold text-blue-500">67°</h2>
      </div>
      <div className="flex gap-2">
        <p className="font-medium text-lg">Weather conditions:</p>
        <h2 className="text-2xl font-bold text-blue-500">Clear Sky</h2>
      </div>
    </div>
  );
};

export default WeatherDataShow;
