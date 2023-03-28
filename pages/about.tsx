import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";

const about = () => {
  return (
    <div className="bg-white">
      <LandingPageLayout>
        <div className="py-40 text-softBlack">
          <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
            <div className="flex flex-col justify-center gap-y-20">
              <div className="container">
                <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:gap-10 lg:mx-10 xl:mx-20 md:grid-cols-2">
                  <div className="text-4xl font-semibold 2xl:text-5xl text-softBlack/80">
                    Book rural stays and cultural activities{" "}
                    <span className="text-orange">for</span>{" "}
                    <span className="text-softBlack/50">
                      immersive countryside vacations.
                    </span>
                  </div>
                  <div className="flex items-end text-gray-500 lg:pl-10 2xl:pl-20">
                    facilitate travelers in booking rural accommodations and
                    cultural activities, promote local tourism, and contribute
                    to the economic development of rural communities.
                  </div>
                </div>
              </div>
              <div className="w-full mt-10 md:px-4 lg:px-10 xl:px-20">
                <div className="grid w-full h-full grid-cols-1 bg-softGray/80 lg:grid-cols-2 py-14">
                  <div className="order-1 mx-10 my-auto space-y-6 md:mx-12 lg:ml-24 lg:order-1">
                    <h1 className="text-xl font-bold uppercase text-softBlack">
                      Why Choose Us
                    </h1>
                    <h2 className="text-sm font-light lg:text-base">
                      We provides a platform for travelers to easily book rural
                      accommodations and cultural activities, promoting local
                      tourism and contributing to the economic development of
                      rural communities.
                    </h2>
                  </div>
                  <div className="w-full md:w-[80%] lg:w-[90%] xl:w-[80%] lg:order-2 pb-10 px-6">
                    <div className="p-8 -mt-32 bg-white 2xl:-mt-36">
                      <img
                        src="https://source.unsplash.com/random/500x410?wood-forrest"
                        className="w-full transition duration-500 hover:scale-95"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:gap-10 lg:mx-10 xl:mx-20 md:grid-cols-2 2xl:pr-36">
                  <div className="text-4xl 2xl:text-5xl w-[80%] lg:w-[70%] xl:w-[55%] font-semibold text-softBlack/80">
                    Escape to rural blissful{" "}
                    <span className="text-orange">serenity</span>
                  </div>
                  <div className="space-y-10 text-gray-500 2xl:pr-10">
                    <div className="font-medium text-softBlack">
                      Our crew is always getting bigger, but we all work toward
                      one goal to make this application success not only
                      possible but inevitable for teams everywhere.
                    </div>
                    <div>
                      The tourist village reservation application was created to
                      support local tourism in rural areas by providing a
                      platform for travelers to book rural accommodations and
                      cultural activities. It was developed in response to the
                      growing interest in sustainable and cultural tourism, and
                      to meet the needs of travelers who are seeking more
                      authentic and immersive travel experiences.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingPageLayout>
    </div>
  );
};

export default about;
