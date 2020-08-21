import React, { useContext } from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Context } from "./context/Context";

const Header = () => {
  const { user } = useContext(Context);
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
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
