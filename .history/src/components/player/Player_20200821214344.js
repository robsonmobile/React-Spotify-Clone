import React from "react";
import "./Player.css";
import Sidebar from "../sidebar/Sidebar";
import Body from "../body/Body";
import Footer from "../Footer/Body";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="playerBody">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
