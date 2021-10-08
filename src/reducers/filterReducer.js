const initialState = null;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload;

    default:
      return state;
  }
};

export const search = (anecdote) => {
  return {
    type: "SEARCH",
    payload: anecdote,
  };
};

export default filterReducer;
