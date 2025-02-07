import { img_500 } from "../../utils/Constants";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-60">
      <div className="relative w-full h-96">
        <img
          className="w-full h-full object-cover"
          src={poster_path ? `${img_500}/${poster_path}` : `./no-movie.png`}
          alt={title}
        />
      </div>

      <div className="p-4 text-white text-center">
        <h3 className="text-lg font-bold truncate" title={title}>
          {title}
        </h3>

        <div className="flex items-center justify-center text-sm text-gray-400 mt-2 gap-2">
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src="star.svg" alt="Star Icon" />
            <p className="font-medium">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </p>
          </div>

          <span className="text-gray-500">•</span>
          <p className="uppercase font-medium">{original_language}</p>

          <span className="text-gray-500">•</span>
          <p className="font-medium">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
