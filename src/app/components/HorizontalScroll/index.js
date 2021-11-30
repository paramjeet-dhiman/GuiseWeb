import React from "react";

export const Player = ({ source }) => {
  return (
    <div className="h-screen">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full "
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "10",
        }}>
        <source src={source} type="video/mp4" />
      </video>

      <div className=" bg-bookmark-blue bg-opacity-30 absolute z-20 w-full h-full"></div>

      <div className="relative flex h-screen  flex-col justify-center items-center z-20 text-white">
        <h3 className="text-7xl   font-bold tracking-tighter">
          See what's beyond the world
        </h3>
        {/* <div className="transform hover:scale-110 transition-all ease-linear duration-500">
          <svg
            className="w-36 h-36  shadow-xl transition-all ease-linear duration-500 rounded-full p-2 mt-16 animate-pulse bg-bookmark-purple hover:animate-none"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};
