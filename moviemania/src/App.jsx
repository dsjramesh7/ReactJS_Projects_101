import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { API_BASE_URL } from "../utils/Constants";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setErrorMessage(`Failed to fetch movies: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <header className="text-center">
        <img src="hero.png" alt="movie-banner" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">
          Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy
          Without the Hassle
        </h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      {errorMessage ? (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      ) : movies.length > 0 ? (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-white font-semibold">{movie.title}</h3>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-center mt-4">Loading movies...</p>
      )}
    </main>
  );
};

export default App;
