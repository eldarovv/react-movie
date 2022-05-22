import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/movies";

import MovieBlock from "../MovieBlock";

const Home = () => {
  const movies = useSelector(({ movies }) => movies.movies.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__content">
          {movies &&
            movies.map((movie) => <MovieBlock key={movie.title} {...movie} />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
