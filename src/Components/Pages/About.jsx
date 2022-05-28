import React from "react";
import { fetchMovies } from "../../redux/actions/movies";
import { useSelector } from "react-redux";
import movies from "../../redux/reducers/movies";

const About = () => {
  const details = useSelector(({ about }) => about);
  // const bckSrc = `https://image.tmdb.org/t/p/w500/${details.movie.backdrop_path}`;
  const imageSrc = `https://image.tmdb.org/t/p/w500/${details.movie.poster_path}`;
  return (
    <div>
      <div className="about">
        <div className="about__container">
          <div className="about__content">
            <img src={imageSrc} alt="poster" className="poster" />
            <div className="about__details">
              {/* <img src={bckSrc} alt="backdrop" className="backdrop" /> */}
              <h1>
                {details.movie.title} ({details.movie.release_date.slice(0, 4)})
              </h1>
              <div className="about__film-rating">
                {details.movie.vote_average}
              </div>
              <h3>Overview:</h3>
              <p>{details.movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
