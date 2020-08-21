import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <p>Album and song details</p>
      </div>
      <div className="footerCenter">
        <Shuffle className="footerGreen" />
        <SkipPrevious className="footerIcon" />
        <PlayCircleOutline fontSize="large" className="footerGreen" />
        <SkipNext className="footerIcon" />
        <Repeat className="footerGreen" />
      </div>
      <div className="footerRight">
        <p>Volume controls</p>
      </div>
    </div>
  );
};

export default Footer;
