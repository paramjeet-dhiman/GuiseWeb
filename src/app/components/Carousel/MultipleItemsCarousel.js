import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const MultipleItems = () => {
  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    variableWidth: true,
    easing: "linear",
    accessibility: false,
    focusOnSelect: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
  };

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

  return (
    <div>
      <Slider {...settings} className="cursor-grab">
        {slidesData.map((slide) => (
          <div
            className="slick-slide  text-center w-full  outline-none    carousel-item "
            key={slide.id}>
            <img
              className="w-full h-full"
              src={`https://picsum.photos/800/400?img=${slide.id}`}
              alt={slide.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
