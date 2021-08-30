import React from "react";
// import Email from "./Email";
import NewForYou from "./NewForYou";
import Read from "./Read";
import Unread from "./Unread";
import Screener from "./Screener";
import Write from "./Write";

const Imbox = () => {
  return (
    <div className="md:w-full m-auto  sm:px-5 lg:x-5 xl:w-5/6">
      <div className="xs:bg-mid sm:bg-light sm:rounded-t-3xl pt-6">
        {/* DESKTOP */}
        <div className="sm:flex justify-between items-center mx-6 xs:hidden">
          <Screener />

          <Write />
        </div>

        {/* MOBILE */}
        <div className="sm:hidden flex-1 items-center xs:px-3 xs:py-2 xs:bg-light">
          <Screener />
        </div>

        {/* MOBILE */}
        <div className="sm:hidden pt-4 flex justify-between items-center mx-3">
          <h2 className="text-off-white text-center font-bold text-3xl">
            Imbox2
          </h2>
          <Write />
        </div>

        {/* DESKTOP */}
        <h2 className="xs:hidden sm:block text-off-white m-auto text-center sm:text-3xl lg:text-5xl font-bold">
          Imbox
        </h2>

        <NewForYou />

        <Unread />

        <Read />
      </div>
    </div>
  );
};

export default Imbox;
