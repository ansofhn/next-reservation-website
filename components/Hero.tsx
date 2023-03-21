import React from "react";
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
                <div className="text-sm font-medium text-softBlack/80">
                  Scroll Down
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
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
    </div>
  );
};

export default Hero;
