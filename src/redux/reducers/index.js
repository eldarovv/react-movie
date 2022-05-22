import { combineReducers } from "redux";
import movies from "./movies";
import search from "./search";
import playlist from "./playlist";
import list from "./list";

const rootReducer = combineReducers({
  movies,
  search,
  playlist,
  list,
});

export default rootReducer;
