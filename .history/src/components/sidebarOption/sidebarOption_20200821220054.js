import React from "react";
import "./SidebarOption.css";

const sidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
};

export default sidebarOption;
