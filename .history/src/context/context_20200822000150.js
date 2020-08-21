import React, { useEffect, createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: null,
  token:null,
    // "BQCjyDWdbim8FEHqxIOQRoO_zbqP5Ojf-FISjYUOatYGWLo4-56sv9aPbJOH_yISdR0oRNmKm2NOOEH-5zITzZB_SflBGWjwvGNCBY_lE1TbzXpTVx9w3DpBzRJABErQW5LU75UvMJ-1U4HXuphzbm1eDLxDbas6",
  playlists: [],
  playing: false,
  item: null,
};

// user: JSON.parse(localStorage.getItem("user")) || null,
// token: JSON.parse(localStorage.getItem("token")) || null,

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //   useEffect(() => {
  //     localStorage.setItem("user", JSON.stringify(state.user));
  //     localStorage.setItem("token", JSON.stringify(state.token));
  //   });

  return (
    <Context.Provider
      value={{
        user: state.user,
        token: state.token,
        playlists: state.playlists,
        playing: state.playing,
        item: state.item,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
