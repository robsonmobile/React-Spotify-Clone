import React from "react";
import "./SongRow.css";

const SongRow = ({track}) => {
  return <div className="songRow">
      <img  alt=""/>
      <div className="songRowInfo">
          <h1>{track.name}</h1>
          <p>{track.artists.map(artist=>artist.name).join(",")}</p>
      </div>
  </div>;
};

export default SongRow;
