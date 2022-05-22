const apikey = "c7065c604911f2369f1c531bb9cbd334";

export const fetchSearch = (searchQuery) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}&page=1`
  )
    .then((resp) => resp.json())
    .then((data) => dispatch(setSearch(data)));
};

export const setSearch = (data) => ({
  type: "SET_SEARCH",
  payload: data,
});
