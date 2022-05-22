export const addNewList = (listName, list) => ({
  type: "ADD_NEW_LIST",
  payload: {
    listName,
    list,
  },
});

export const removeList = (listName) => ({
  type: "REMOVE_LIST",
  payload: listName,
});
