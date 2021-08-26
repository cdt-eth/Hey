import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="flex flex-1 justify-center">
      <Image src="/logo.svg" alt="hey-logo" width={85} height={40} />
    </div>
  );
};

export default Menu;
