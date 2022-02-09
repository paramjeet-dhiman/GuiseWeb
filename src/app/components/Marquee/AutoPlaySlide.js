import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AutoPlaySlide = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    padding: 0,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
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
    <div className="mt-10">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <div key={`marquee-example-review-${idx}`} className="">
            <div>
              <img
                src={item.img}
                alt={item.img}
                className="bg-cover bg-center rounded-t-sm w-full h-hlg"
              />
            </div>
            <div className="py-4 flex bg-black text-white justify-center items-center shadow">
              <h4 className="text-base sm:text-lg md:text-lg   rounded-xl font-medium ">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
