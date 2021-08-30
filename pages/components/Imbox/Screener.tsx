import React from "react";
import Image from "next/image";

const Screener = () => {
  return (
    <div className="flex sm:justify-start tracking-wide xs:justify-center  font-medium xs:rounded-md sm:rounded-full bg-off-white px-3 py-1">
      <Image
        alt="screener"
        src="https://production.haystack-assets.com/assets/icons/screener-thumbs-7ab0a4724c85913fcd305730eaebfe0e8e1070c9e57e3f411780f0df189a4082.svg"
        height={15}
        width={35}
      />

      <p className="ml-2">Screen 1 first-time sender</p>
    </div>
  );
};

export default Screener;
