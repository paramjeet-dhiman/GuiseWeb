import React from "react";
import { DemoComponent } from "../DemoComponent";
import { ScrollButton } from "../ScrollButton/ScrollBtn";
import Tab from "../TabSlider/TabSlider";

export const IAOverview = () => {
  let data = {
    label: "Intelligent Audio",
    subText: `Experience the next level of Noise cancellation with the new Guise  AI assisted Intelligent Audio with improved audio filtration and customizable noise cancellation.`,
    bgImg: `https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    title: `Lorem Ipsum`,

    image1: `https://images.pexels.com/photos/4062563/pexels-photo-4062563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image2: `https://images.pexels.com/photos/8133246/pexels-photo-8133246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  };

  const tabContent = [
    {
      title: "Vehicle Detection",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quod, commodi totam sunt officia expedita ipsum suscipit veniam quia recusandae esse iure. In provident doloremque vitae placeat officiis laborum reprehenderit.`,

      img: `https://images.unsplash.com/photo-1535015585980-7cb6b4de8f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    },
    {
      title: "Road Violation detection",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi maiores dignissimos id harum sit atque architecto, ratione aliquid quas cum. Quo cupiditate, nemo quibusdam adipisci maxime eum repellendus libero.`,

      img: `https://images.unsplash.com/photo-1499351094445-76ef13077fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80`,
    },
    {
      title: "License Plate Recognition",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita debitis quam impedit explicabo nostrum modi officia, quibusdam dolores eveniet porro ad a facere ipsum quia ipsam officiis sed! Dolorum, eum.`,
      img: `https://images.unsplash.com/photo-1535015585980-7cb6b4de8f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    },
    {
      title: " Vehicle Count",
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita debitis quam impedit explicabo nostrum modi officia, quibusdam dolores eveniet porro ad a facere ipsum quia ipsam officiis sed! Dolorum, eum.`,
      img: `https://imgr.search.brave.com/dCW7U6hq-tYWrNx85YtehGnUMQjLvE0fwyCWs6RvG8k/fit/1024/687/ce/1/aHR0cHM6Ly9jMS5z/dGF0aWNmbGlja3Iu/Y29tLzkvODQ0MS83/OTc5NDc4NDEwX2Y4/ZmJlNWE0NDFfYi5q/cGc`,
    },
  ];
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

      <DemoComponent />

      <ScrollButton />
    </div>
  );
};
