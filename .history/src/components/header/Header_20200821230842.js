import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Albums..."
        />
      </div>
      <div className="headerRight">
          <Avatar src="" alt="SK"/>
          <h4>Safak Kocaoglu</h4>
      </div>
    </div>
  );
};

export default Header;
