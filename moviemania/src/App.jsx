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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
          API_OPTIONS
        );
        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setErrorMessage(`Movies not fetched: ${error.message}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="hero.png" alt="movie-banner" />
          <h1>
            Find <span className="text-gradient">Movie</span> You&apos;ll Enjoy
            Without the Hassle
          </h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="text-red-500">
          {errorMessage && <p>{errorMessage}</p>}
        </section>

        <section>
          {movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          ) : (
            !errorMessage && <p>Loading movies...</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
