import React from "react";
import { ReactComponent as UndrawProgrammer } from "../../assets/svg/undraw_programmer.svg";
import { ReactComponent as UndrawStartup } from "../../assets/svg/Start_Up.svg";
import { StayUpToDate } from "./StayUpToDate";
import { Link } from "react-router-dom";

export const Solutions = () => {
  return (
    <div className="bg-bookmark-blue pt-10 h-full">
      <section className="lg:mt-10 text-gray-200 container mt-20   ">
        <div className="relative flex h-screen">
          <div className="container  flex flex-col lg:flex-row-reverse items-center justify-center gap-x-20">
            {/* image */}
            <div className="flex flex-1 justify-center lg:mb-0">
              <UndrawProgrammer className="w-10/12 h-10/12 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center  text-center md:text-left lg:items-start">
              <p className="text-red-500 font-medium text-xl mb-2">Solutions</p>
              <h1 className="text-3xl lg:text-7xl  font-medium tracking-normal leading-normal text-blue-500">
                Lorem ipsum, dolor sit
              </h1>
              <p className="font-medium text-base  mt-2 lg:text-lg pl-2 lg:text-left   text-center  sm:w-3/4 lg:w-5/6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center text-sm md:text-lg text-social-instagram mb-4">
            Ride-hall
          </h4>
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            A new kind of ride
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            We’re creating an all-electric, self-driving ride-hail service to
            get you to the people, places, and experiences you care about —
            starting in San Francisco.
          </p>
        </div>

        <div className="container w-5/6   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-lg mt-14">
          {[1, 2].map((item) => (
            <div key={item} className="cursor-pointer text-gray-900  ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src="https://images.ctfassets.net/95kuvdv8zn1v/36KGXBtiMA29YpPzTXqc1x/60aa2392e417f1f8ced7f98f54bf820b/Cruise_2nd-Floor_0404.jpg?fm=webp"
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <p className="font-medium text-sm lg:text-lg text-social-instagram mb-2">
                  Take control
                </p>
                <div className="text-lg lg:text-xl font-medium flex space-x-2">
                  <p>
                    There’s no driver or uncertain interactions. It’s simple,
                    safe, and reliable, so you can just relax and be yourself.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-b bg-white  border-gray-200" />

      <section className="bg-white py-10 lg:py-20 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center text-sm md:text-lg text-social-instagram mb-4">
            Ride-hall
          </h4>
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            A new kind of ride
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            We’re creating an all-electric, self-driving ride-hail service to
            get you to the people, places, and experiences you care about —
            starting in San Francisco.
          </p>
        </div>

        <div className="container w-5/6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 max-w-screen-lg mt-14">
          {[1, 2].map((item) => (
            <div key={item} className="cursor-pointer text-gray-900  ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src="https://images.ctfassets.net/95kuvdv8zn1v/36KGXBtiMA29YpPzTXqc1x/60aa2392e417f1f8ced7f98f54bf820b/Cruise_2nd-Floor_0404.jpg?fm=webp"
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <p className="font-medium text-sm lg:text-lg text-social-instagram mb-2">
                  Take control
                </p>
                <div className="text-lg lg:text-xl font-medium flex space-x-2">
                  <p>
                    There’s no driver or uncertain interactions. It’s simple,
                    safe, and reliable, so you can just relax and be yourself.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bookmark-offWhite py-20 lg:py-20 ">
        <div className="container px-10 lg:px-0 ">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            We're just getting started
          </h1>
          <div className="flex justify-center items-center mt-4 ">
            <Link
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2 py-1"
              to="/technology">
              <span className="text-sm lg:text-lg font-medium">
                See the technology behind the services
              </span>
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M0 1.00586H11V12.0059"
                  stroke="currentColor"
                  strokeWidth="2"></path>
                <line
                  x1="10.857"
                  y1="1.15437"
                  x2="0.745382"
                  y2="11.266"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="2.61313"></line>
              </svg>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <UndrawStartup className="w-full h-full lg:h-96" />
          </div>
        </div>
      </section>
      <StayUpToDate />
    </div>
  );
};
