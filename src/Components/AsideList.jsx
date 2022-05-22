import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../redux/actions/playlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const AsideList = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeMovie(id));
  };

  return (
    <li className="list__item">
      {title}
      {/* <button onClick={handleRemove}>X</button> */}
      <FontAwesomeIcon
        icon={faTrash}
        onClick={handleRemove}
        className="trashicon"
      />
    </li>
  );
};

export default AsideList;
