import React from "react";
import Email from "./Email";
import NewForYou from "./NewForYou";
import Read from "./Read";
import Unread from "./Unread";
import Screener from "./Screener";
import Write from "./Write";

const Imbox = () => {
  return (
    <div className="lg:w-5/6  md:w-full m-auto px-16">
      <div className="bg-light rounded-t-3xl pt-6">
        <div className="flex justify-between items-center mx-6">
          <Screener />

          <Write />
        </div>

        <h2 className="text-off-white m-auto text-center text-5xl font-bold">
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
