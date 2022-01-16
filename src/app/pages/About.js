import React from "react";
import BGImg from "../../assets/images/BGAbout.jpg";

export const About = () => {
  return (
    <div>
      <section className="flex items-center justify-center h-screen  bg-white">
        <div className=" mt-10 lg:mt-20  px-8   md:px-20  lg:px-40  grid lg:grid-cols-12 gap-10 lg:gap-20 ">
          <div className="col-span-full lg:col-span-6 flex flex-col justify-center w-full lg:w-10/12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl lg:leading-tight font-bold uppercase text-center lg:text-left  ">
              About Us
            </h2>
            <p className="mt-2 text-center lg:text-justify text-base lg:text-xl ">
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
      </section>

      <section className="py-20 bg-bookmark-white">
        <div className="px-10 lg:px-40">
          <div className=" space-y-10 text-base lg:text-xl">
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
