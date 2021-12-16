import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HorizontalScroll = ({ sliderRef, setSlideIndex }) => {
  const beforeChange = (prev, next) => {
    setSlideIndex(Math.floor(next));
  };

  const settings = {
    arrows: false,
    centerMode: true,
    edgeFriction: 1,
    infinite: false,
    swipeToSlide: true,
    variableWidth: true,
    accessibility: false,
    focusOnSelect: false,
    draggable: true,
    beforeChange: beforeChange,

    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 0,
          draggable: false,
          swipeToSlide: false,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet fuga similique asperiores eveniet  ",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      img: "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet fuga similique asperiores eveniet ",
    },
  ];

  return (
    <div className=" w-full bg-bookmark-white  text-bookmark-blue overflow-hidden">
      <Slider {...settings} className="" ref={sliderRef}>
        {slides.map((item, index) => (
          <div
            key={index}
            className="outline-none container px-52 py-10 lg:py-10  lg:px-28  ">
            <div className="flex flex-col  w-full h-full container  text-center">
              <img
                src={item.img}
                alt={item.img}
                data-index={index}
                className="w-full h-full lg:p-20 mb-5 lg:mb-0"
              />
              <div className="flex flex-col space-y-5 container  text-center lg:w-2/4">
                <h2 className="text-xs lg:text-lg text-red-500  font-medium ">
                  {item.title}
                </h2>
                <p className="text-sm  lg:text-lg ">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
