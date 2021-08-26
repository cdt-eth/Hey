import React from "react";
import Image from "next/image";

const User = () => {
  return (
    <div className="flex items-center justify-end flex-1">
      <p className="text-light-grey font-semibold text-lg">Me</p>
      <Image
        className="rounded-full"
        src="/me.jpg"
        alt="me"
        width="50"
        height="50"
      />
    </div>
  );
};

export default User;
