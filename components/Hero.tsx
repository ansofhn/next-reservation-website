import Link from "next/link";
import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { HiLocationMarker, HiCalendar, HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <div className="grid w-full lg:h-[770px] xl:h-[900px] 2xl:h-[1080px] grid-cols-1 lg:grid-cols-2 bg-softGray">
        <div className="w-full h-full">
          <div className="h-[85%] bg-gradient-to-b from-transparent to-softBlack/5 flex flex-col pl-20 pt-60 gap-5">
            <div className="text-7xl w-[550px] font-semibold leading-[90px] text-softBlack">
              Fresh, quiet and peaceful.
            </div>
            <div className="pr-4 text-softBlack/70">
              Feel the sensation of staying in a village! Besides being
              comfortable, this travel reservation prioririzes technology and
              security.
            </div>
            <div className="grid w-full h-20 grid-cols-3 mt-20 bg-white text-softBlack/90">
              <div className="flex items-center justify-center gap-3">
                <HiLocationMarker className="mb-4 text-2xl text-orange" />
                <div>
                  <div className="text-base font-semibold">Location</div>
                  <div className="text-xs text-softBlack/70">
                    Bobocabin Cikolle
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <HiCalendar className="mb-4 text-2xl text-orange" />
                <div>
                  <div className="text-base font-semibold">Check in</div>
                  <div className="text-xs text-softBlack/70">13 Jul 2023</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <HiCalendar className="mb-4 text-2xl text-orange" />
                <div>
                  <div className="text-base font-semibold">Check out</div>
                  <div className="text-xs text-softBlack/70">14 Jul 2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[15%] pl-20 bg-white flex items-center">
            <div className="space-y-2">
              <div className=" w-0.5 h-8 bg-midGray mx-[9px]" />
              <div className="flex items-center gap-5">
                <HiArrowDown className="text-xl text-orange" />
                <div className="text-sm font-medium text-softBlack/80">Scroll Down</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          {/* <img
            src="https://source.unsplash.com/random/1080x1920?rocky-mountains"
            className="transition duration-500"
          /> */}
          <div
            className="flex items-center w-full h-full bg-cover"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/1080x1920?forrest)",
            }}
          >
            <div className="w-40 h-20 xl:mt-[355px] 2xl:mt-[175px] text-lg font-semibold flex items-center justify-center bg-orange">
              Search
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-24 overflow-hidden md:pt-32 md:pb-20 md:px-10 lg:pb-16 lg:pl-32 lg:pr-24 xl:pt-38 xl:px-0 2xl:pt-48 2xl:pr-0 xl:ml-10">
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
      </div> */}
    </div>
  );
};

export default Hero;
