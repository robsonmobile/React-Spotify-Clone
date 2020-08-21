import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Homepage from "./pages/homepage/Homepage";
import { Context } from "./context/Context";

const spotify = new SpotifyWebApi();

function App() {
  const { user, token, dispatch } = useContext(Context);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        payload: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          payload: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcXDyIDb0QF3C").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          payload: response,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Homepage spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
