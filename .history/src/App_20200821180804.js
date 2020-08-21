import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const token = getTokenFromUrl();

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
