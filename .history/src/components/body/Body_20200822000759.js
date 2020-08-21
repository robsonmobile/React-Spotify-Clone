import React from "react";
import "./Body.css";
import Header from "../header/Header";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="bodyInfo">
        <img
          src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default"
          alt=""
        />
        <div className="bodyInfoText">
          <stron>PLAYLIST</stron>
          <h2>Discover Weekly</h2>
          <p>Desc...</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
