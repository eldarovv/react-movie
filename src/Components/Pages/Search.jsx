import React from "react";
import { useSelector } from "react-redux";
import MovieBlock from "../MovieBlock";

const Search = () => {
  const movies = useSelector(({ search }) => search.searchMovies.results);

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          {movies &&
            movies.map((movie) => <MovieBlock key={movie.title} {...movie} />)}
        </div>
      </div>
    </main>
  );
};

export default Search;
