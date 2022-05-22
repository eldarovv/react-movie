export const addMovie = (obj) => ({
  type: "ADD_MOVIE",
  payload: obj,
});

export const removeMovies = () => ({
  type: "REMOVE_MOVIES",
});

export const removeMovie = (id) => ({
  type: "REMOVE_MOVIE",
  payload: id,
});
