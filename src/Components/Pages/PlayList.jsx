import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayListItem from "../PlayListItem";
import { removeList } from "../../redux/actions/list";

const PlayList = () => {
  const dispatch = useDispatch();

  const select = useRef();
  const list = useSelector(({ list }) => list);

  const [name, setName] = useState(list.listName[0]);

  const movies =
    list &&
    list.list.filter((playlist) => {
      if (playlist.listName === name) {
        return playlist.list;
      }
    });

  const removeListHandler = () => {
    dispatch(removeList(name));
  };

  return (
    <div className="watch">
      <div className="container_watch">
        <div className="watch__header">
          <h1 className="watch__title">Filmlər:</h1>
          <div className="list__name">
            siyahı:
            <select
              ref={select}
              name="list"
              id="list"
              onChange={() => setName(select.current.value)}
            >
              {list &&
                list.listName.map((name) => (
                  <option value={name}>{name}</option>
                ))}
            </select>
          </div>
          <p onClick={removeListHandler}>Siyahını sil</p>
        </div>
        <ul className="watch__list">
          {movies[0] &&
            name &&
            movies[0].list.map((movie) => <PlayListItem {...movie} />)}
        </ul>
      </div>
    </div>
  );
};

export default PlayList;
