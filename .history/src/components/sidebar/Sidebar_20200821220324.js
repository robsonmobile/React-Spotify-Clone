import React from "react";
import "./Sidebar.css";
import SidebarOption from "../sidebarOption/SidebarOption";
import {Home} from "@mae"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <sidebarOption Icon={Home} title="Home" />
    </div>
  );
};

export default Sidebar;
