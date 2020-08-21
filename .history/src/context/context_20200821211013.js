import React, { useEffect, createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //   useEffect(() => {
  //     localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
  //   });

  return (
    <Context.Provider
      value={{
        user: state.user,
        playlist: state.playlist,j
        playing: state.playing,
        item: state.item,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
