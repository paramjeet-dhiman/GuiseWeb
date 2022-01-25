import Marquee from "react-fast-marquee";

export const MarqueeComponent = ({ direction, data }) => {
  return (
    <div className="py-5 bg-white">
      <Marquee
        pauseOnHover
        direction={direction}
        speed={50}
        gradient={false}
        className="">
        {data.map((item, idx) => (
          <div
            key={`marquee-example-review-${idx}`}
            className="bg-white filter hoverTransition  drop-shadow-lg hover:shadow-lg    rounded-lg mx-5 lg:mx-20">
            <article
              key={idx}
              className="relative w-48 h-48 lg:w-64 lg:h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg filter drop-shadow-lg"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
              <div className="relative text-white text-center  w-full h-full px-4 lg:px-4 flex flex-col justify-center items-center">
                <h4 className="text-lg lg:text-xl font-bold ">
                  {item.title}
                </h4>
                {/* <p className="text-sm lg:text-base mt-2 lg:mt-2">{item.bio}</p> */}
              </div>
            </article>
            {/* <div className="flex flex-row items-center justify-center max-w-xl  space-x-10 ">
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}>
                <div className="">
                  <h1 className="font-bold lg:text-lg ">{item.title}</h1>
                  <p className="text-base lg:mt-2 max-w-sm">{item.bio}</p>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};
