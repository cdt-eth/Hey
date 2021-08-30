import React from "react";
import Email from "./Email";

const Unread = () => {
  return (
    <div className="xs:px-2 sm:px-14 w-auto">
      <Email
        subject={"CS 6035 - Project 1 - Part 1 Released!"}
        body={
          "CS 6035 via Ed - Your instructor Christian Turner posted an announcement on Ed. Simply click to"
        }
        url="user.jpg"
        read={false}
      />
      <Email
        subject={
          "Re: [christiandavidturner/Hey] Emails & Email component (5306237)"
        }
        body={
          "vercel[bot] - Successfully deployed to the following URLs: • hey-clone.vercel.app • hey-christiandavidturner.ve"
        }
        url="github.png"
        read={false}
      />
    </div>
  );
};

export default Unread;
