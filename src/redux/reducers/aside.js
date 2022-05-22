const initialState = {
  value: false,
};
const aside = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ASIDE":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default aside;
