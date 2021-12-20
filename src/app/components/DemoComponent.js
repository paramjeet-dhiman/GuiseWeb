import React from "react";
import { Link } from "react-router-dom";

export const DemoComponent = () => {
  return (
    <section className="bg-bookmark-white py-20 lg:py-36 ">
      <div className="container px-10 lg:px-10">
        <h1 className="text-2xl lg:text-5xl text-core-black uppercase font-black lg:px-4 text-center ">
          See what Guise can do for you
        </h1>
        <div className="flex justify-center items-center mt-5 lg:mt-10 ">
          <Link
            to="/demo"
            // id="go_to_/technology_textHeader_index_2"
            className="text-blue-500 group transform hover:scale-105 hoverTransition  hover:text-blue-400 flex items-center space-x-2 py-1">
            <span className="text-base lg:text-xl uppercase  font-semibold">
              Book A DEMO
            </span>
            {/* <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
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
            </svg> */}
          </Link>
        </div>
      </div>
    </section>
  );
};
