import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";

const Header = () => {
  return (
    <div className="lg:w-5/6  md:w-full py-2 px-2  m-auto flex items-stretch">
      <Search />
      <Menu />
      <User />
    </div>
  );
};

export default Header;
