const SearchWeather = ({ city, setCity, handleSearch }) => {
  return (
    <div className="flex gap-3 justify-center mb-5">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City...."
        className="w-3/4 md:w-2/3 lg:w-1/2 px-4 py-2 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchWeather;
