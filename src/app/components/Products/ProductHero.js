import React from "react";

export const ProductHero = ({ img, title, bio }) => {
  return (
    <section className="flex flex-col lg:flex-row px-10 py-10 bg-bookmark-smoke lg:py-20 lg:px-20 ">
      <div className="grid grid-cols-12  items-center lg:gap-10">
        <div className=" w-full col-span-full lg:col-span-6  md:m-0 md:order-2 ">
          <div className="">
            <img
              className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl filter drop-shadow-2xl  "
              src={img}
              alt=""
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex flex-col  w-full col-span-full mt-10 md:mt-0 lg:col-span-6 ">
          <h2 className="text-2xl lg:text-4xl  font-medium mb-4">{title}</h2>
          <div className="text-lg lg:text-xl text-core-black text-justify  lg:max-w-xl">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
