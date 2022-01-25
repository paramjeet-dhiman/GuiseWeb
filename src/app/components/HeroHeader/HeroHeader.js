import React from "react";

export const HeroHeader = ({ img, title, bgColor = "" }) => {
  return (
    <div>
      <section
        className="w-full bg-center bg-cover mt-10"
        style={
          img
            ? {
                height: "36rem",
                background: `url(${img}) center center / cover no-repeat`,
              }
            : {
                height: "36rem",

                backgroundColor: "#0e141b",
              }
        }>
        <div className="flex items-center justify-center w-full h-full  bg-black bg-opacity-70">
          <div className="text-center  px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl filter drop-shadow-2xl">
              {title}
            </h1>
            {/* <Link
              to="/careers/jobs"
              className="  btn text-lg font-bold transition duration-500 hover:bg-blue-700  ease-linear select-none text-white bg-social-facebook focus:outline-none ">
              View Openings
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};
