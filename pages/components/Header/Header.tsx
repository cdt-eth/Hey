import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";
import Link from "next/link";

interface HeaderProps {
  newEmail: boolean;
}

const Header = ({ newEmail }: HeaderProps) => {
  return (
    <div
      className={`
        xs:px-4
        xs:pb-px
        xs:pt-2
      xs:bg-light
      sm:bg-dark
        sm:py-2
        sm:pb-10
        lg:px-24
        md:w-full
        px-2
        m-auto
        flex
        items-stretch
        justify-between
        `}
      // sm:pl-${paddingLeft}
      // lg:pl-${paddingLeft}
    >
      {newEmail && (
        <Link href="/" passHref>
          <button className=" bg-off-white text-dark px-5 mr-2 font-semibold text-lg rounded-full">
            {" "}
            {"< Imbox"}{" "}
          </button>
        </Link>
      )}

      <div className="third one xs:self-center">
        <Search />
      </div>
      <div className="third">
        <Menu />
      </div>
      <div className="third">
        <User />
      </div>
    </div>
  );
};

export default Header;
