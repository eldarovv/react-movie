const initialState = {
  playlist: [],
  id: [],
};

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      [...state.id].includes(action.payload.id) && alert("a");

      let movies = [...state.id].includes(action.payload.id)
        ? [...state.playlist]
        : [...state.playlist, action.payload];
      let id = [...state.id].includes(action.payload.id)
        ? [...state.id]
        : [...state.id, action.payload.id];

      return {
        ...state,
        playlist: movies,
        id: id,
      };
    case "REMOVE_MOVIES":
      return {
        playlist: [],
        id: [],
      };
    case "REMOVE_MOVIE":
      const newList = state.playlist.filter(
        (movie) => movie.id !== action.payload
      );
      const newId = state.id.filter((id) => id !== action.payload);
      return {
        playlist: newList,
        id: newId,
      };
    default:
      return state;
  }
};

export default playlist;
