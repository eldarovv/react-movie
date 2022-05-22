const initialState = {
  searchMovies: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        searchMovies: action.payload,
      };
    default:
      return state;
  }
};

export default search;
