export const actionTypes = {
    SET_USER: "SET_USER",
  };
  
  const Reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  