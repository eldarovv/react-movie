import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeMovie } from "../redux/actions/playlist";
import { useDispatch } from "react-redux";

const PlayListItem = ({ title, poster_path }) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const dispatch = useDispatch();
  return (
    <li className="watch__item">
      <div className="left">
        <div className="img-over">
          <div></div>
          <img src={imgSrc} alt="film" />
        </div>
        <div className="watch__item-info">
          <h2 className="watch__film-title">{title}</h2>
          {/* <p className="watch__film-genre">Action</p> */}
        </div>
      </div>
      <div className="right">{/* <button>İzlədim</button> */}</div>
    </li>
  );
};

export default PlayListItem;
