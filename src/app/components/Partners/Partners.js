import React from "react";

export const Partners = () => {
  return (
    <section className="py-10 px-5 md:px-0 lg:py-20 bg-white">
      <div className="sm:w-3/4 lg:w-6/12 mx-auto px-12 lg:px-2 mb-8 ">
        <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
          partners
        </h4>
        <h1 className="text-3xl lg:text-5xl  font-semibold  lg:font-bold text-center text-bookmark-blue">
          Proud to Partner with
        </h1>
        <p className="text-gray-600 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quia
          atque error.
        </p>
      </div>

      <div className="flex items-center container gap-6 lg:gap-16  ">
        <div>
          <img
            src="https://www.dexigner.com/images/news/xw/32047.jpg"
            className="w-full h-full "
            alt="..."
            draggable="false"
          />
        </div>
        <div>
          <img
            src="https://www.dexigner.com/images/news/xw/32047.jpg"
            className="w-full h-full "
            alt="..."
            draggable="false"
          />
        </div>
        <div>
          <img
            src="https://www.dexigner.com/images/news/xw/32047.jpg"
            className="w-full h-full "
            alt="..."
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};
