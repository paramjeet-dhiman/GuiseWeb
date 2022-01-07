import React from "react";
import { Tick } from "../Ticks/Tick";

export const AdvantageSection = ({ advantages, images, order }) => {
  return (
    <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
      <div className="grid grid-cols-12  w-full gap-10 ">
        <div
          className={`col-span-full lg:col-span-6 md:m-0 ${
            order ? "   " : "lg:order-1"
          } `}>
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 ">
              <div
                className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-80  filter drop-shadow-2xl  "
                style={{
                  background: `url(${images[0]}) center center / cover no-repeat`,
                }}></div>

              <div
                className="hidden lg:block p-8 mt-8 lg:h-80 object-cover bg-cover bg-center rounded-lg shadow-xl filter drop-shadow-2xl  "
                style={{
                  background: `url(${images[1]}) center center / cover no-repeat`,
                }}></div>
            </div>
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <div
                className="hidden lg:block object-cover bg-cover bg-center  shadow-lg rounded-md text-center   lg:h-80  filter drop-shadow-2xl  "
                style={{
                  background: `url(${images[2]}) center center / cover no-repeat`,
                }}></div>

              <div
                className="hidden lg:block p-8 mt-8 lg:h-80 object-cover bg-cover bg-center rounded-lg shadow-xl filter drop-shadow-2xl  "
                style={{
                  background: `url(${images[3]}) center center / cover no-repeat`,
                }}></div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col col-span-full lg:col-span-6 justify-center text-core-black w-full ${
            order ? "lg:pl-20" : "lg:w-5/6"
          }`}>
          <h2 className="text-3xl lg:text-4xl  mb-4 lg:mb-10 font-semibold">
            Advantages
          </h2>

          <div className=" space-y-7 w-full">
            {advantages.map((item) => (
              <div className="flex items-center space-x-2" key={item.title}>
                <div className="flex items-center">
                  <Tick />
                </div>

                <div className="font-medium text-lg lg:text-xl text-gray-700">
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
