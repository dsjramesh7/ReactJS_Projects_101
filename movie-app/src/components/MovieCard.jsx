const MovieCard = ({ Title, Year, Poster, Type }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={Poster}
        alt="movie-image"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {Title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">Type: {Type}</p>
        <p className="text-sm text-gray-500 mt-1">Release Year:{Year}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
