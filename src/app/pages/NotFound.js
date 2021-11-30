import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UndrawNotFound } from "../../assets/svg/Not_Found_404.svg";

export const NotFound = () => (
  <div className="select-none ">
    <div className="space-y-10 flex flex-col h-screen  justify-center items-center">
      <UndrawNotFound />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black">NOT FOUND</h1>
        <p className="mt-4 text-base font-light">
          You just hit a route that doesn&#39;t exist...{" "}
        </p>
      </div>
      <div>
        <Link to="/">
          <button className="btn bg-bookmark-blue flex space-x-2 hover:bg-black hover:bg-opacity-80 items-center text-white font-semibold text-lg">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);
