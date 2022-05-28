const initialState = {
  listName: [],
  list: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_LIST":
      return {
        listName: [...state.listName, action.payload.listName],
        list: [...state.list, action.payload],
      };
    case "REMOVE_LIST":
      const newListName = state.listName.filter(
        (lname) => lname !== action.payload
      );

      const newList = state.list.filter(
        (movie) => movie.listName != action.payload
      );

      return {
        listName: newListName,
        list: newList,
      };
    default:
      return state;
  }
};

export default list;
