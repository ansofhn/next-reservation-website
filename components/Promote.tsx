import Link from "next/link";
import React from "react";

const Promote = () => {
  return (
    <div className="py-20">
      <div className="w-full overflow-hidden flex items-center justify-center h-[700px] px-56 mb-10">
        <img
          src="https://source.unsplash.com/random/1024x760?hotels"
          className="w-full transition duration-500"
        />
      </div>
      <div className="flex items-center justify-between pb-20 text-gray-700 px-28 2xl:px-48">
        <div className="p-6">
          <div className="flex items-center gap-10">
            <div className="w-[280px] h-[280px] bg-gray-100/60 p-6">
              <img
                src="https://source.unsplash.com/random/500x500?hotel"
                className="w-[250px] transition duration-500"
              />
            </div>

            <div className="space-y-4">
              <div className="text-4xl font-medium">Stay Longer, Save More</div>
              <div className="text-lg w-[400px]">
                Visit Village for as long as you wish, the longer you stay, the
                more you save !
              </div>
              <div>
                <Link href={"/product"}>
                  <button className="flex mt-6 items-center gap-3 px-6 py-2.5  text-sm font-semibold uppercase transition duration-300 bg-transparent border-2 rounded-lg cursor-pointer text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[450px] text-lg text-right border-l pl-10 border-gray-300">
          Savor something tasty at The Canal Club resort, village, or riverside.
          Or choost to relax in your room with In-Room Dining.
        </div>
      </div>
    </div>
  );
};

export default Promote;
