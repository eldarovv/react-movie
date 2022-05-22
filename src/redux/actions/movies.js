const apikey = "c7065c604911f2369f1c531bb9cbd334";

export const fetchMovies = () => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`)
    .then((response) => response.json())
    .then((data) => dispatch(setMovies(data)));
};

export const setMovies = (data) => ({
  type: "SET_MOVIES",
  payload: data,
});
