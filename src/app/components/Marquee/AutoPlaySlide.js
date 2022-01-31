import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AutoPlaySlide = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    padding: 0,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <Slider {...settings} className="">
        {data.map((item, idx) => (
          <div
            key={`marquee-example-review-${idx}`}
            className=" shadow  hover:bg-color-50  rounded-t-lg group">
            <div className="relative ">
              <div className="absolute inset-0  rounded-t-lg bg-black bg-opacity-30 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
              <img
                src={item.img}
                alt=""
                className=" w-full h-hxl bg-cover bg-center rounded-t-lg hover:opacity-0"
              />
            </div>
            <div className="py-4 flex justify-center items-center filter drop-shadow-2xl">
              <h4 className="text-lg lg:text-xl  rounded-xl font-medium ">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
