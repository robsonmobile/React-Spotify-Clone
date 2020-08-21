import React from "react";
import "./Sidebar.css";
import SidebarOption from "../sidebarOption/SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebarLogo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebarTitle">PLAYLISTS</strong>
      <hr />
    </div>
  );
};

export default Sidebar;
