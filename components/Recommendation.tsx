import React from "react";
import TouristInns from "./TouristInns";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Recommendation = () => {
  return (
    <div className="p-20 bg-white">
      <div className="flex items-end justify-between">
        <div className="text-5xl leading-[60px] w-[450px] font-semibold text-softBlack">
          Recommendation our village for you
        </div>
        <div className="flex items-center gap-10 p-6">
          <HiArrowLeft className="text-lg text-orange" />
          <HiArrowRight className="text-lg text-orange" />
        </div>
      </div>

      <div className="my-14">
        <TouristInns />
      </div>
    </div>
  );
};

export default Recommendation;
