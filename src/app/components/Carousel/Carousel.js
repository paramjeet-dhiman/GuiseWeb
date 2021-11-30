import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = () => {
  const slidesData = [
    {
      id: 1,
      title: "repellendus id ullam",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title: "excepturi consequatur est",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      title: "eius doloribus blanditiis",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
    {
      id: 4,
      title: "nihil voluptates delectus",
      label: "Qui vel consequatur recusandae illo repellendus.",
    },
    {
      id: 5,
      title: "nemo dolorem necessitatibus",
      label: "Placeat odit velit itaque voluptatem.",
    },
    {
      id: 6,
      title: "dolorem quibusdam quasi",
      label: "Adipisci officiis repudiandae.",
    },
  ];

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <button className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-800 hover:bg-gray-900">
          <svg
            className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-50 hover:text-gray-100 hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      ) : (
        <button className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-800 hover:bg-gray-900">
          <svg
            className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-50 hover:text-gray-100 hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      );
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }
  return (
    <figure className="">
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={2}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        autoplay={true}
        autoplaySpeed={3000}>
        {slidesData.map((slide) => (
          <div
            className="slick-slide  text-center w-full    carousel-item "
            key={slide.id}>
            {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
            <img
              className="w-full h-full"
              src={`https://picsum.photos/800/400?img=${slide.id}`}
              alt={slide.title}
            />
            <figcaption className="flex  justify-center bg-black bg-opacity-90  text-sm font-medium tracking-wide  items-center py-5 text-white ">
              {slide.label}
            </figcaption>
          </div>
        ))}
      </Slider>
    </figure>
  );
};
