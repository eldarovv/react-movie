import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchSearch } from "../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AsideList from "./AsideList";
import { addNewList } from "../redux/actions/list";
import { removeMovies } from "../redux/actions/playlist";

const Header = () => {
  const dispatch = useDispatch();

  const input = useRef();
  const aside = useRef();
  const asideBtn = useRef();
  const playlistInput = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [show, setshow] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const selectedMovies = useSelector(({ playlist }) => playlist.playlist);

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (event.composedPath().includes(asideBtn.current)) {
      } else if (!event.composedPath().includes(aside.current)) {
        setshow(false);
      }
    });
  }, []);

  const changeShow = () => setshow(!show);

  const handleList = () => {
    dispatch(addNewList(playlistName, selectedMovies));
    dispatch(removeMovies());
    changeShow();
  };

  const handleOnChange = () => {
    setSearchQuery(input.current.value.split(" ").join("%20"));
  };

  const handlePlaylistChange = () => {
    setPlaylistName(playlistInput.current.value);
  };

  const handleClick = (searchQuery) => {
    dispatch(fetchSearch(searchQuery));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/" onClick={() => (input.current.value = "")}>
              <p className="header__logo-inner">My Movies</p>
            </Link>
          </div>
          <div className="header__search">
            <input
              ref={input}
              type="text"
              placeholder="Axtar..."
              onChange={handleOnChange}
            />
            <Link to="/search">
              <button onClick={() => handleClick(searchQuery)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Link>
          </div>
          <div className="header__links">
            <a
              href="#"
              className="header__link playlist__new"
              onClick={() => setshow(!show)}
              ref={asideBtn}
            >
              Yeni siyahı
            </a>
            <div className="count">{selectedMovies.length}</div>
            <div className={show ? "aside show" : "aside"} ref={aside}>
              <div className="aside__content">
                Siyahı adı:
                {selectedMovies.length > 0 && (
                  <input
                    type="text"
                    ref={playlistInput}
                    onChange={handlePlaylistChange}
                    className="aside__input"
                  />
                )}
                {selectedMovies &&
                  selectedMovies.map((movie) => <AsideList {...movie} />)}
                {selectedMovies.length > 0 && (
                  <button onClick={handleList} className="save">
                    Yadda saxla
                  </button>
                )}
              </div>
            </div>
            <Link to="/playlist" className="header__link">
              <p className="playlist__new">Film siyahıları</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
