import BGImg from "../../assets/images/BGAbout.jpg";

export const About = () => {
  return (
    <div className="mt-10 md:mt-16 ">
      <div className="container py-20">
        <div className="grid md:grid-cols-2 items-center pt-10 sm:pt-0 justify-center gap-20">
          <div className="">
            <div className="text-center  md:mt-0  md:text-left w-full">
              <h1 className="text-3xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl  text-gray-800 font-bold leading-7 md:leading-10">
                About Us
              </h1>
              <p className="mt-5 lg:mt-7  text-core-black  text-base sm:text-lg lg:max-w-xl lg:text-xl">
                Guise AI solves the cost and efficiency problems endemic in AI
                today. Our continuous learning AI solutions on the edge allow
                machines to continuously learn and adapt to dynamically changing
                data in the real world without having to constantly retrain
                models.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={BGImg}
              className="md:h-hl md:w-wl lg:w-full object-cover lg:h-hxl rounded-lg shadow-xl  filter drop-shadow-2xl"
              alt="hero landing page img"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* <section className="flex  justify-center items-center bg-white ">
        <div className="grid lg:grid-cols-12 container py-12 gap-10 lg:gap-20">
          <div className="col-span-full lg:col-span-6 items-center flex flex-col justify-center  w-full ">
            <div className="text-center pt-10 my-10 md:mt-0  lg:text-left w-full">
      
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-gray-800 font-bold leading-7 md:leading-10">
                About Us
              </h1>
              <p className="lg:text-left mt-5 lg:mt-7  text-core-black  text-base sm:text-lg lg:max-w-lg lg:text-xl">
                Guise AI solves the cost and efficiency problems endemic in AI
                today. Our continuous learning AI solutions on the edge allow
                machines to continuously learn and adapt to dynamically changing
                data in the real world without having to constantly retrain
                models.
              </p>
            </div>
          </div>
          <div className="col-span-full flex items-center justify-center lg:col-span-6 ">
            <img
              src={BGImg}
              className="object-cover bg-cover bg-center h-80 w-80 sm:h-96 sm:w-wl lg:w-full lg:h-hl rounded-lg shadow-xl  filter drop-shadow-2xl   "
              alt="sdf"
              draggable="false"
            />
          </div>
        </div>
      </section>  */}

      {/* <section className="flex items-center justify-center   bg-white">
        <div className=" mt-10 lg:mt-20  px-8   container grid lg:grid-cols-12 gap-10 lg:gap-20 ">
          <div className="col-span-full lg:col-span-6 flex flex-col justify-center w-full lg:w-10/12">
            <h2 className="text-3xl font-semibold uppercase md:text-4xl  lg:leading-tight text-center lg:text-left  ">
              
            </h2>
            <p className="mt-2 lg:mt-5 text-center lg:text-justify  text-base lg:text-lg">
              Guise AI solves the cost and efficiency problems endemic in AI
              today. Our continuous learning AI solutions on the edge allow
              machines to continuously learn and adapt to dynamically changing
              data in the real world without having to constantly retrain
              models.
            </p>
          </div>

          <div className="col-span-full flex items-center justify-center lg:col-span-6 ">
            <img
              src={BGImg}
              className="object-cover bg-cover bg-center h-hl lg:h-hm  lg:w-full  rounded-lg shadow-xl  filter drop-shadow-2xl   "
              alt="sdf"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-bookmark-white">
        <div className="container">
          <div className=" space-y-10 text-base md:text-lg lg:text-xl">
            <p className="text-center md:text-justify">
              Established in 2016, Guise AI is the premier global provider of
              continuous learning AI solutions at the edge. We built our
              technology from the ground up using our patent pending Continuous
              Learning AI which powers the most adaptive, accurate and efficient
              streaming data models in the industry.
            </p>
            <p className="text-center md:text-justify">
              Our technology deployed at the edge delivers feedback rapidly and
              locally within the system. Localized processing is more efficient
              (low latency) and it increases the level of security in terms of
              data privacy. Clients and OEMS who require an accurate,
              cost-efficient, and secure solution turn to Guise AI to
              continuously extract patterns and predict from real-time and
              dynamically changing data to create the greatest impact for
              end-users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
