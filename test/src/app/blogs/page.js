import React from "react";
import SlideBar from "./slidebar";

const Page = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-2/12">
        <SlideBar />
      </div>
      <div className="w-10/12">this is blog section</div>
    </div>
  );
};

export default Page;
