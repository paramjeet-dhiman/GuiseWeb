import React from "react";

export const StayUpToDate = () => {
  return (
    <section className=" bg-white text-bookmark-blue py-20 lg:py-28   ">
      <div className=" container  lg:flex">
        <div className="container sm:w-3/4 w-11/12 lg:w-3/4">
          <h1 className="font-medium text-3xl lg:text-5xl lg:font-medium sm:text-center lg:text-left ">
            Stay up to date
          </h1>
          <p className="w-auto sm:text-center lg:text-left font-normal text-gray-800 text-sm lg:text-lg mt-4 lg:mt-6 lg:w-4/6  ">
            Get the latest news from Cruise delivered directly to your inbox.
          </p>
        </div>

        <div className="container sm:w-3/4 w-11/12 lg:w-3/4 flex flex-col  ">
          <div className="flex flex-col  gap-5 mt-8">
            <div className="border-b-2 border-gray-400">
              <input
                type="text"
                placeholder="First, Last"
                className="text-gray-900 font-medium text-sm lg:text-xl pl-1 focus:outline-none bg-transparent flex-1"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-400  w-auto">
              <input
                type="text"
                placeholder="email@address.com"
                className="text-gray-900 font-medium text-sm lg:text-xl pl-1 focus:outline-none bg-transparent flex-1"
                required
              />
              <span className="text-blue-500 flex space-x-2 items-center lg:mr-3  font-semibold text-sm lg:text-xl  cursor-pointer hover:text-blue-400">
                <p>Submit</p>
                <svg
                  className="w-3 h-3"
                  width="11"
                  viewBox="0 0 19 19"
                  fill="none">
                  <path
                    d="M1 2H17V18"
                    strokeWidth="3"
                    stroke="currentColor"></path>
                  <line
                    x1="15.9606"
                    y1="3.06066"
                    x2="1.55018"
                    y2="17.471"
                    strokeWidth="3"
                    strokeMiterlimit="2.61313"
                    stroke="currentColor"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
