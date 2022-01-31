import React from "react";
import { Tick } from "../Ticks/Tick";

export const AdvantageSection = ({ advantages, images, order }) => {
  return (
    <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-20 gap-16 ">
      <div className="grid lg:grid-cols-12  w-full gap-10 ">
        <div
          className={`col-span-full lg:col-span-6 md:m-0 ${
            order ? "   " : "lg:order-1"
          } `}>
          <div className="justify-center flex flex-wrap ">
            <div className=" w-full">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl filter drop-shadow-2xl  "
                  src={images[0]}
                  alt=""
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col col-span-full lg:col-span-6 justify-center text-core-black w-full ${
            order ? "lg:pl-20" : "lg:w-5/6"
          }`}>
          <h2 className="text-3xl lg:text-4xl  mb-4 lg:mb-7 font-semibold">
            Advantages
          </h2>

          <div className=" space-y-5 w-full">
            {advantages.map((item) => (
              <div className="flex items-center space-x-2" key={item.title}>
                <div className="flex items-center">
                  <Tick />
                </div>

                <div className="text-base xl:text-xl font-medium ">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
