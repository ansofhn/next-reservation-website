import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pr-0 xl:ml-10">
        <div
          className="flex justify-center w-full h-full bg-center bg-no-repeat lg:justify-start py-44 md:p-10 lg:p-0 2xl:scale-105"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/random/1024x650?hotel)",
          }}
        >
          <div className="lg:py-32 lg:-ml-20 xl:-ml-0 xl:pl-20 xl:py-40 2xl:pl-48">
            <div className="lg:w-[80%] xl:w-[70%] text-gray-700 p-6 text-6xl bg-gray-100/70 font-semibold md:p-10">
              Discover Deals Village & Reservation
              <div className="py-3 text-xl font-normal">
                Book now and get the best prices
              </div>
              <Link href={"/product"}>
                <button className="flex mt-6 items-center gap-3 px-6 py-2.5  text-sm font-semibold uppercase transition duration-300 bg-transparent border-2 rounded-lg cursor-pointer text-gray-700 border-gray-800 hover:bg-gray-800 hover:text-white">
                  Explore Here
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-20 text-gray-700 px-28 2xl:px-48">
          <div className="text-5xl font-medium w-[500px]">Here, local talents come together.</div>
          <div className="w-[600px] text-lg text-right">
            We let ourselves be <span>inspired by the rich history</span> as
            well as by contemporary artists of the village. For in the 21st century
            the village has so much more to offer than just medieval heritage
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
