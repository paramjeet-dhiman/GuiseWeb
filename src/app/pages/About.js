import React from "react";
import { Link } from "react-router-dom";
import BGImg from "../../assets/images/BGAbout.jpg";
import BGJoin from "../../assets/images/AboutJoin.jpg";

export const About = () => {
  return (
    <div className=" pt-10 h-full">
      <section className="relative h-screen grid place-content-center bg-bookmark-blue  ">
        <div className="px-10 md:px-24 flex flex-col-reverse lg:flex-row items-center  lg:mt-10">
          <div className="flex ">
            <div className="flex items-center text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full text-gray-100 ">
                <h2 className="text-5xl font-semibold mb-4">About Us</h2>
                <p className="mt-2 lg:mt-4  text-gray-400 text-center md:text-justify  text-base lg:text-xl w-full lg:w-5/6">
                  Guise AI solves the cost and efficiency problems endemic in AI
                  today. Our continuous learning AI solutions on the edge allow
                  machines to continuously learn and adapt to dynamically
                  changing data in the real world without having to constantly
                  retrain models.
                </p>
              </div>
            </div>

            <div
              className="hidden lg:block lg:w-1/2  rounded-lg"
              style={{
                height: "750px",
              }}>
              <div
                className="w-full rounded-lg h-full shadow-xl filter drop-shadow-2xl"
                style={{
                  height: "100%",
                  width: "100%",
                  background: ` url(${BGImg}) center center / cover no-repeat`,
                }}>
                <div className="h-full bg-black opacity-25 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="px-10 lg:px-40">
          <div className="font-light space-y-10">
            <p className="text-center md:text-justify lg:text-2xl w-full">
              Established in 2016, Guise AI is the premier global provider of
              continuous learning AI solutions at the edge. We built our
              technology from the ground up using our patent pending Continuous
              Learning AI which powers the most adaptive, accurate and efficient
              streaming data models in the industry.
            </p>
            <p className="text-center md:text-justify lg:text-2xl w-full">
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

      <section className="bg-bookmark-white py-10 lg:py-20">
        {/* <div className="w-5/6 lg:w-4/12 mx-auto">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center text-bookmark-blue">
            Join our Team
          </h1>
          <p className="w-5/6 lg:w-full text-gray-800  text-lg lg:text-xl  lg:text-center  container  text-center  mt-2">
            Help us on our quest to make good software even better.
          </p>
        </div> */}

        <div className="flex flex-col lg:flex-row items-center  md:px-40   gap-y-10">
          <div className="w-full lg:w-1/2 px-10 md:px-0 order-2 lg:order-1">
            <p className="font-medium text-sm uppercase lg:text-lg text-social-instagram my-2">
              We are hiring
            </p>
            <h1 className="text-core-black font-bold text-3xl lg:text-5xl lg:w-5/6 lg:leading-tight ">
              Are you ready to share your expertise ?
            </h1>
            <p className="text-core-black lg:text-justify text-xl lg:text-2xl font-light  mt-4 md:mt-6 lg:w-5/6">
              We're always looking for talented, creative and passionate people
              to join our team. If you're interested in opportunities at our
              company, we'd love to hear from you.
            </p>

            <div>
              <Link to="/careers">
                <button className="btn rounded-md  bg-blue-500 hover:bg-blue-600 text-white font-semibold transform hover:scale-105 hoverTransition   text-xl mt-6  px-10 py-4">
                  Join us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl  filter drop-shadow-2xl  "
              src={BGJoin}
              alt=""
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
