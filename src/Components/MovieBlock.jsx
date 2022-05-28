import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions/playlist";
import { Link } from "react-router-dom";
import { addAbout } from "../redux/actions/about";

const MovieBlock = ({
  id,
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addMovie({ title, poster_path, id }));
  };
  const handleClickAbout = () => {
    dispatch(
      addAbout({ title, poster_path, overview, vote_average, release_date })
    );
  };
  return (
    <div className="main__film">
      <Link
        to="/about"
        onClick={handleClickAbout}
        className="about__link"
      ></Link>
      <img src={imgSrc} alt="#" />
      <div className="main__film-over"></div>
      <div className="main__film-info">
        <div className="main__film-title">{title}</div>
        <button onClick={handleClick}>Əlavə et</button>
      </div>
      <div className="main__film-rating">{vote_average}</div>
    </div>
  );
};

export default MovieBlock;
