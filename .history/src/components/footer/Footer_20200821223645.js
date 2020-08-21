import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <p>Album and song details</p>
      </div>
      <div className="footerCenter">
        \<p>Player controls</p>
      </div>
      <div className="footerRight">
        <p>Volume controls</p>
      </div>
    </div>
  );
};

export default Footer;
