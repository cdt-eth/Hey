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
        <div className="flex justify-between items-center mx-6">
          <Screener />

          <Write />
        </div>

        <h2 className="text-off-white m-auto text-center sm:text-3xl lg:text-5xl font-bold">
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
