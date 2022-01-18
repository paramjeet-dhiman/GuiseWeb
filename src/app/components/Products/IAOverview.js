import React from "react";
import { DemoComponent } from "../DemoComponent";
import { AdvantageSection } from "../sections/AdvantageSection";
import Tab from "../TabSlider/TabSlider";
import BGIA from "../../../assets/images/BGIA.jpg";
import IAAdv from "../../../assets/images/IABenefits.jpg";
import IAHeadBrief from "../../../assets/images/IAHeadBrief.jpg";
import IATabNoise from "../../../assets/images/IATabNoise.jpg";
import IATabCancell from "../../../assets/images/IATabNCancel.jpg";

export const IAOverview = () => {
  let data = {
    label: "Intelligent Audio",
    subText: `Experience the next level of noise cancellation with the new Guise AI assisted intelligent audio with improved audio filtration and customizable noise cancellation`,
    bgImg: BGIA,
    title: `Lorem Ipsum`,
    image1: IAHeadBrief,
  };

  const tabContent = [
    {
      title: "Noise Detection",
      content: `Analyze audio sources and detect individual traces of noise for real time alerts such as fire alarms.`,
      list: [
        { title: "Fire alarm" },
        { title: "Glass break" },
        { title: "Gunshot" },
        { title: "Yelling/Screaming" },
      ],
      img: IATabNoise,
    },
    {
      title: "Noise Cancellation",
      content: `Filter noise and unwanted background audio from the source and experience clean audio.`,
      list: [
        { title: "Air conditioner" },
        { title: "Car horn" },
        { title: "Children playing" },
        { title: "Dog bark" },
        { title: "Drilling" },
        { title: "Engine idling" },
        { title: "Gun shot" },
        { title: "Jackhammer" },
        { title: "Siren" },
        { title: "Street music" },
      ],
      img: IATabCancell,
    },
  ];

  const images = [IAAdv];

  const advantages = [
    {
      title: `State-of-the art software for next level noise cancellation and detection`,
    },
    { title: `Enhance the quality of of your audio` },
    { title: `Seamless integration with existing hardware` },
    { title: `Provide the most captivating audio experience for listeners` },
    {
      title: `Allow critical noises through such as emergency alarms or breaking glass`,
    },
    {
      title: `Achieve studio level quality without having to compromise your audio`,
    },
  ];
  return (
    <div className="bg-white h-full ">
      <section
        className="w-full bg-center bg-cover  mt-10"
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
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-6/12">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4">
              Intelligent Audio
            </h2>

            <div className="text-lg lg:text-xl text-justify text-core-black md:text-justify w-full lg:w-5/6">
              <p>
                Guise AI with its Intelligent sound is bringing the next
                generation of audio processing with its smart and efficient
                noise detection and cancellation software. Unlike hardware based
                noise cancellations, with the new AI assisted filters, you can
                choose the noise you would like to detect or cancel from a broad
                range of options.
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
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-core-black">
            We make it Easier for you
          </h1>
          <p className="text-core-black  text-lg lg:text-xl lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Here's how we help you enhance customer experience and boost ROI
          </p>
        </div>

        <section className="flex flex-col lg:flex-row px-10 py-10   bg-white lg:py-20 lg:px-40  ">
          <div className="text-core-black w-full h-full">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </section>

        <AdvantageSection advantages={advantages} images={images} order={1} />

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
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
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 ">
                The AI approach to effective audio
              </h2>

              <div className="text-lg lg:text-xl space-y-10 text-gray-500 ">
                <div>
                  <h2 className="text-xl font-semibold mb-2  text-gray-700">
                    Traditional Noise Cancellation
                  </h2>
                  <p className="font-light text-justify  ">
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
                  <p className="font-light text-justify ">
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
                    background: `url(https://images.unsplash.com/photo-1573497161249-42447f9f6706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                  }}></div>

                <div
                  className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                  style={{
                    background: `url(https://images.unsplash.com/photo-1615576447223-fc9e5fae1801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80) center center / cover no-repeat`,
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
                    background: `url(https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
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
        </div>*/}
      </section>

      <DemoComponent />
    </div>
  );
};
