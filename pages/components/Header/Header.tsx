import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";

const Header = () => {
  return (
    <div className="px-24 py-2 flex items-stretch">
      <Search />
      <Menu />
      <User />
    </div>
  );
};

export default Header;
