import React from "react";

export const ProductHeader = ({ img, title, bio }) => {
  return (
    <section
      className="w-full bg-center bg-cover mt-10  "
      style={{
        height: "28rem",
        background: `url(${img}) center center / cover no-repeat`,
      }}>
      <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
        <div className="text-center px-10 lg:px-0 lg:w-5/6">
          <h1 className="text-3xl font-bold  text-white uppercase md:text-5xl mb-4">
            {title}
          </h1>
          <p className="text-bookmark-white text-lg lg:text-xl lg:container lg:px-20">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};
