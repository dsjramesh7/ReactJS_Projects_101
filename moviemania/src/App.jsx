import { useState } from "react";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("I am batman");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="hero.png" alt="movie-banner" />
          <h1>
            Find <span className="text-gradient">Movie</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
