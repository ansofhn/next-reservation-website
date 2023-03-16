import React from "react";

const TouristInns = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[500px] bg-white shadow-2xl shadow-softBlack/20 w-96 p-6">
        <div className="w-full overflow-hidden shadow-xl shadow-softBlack/20 h-72 bg-gradient-to-b from-softGray/50 to-softGray">
          <img
            src="https://source.unsplash.com/random/1080x1080?forrestest-cabin"
            className="transition duration-500"
          />
        </div>
      </div>
      <div className="h-[500px] bg-white shadow-2xl shadow-softBlack/20 w-96 p-6">
        <div className="w-full overflow-hidden shadow-xl shadow-softBlack/20 h-72 bg-gradient-to-b from-softGray/50 to-softGray">
          <img
            src="https://source.unsplash.com/random/1080x1080?forrest-cabin"
            className="transition duration-500"
          />
        </div>
      </div>
      <div className="h-[500px] bg-white shadow-2xl shadow-softBlack/20 w-96 p-6">
        <div className="w-full overflow-hidden shadow-xl shadow-softBlack/20 h-72 bg-gradient-to-b from-softGray/50 to-softGray">
          <img
            src="https://source.unsplash.com/random/1080x1080?forrests-cabin"
            className="transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInns;
