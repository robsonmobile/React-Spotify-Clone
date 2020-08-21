import React from "react";
import "./Player.css";
import Sidebar from "../../components/sidebar/Sidebar"

const Player = ({spotify}) => {
  return <div className="player">
    <div className="playerBody">
      <Sidebar />
    </div>
  </div>;
};

export default Player;
