// import { useEffect, useState } from "react";
// import { MOVIE_API_KEY } from "../utils/Constants";
import MovieCard from "./MovieCard";

const MainSection = () => {
  // const [movieData, setMovieData] = useState(null);

  // const fetchingMovieData = async () => {
  //   const response = await fetch(
  //     `http://www.omdbapi.com/?s=Batman&apikey=${MOVIE_API_KEY}`
  //   );
  //   // console.log(response);
  //   const data = await response.json();
  //   setMovieData(data.Search);
  // };

  // useEffect(() => {
  //   // fetchingMovieData();
  // }, []);

  // console.log(movieData);
  return (
    <div className="container mx-auto">
      <MovieCard />
    </div>
    // <div>
    //   {movieData && movieData.length > 0 ? (
    //     <>
    //       {movieData.map((movie, index) => {
    //         return (
    //           <div className="text-red-500" key={index}>
    //             {movie.Title}
    //           </div>
    //         );
    //       })}
    //     </>
    //   ) : (
    //     <h1>No Movie Found</h1>
    //   )}
    // </div>
  );
};

export default MainSection;
