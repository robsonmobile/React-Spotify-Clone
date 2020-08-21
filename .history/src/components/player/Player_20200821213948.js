import React from "react";
import "./Player.css";
import Sidebar from "../sidebar/Sidebar"
import Body from "../body/Body"

const Player = ({spotify}) => {
  return <div className="player">
    <div className="playerBody">
      <Sidebar />
      <Body />
    </div>
  </div>;
};

export default Player;
