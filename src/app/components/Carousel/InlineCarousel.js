import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const InlineCarousel = ({ seliderRef, setSlideIndex }) => {
  const beforeChange = (prev, next) => {
    setSlideIndex(Math.floor(next));
  };

  const slides = [
    {
      label: "Develop",
      img: "https://dummyimage.com/600x400/000/fff",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet fuga similique asperiores eveniet  ",
    },
    {
      label: "Distribute",
      img: "https://dummyimage.com/600x400/000/7CFC00",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet fuga similique asperiores eveniet ",
    },
    {
      label: "Deploy",
      img: "https://dummyimage.com/600x400/000/dddddd",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet fuga similique asperiores eveniet ",
    },
  ];

  const pagination = [];

  if (Array.isArray(slides)) {
    slides.map((data) => pagination.push(data.label));
  }

  const settings = {
    arrows: true,
    centerMode: true,
    edgeFriction: 1,
    infinite: false,
    swipeToSlide: true,
    variableWidth: true,
    accessibility: true,
    focusOnSelect: true,
    draggable: true,
    easing: "swing",
    speed: 700,
    // dots: true,
    // customPaging: (i) => (
    //   <div className="font-semibold button flex justify-center  space-x-10 gradient-text border-b-4 border-red-500">
    //     {pagination[i]}
    //   </div>
    // ),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="relative  bg-white  text-bookmark-blue overflow-hidden">
      {/* <div className="button flex justify-center  space-x-10">
        {slides.map((item) => (
          <div className="hover:bg-gray-200 cursor-pointer rounded-md">
            <span className="font-semibold px-5 py-2 gradient-text border-b-4 text-2xl  uppercase border-gray-200">
              {item.label}
            </span>
          </div>
        ))}
      </div> */}
      <Slider {...settings} className="">
        {slides.map((item, index) => (
          <div key={index} className="outline-none ">
            <div className="flex flex-col lg:flex-row items-center">
              <img
                src={item.img}
                alt={item.img}
                data-index={index}
                className="w-full h-full lg:p-20 mb-5 lg:mb-0"
              />
              <div className="flex flex-col space-y-5 container  lg:w-3/4">
                <h2 className="text-xs lg:text-2xl text-red-500  font-medium ">
                  {item.label}
                </h2>

                <p className="text-sm  lg:text-lg lg:w-3/4 ">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
