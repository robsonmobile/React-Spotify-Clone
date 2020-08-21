import React, { useContext } from "react";
import "./Body.css";
import Header from "../header/Header";
import { Context } from "../../context/Context";

const Body = ({ spotify }) => {
  const { discoverWeekly } = useContext(Context);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="bodyInfo">
        <img src={discoverWeekly?.images[0]?.url} alt="" />
        <div className="bodyInfoText">
          <stron>PLAYLIST</stron>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
