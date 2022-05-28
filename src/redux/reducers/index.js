import { combineReducers } from "redux";
import movies from "./movies";
import search from "./search";
import playlist from "./playlist";
import list from "./list";
import about from "./about";

const rootReducer = combineReducers({
  movies,
  search,
  playlist,
  list,
  about,
});

export default rootReducer;
