import React from "react";
import TouristInns from "./TouristInns";

const Recommendation = () => {
  return (
    <div className="p-20 bg-white">
      <div className="text-5xl leading-[60px] w-[450px] font-semibold text-softBlack">
        Recommendation our village for you
      </div>
      <div className="my-14">
        <TouristInns />
      </div>
    </div>
  );
};

export default Recommendation;
