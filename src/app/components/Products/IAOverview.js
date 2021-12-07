import React from "react";
import { Link } from "react-router-dom";
import { ScrollButton } from "../ScrollButton/ScrollBtn";

export const IAOverview = () => {
  let data = {
    label: "Intelligent Audio",
    subText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aut veniam vel dolores, obcaecati libero commodi est dicta magnam atque dignissimos ratione mollitia vitae sequi repellat possimus quasi magni aliquid?`,
    bgImg: `https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    title: `Lorem Ipsum`,

    image1: `https://images.pexels.com/photos/4062563/pexels-photo-4062563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image2: `https://images.pexels.com/photos/8133246/pexels-photo-8133246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  };

  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          background: `url(${data.bgImg}) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0 w-4/6">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              {data.label}
            </h1>
            <p className="text-bookmark-white text-lg lg:text-xl lg:container lg:px-20">
              {data.subText}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-10 py-10 bg-bookmark-smoke lg:py-20 lg:px-40 gap-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className=" w-full lg:w-6/12 md:m-0 md:order-2 ">
            <div className="flex justify-center relative">
              <img
                className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                src={data.image1}
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-6/12">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4">
              Intelligent Audio
            </h2>

            <div className="text-lg lg:text-xl space-y-5 text-gray-500 w-5/6">
              <p>
                Noise Cancellation is the ability to enhance a speech signal
                plagued with unwanted noises by isolating the dominant sound.
                Noise Cancellation techniques are becoming popular in
                audio/video editing software, video conferencing platforms, and
                noise-canceling headphones. Each of these use cases employs
                different and suitable techniques in cancelling the noise based
                on the environment of use. Hence, Noise Cancellation is still a
                fast-evolving technology, with Artificial Intelligence bringing
                a whole new domain of approaches to improve the task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-28">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Features
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            We make it Easier for you
          </h1>
          <p className="text-gray-800 font-medium text-lg lg:text-xl pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Here's how these features help you
          </p>
        </div>

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={data.image2}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10">
                The AI approach to effective audio
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Traditional Noise Cancellation
                  </h2>
                  <p className="font-light">
                    Most noise-cancelling techniques are an interplay of signal
                    overlaps that may lead to removal of unwanted noise. Signal
                    filters such as high pass and low pass are used to cancel
                    certain frequencies of sound. Usually, these kinds of
                    cancellation techniques are extremely rigid and may cancel
                    noise frequencies that may overlap with the actual speech or
                    sound of interest.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    AI assisted Intelligent Noise Cancellation
                  </h2>
                  <p className="font-light">
                    The need for an intelligent system that can not just do hard
                    filters but recognize and predict audio signals and
                    selectively smooth out unwanted signals is imminent. The
                    Guise AI Noise Cancellation technique is capable of learning
                    any kind of noise and can be directed into filtering them
                    out rather than filtering entire frequencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-bookmark-white py-10 lg:py-36  ">
        <div className="container px-10 lg:px-10">
          <h1 className="text-xl font-medium lg:text-5xl text-core-black uppercase lg:font-black lg:px-4 text-center ">
            See what Guise can do for you
          </h1>
          <div className="flex justify-center items-center mt-10 ">
            <Link
              to="/demo"
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2 py-1">
              <span className="text-base lg:text-xl font-medium">
                Book a DEMO Now
              </span>
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M0 1.00586H11V12.0059"
                  stroke="currentColor"
                  strokeWidth="2"></path>
                <line
                  x1="10.857"
                  y1="1.15437"
                  x2="0.745382"
                  y2="11.266"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="2.61313"></line>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ScrollButton />
    </div>
  );
};
