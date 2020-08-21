export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_PLAYING: "SET_PLAYING",
  SET_ITEM: "SET_ITEM",
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
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.payload,
      };
      case actionTypes.SET_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };
      case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
