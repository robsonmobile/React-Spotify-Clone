import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Homepage from "./pages/homepage/Homepage";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Homepage /> : <Login />}
    </div>
  );
}

export default App;
