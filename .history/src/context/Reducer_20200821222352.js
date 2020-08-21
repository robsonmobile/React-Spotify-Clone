export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
