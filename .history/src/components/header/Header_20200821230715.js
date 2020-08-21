import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";

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
      <div className="headerRight"></div>
    </div>
  );
};

export default Header;
