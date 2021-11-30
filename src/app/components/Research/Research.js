import React from "react";
import { ResearchData } from "./ResearchData";

export const Research = () => {
  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold text-white uppercase md:text-7xl mb-4">
              Research At Guise
            </h1>
          </div>
        </div>
      </section>

      {ResearchData.map((item) => (
        <section className=" bg-white py-10 lg:py-20 container ">
          <h1 className="text-bookmark-blue uppercase underline text-3xl font-black mb-4">
            {item.title}
          </h1>
          <p>{item.description}</p>
        </section>
      ))}
    </div>
  );
};
