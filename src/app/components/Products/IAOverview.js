import React from "react";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";
import { Tick } from "../Ticks/Tick";

export const IAOverview = () => {
  let data = {
    label: "Intelligent Audio",
    subText: `Experience the next level of Noise cancellation with the new Guise  AI assisted Intelligent Audio with improved audio filtration and customizable noise cancellation.`,
    bgImg: `https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    title: `Lorem Ipsum`,

    image1: `https://images.pexels.com/photos/4062563/pexels-photo-4062563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image2: `https://images.unsplash.com/photo-1567721537939-868edb6564a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`,
  };

  const tabContent = [
    {
      title: "Noise Detection",
      content: `Analyze audio sources and detect traces of noise for real time alerts such as fire alarms.`,
      list: [
        { title: "Real Time Alerts" },
        { title: "Custom Noise Detection" },
      ],
      img: `https://images.pexels.com/photos/7586662/pexels-photo-7586662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Noise Cancellation",
      content: `Filter noise and unwanted background audio from the audio source and experience clean audio.`,
      list: [{ title: "Custom Noise Filtration" }],
      img: `https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
  ];
  return (
    <div className="bg-white h-full ">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          background: `url(${data.bgImg}) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0 lg:w-5/6">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              {data.label}
            </h1>
            <p className="text-bookmark-white  text-lg lg:text-xl lg:container lg:px-20">
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
                className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
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

            <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500 lg:w-5/6">
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

        <section className="flex flex-col lg:flex-row px-10 py-10   bg-white lg:py-20 lg:px-40  ">
          <div className="text-bookmark-blue w-full h-full">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image2}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                The AI approach to effective audio
              </h2>

              <div className="text-lg lg:text-xl space-y-10 text-gray-500 ">
                <div>
                  <h2 className="text-xl font-semibold mb-2  text-gray-700">
                    Traditional Noise Cancellation
                  </h2>
                  <p className="font-light text-justify lg:w-5/6 ">
                    Most noise-cancelling techniques are an interplay of signal
                    overlaps that may lead to removal of unwanted noise. Signal
                    filters such as high pass and low pass are used to cancel
                    certain frequencies of sound. Usually, these kinds of
                    cancellation techniques are extremely rigid and may cancel
                    noise frequencies that may overlap with the actual speech or
                    sound of interest.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl   font-semibold mb-2  text-gray-700">
                    AI assisted Intelligent Noise Cancellation
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
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

      <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40  ">
        <div className="flex flex-wrap items-center pt-8  ">
          <div className="w-full md:w-6/12  md:order-2">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 ">
                <div
                  className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                  style={{
                    background: `url(https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80) center center / cover no-repeat`,
                  }}></div>

                <div
                  className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                  style={{
                    background: `url(https://images.unsplash.com/photo-1572119244337-bcb4aae995af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                  }}></div>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <div
                  className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-72 "
                  style={{
                    background: `url(https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                  }}></div>

                <div
                  className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                  style={{
                    background: `url(https://images.unsplash.com/photo-1559732277-7453b141e3a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                  }}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-6/12   md:order-1 ">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4  lg:w-5/6">
              Explore our services
            </h2>

            <p className=" font-light text-justify lg:w-5/6 text-lg lg:text-xl  space-y-10 text-gray-500">
              Experience the next level of Noise cancellation with the new Guise
              AI assisted Intelligent Audio with improved audio filtration and
              customizable noise cancellation.
            </p>

            <div className="grid  mt-8 sm:grid-cols-2 gap-y-4 lg:w-5/6   ">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 flex items-center">
                  <Tick />
                </div>
                <div className="font-medium text-lg lg:text-xl text-gray-700">
                  Noise Detection
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 flex items-center">
                  <Tick />
                </div>
                <div className="font-medium text-lg lg:text-xl text-gray-700">
                  Noise Cancellation
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 flex items-center">
                  <Tick />
                </div>
                <div className="font-medium text-lg lg:text-xl text-gray-700">
                  Noise Filtration
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 flex items-center">
                  <Tick />
                </div>
                <div className="font-medium text-lg lg:text-xl text-gray-700">
                  Audio Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoComponent />
    </div>
  );
};
