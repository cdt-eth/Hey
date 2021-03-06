import React from "react";
import NewForYou from "./NewForYou";
import Read from "./Read";
import Unread from "./Unread";
import Screener from "./Screener";
import Write from "./Write";
import { useState } from "react";
import InboxZero from "./InboxZero";

const Imbox = () => {
  const [inboxZero, setInboxZero] = useState(false);

  return (
    <div className="md:w-full m-auto sm:px-5 lg:x-5 xl:w-5/6">
      <div className="xs:bg-mid sm:bg-light sm:rounded-t-3xl sm:pt-6">
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
            Imbox
          </h2>
          <Write />
        </div>

        {/* DESKTOP */}
        <h2 className="xs:hidden sm:block text-off-white m-auto text-center sm:text-3xl lg:text-5xl font-bold">
          Imbox
        </h2>

        <NewForYou />

        {inboxZero ? <Unread /> : <InboxZero />}

        <Read />
      </div>
    </div>
  );
};

export default Imbox;
