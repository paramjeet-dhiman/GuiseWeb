import React from "react";
import { SocialConnect } from "./SocialConnect";

export const ComingSoon = () => {
  return (
    <div className="h-screen py-20">
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold animate-bounce text-core-black sm:text-5xl sm:leading-none md:text-6xl">
                Coming Soon
              </h2>

              <p className="text-md md:text-xl mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dignissimos dolorem eos animi, perferendis earum quam
                sequi odio voluptate velit at tempore adipisci inventore modi
                consequatur quaerat, nemo iure. Incidunt.{" "}
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <SocialConnect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};