import { useEffect, useState } from "react";
import { MOVIE_API_KEY } from "../utils/Constants";
import MovieCard from "./MovieCard";

const MainSection = () => {
  const [movieData, setMovieData] = useState(null);

  const fetchingMovieData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=Spider Man&apikey=${MOVIE_API_KEY}`
    );
    // console.log(response);
    const data = await response.json();
    setMovieData(data.Search);
  };

  useEffect(() => {
    fetchingMovieData();
  }, []);

  console.log(movieData);
  return (
    <div className="container mx-auto flex justify-center gap-3 mt-4 flex-wrap ">
      {movieData && movieData.length > 0 ? (
        movieData.map((m, index) => (
          <MovieCard
            key={index}
            Title={m.Title}
            Type={m.Type}
            Year={m.Year}
            Poster={m.Poster}
          />
        ))
      ) : (
        <h1>No Movie Found</h1>
      )}
    </div>
  );
};

export default MainSection;
