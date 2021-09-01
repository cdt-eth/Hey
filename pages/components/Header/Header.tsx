import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";
import Link from "next/link";
import ImboxBtn from "./ImboxBtn";

interface HeaderProps {
  newEmail: boolean;
}

const Header = ({ newEmail }: HeaderProps) => {
  return (
    <span>
      {newEmail && (
        <div className="sm:hidden flex justify-between px-3 pt-4 pb-6 bg-mid">
          <Link href="/" passHref>
            <button className="text-mid text-sm h-6 w-6 bg-light-grey rounded-full">
              X
            </button>
          </Link>

          <button className="bg-bright text-dark rounded-full px-3 py-1 text-sm">
            Send
          </button>
        </div>
      )}

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
        xs:hidden
        sm:flex
        items-stretch
        justify-between
        `}
      >
        {newEmail && <ImboxBtn />}

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
    </span>
  );
};

export default Header;
