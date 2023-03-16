import React from "react";

const Promote = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-20 bg-softGray/80">
      <div className="p-4 space-y-10">
        <div className="text-6xl leading-[60px] w-[450px] font-semibold text-softBlack">
          Stay with us
        </div>
        <div className="text-softBlack">
          A sanctuary set against Scottsdale's historic downtown.
        </div>
        <div className="space-y-8 text-softBlack">
          <div className="pb-5 text-2xl font-medium capitalize border-b mr-52 text-softBlack border-softBlack/40">
            Pool view room
          </div>
          <div className="pb-5 text-2xl font-medium capitalize border-b mr-52 text-softBlack border-softBlack/40">
            Lagoon view room
          </div>
          <div className="pb-5 text-2xl font-medium capitalize border-b mr-52 text-softBlack border-softBlack/40">
            Courtyard room
          </div>
          <div className="pb-5 text-2xl font-medium capitalize border-b mr-52 text-softBlack border-softBlack/40">
            Suites room
          </div>
        </div>
      </div>
      <div className="h-[500px] overflow-hidden">
        <img
          src="https://source.unsplash.com/1080x1080?forrests-cabin"
          className="transition duration-500"
        />
      </div>
    </div>
  );
};

export default Promote;
