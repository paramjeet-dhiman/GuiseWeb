import React from "react";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";

export const TMOverview = () => {
  let data = {
    label: "Traffic Management",
    subText: `Revolutionize vehicle and crowd management with real-time accurate analytics for better planning and design of city routes. Smart Cities rise from smart analytics`,
    bgImg: `https://images.unsplash.com/photo-1488134684157-fea2d81a5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,

    title: `Lorem Ipsum`,

    image1: `https://images.pexels.com/photos/2962589/pexels-photo-2962589.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
    image2: `https://images.unsplash.com/photo-1504735432588-ab3bf116740f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80`,
    image3: `https://images.unsplash.com/photo-1594028411108-96a5b0302a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image4: `https://images.unsplash.com/photo-1499351094445-76ef13077fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80`,
    image5: `https://images.unsplash.com/photo-1596188431116-f858853f2be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  };

  const tabContent = [
    {
      title: "License Plate Recognition",
      content: `Track and record vehicles through license plates automatically.`,
      list: [
        { title: "Licence plate detection" },
        { title: "LP character recognition" },
      ],
      img: `https://images.unsplash.com/photo-1503470069725-dacc9110076e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Violation Detection",
      content: `Maintain road safety with real time alerts though automated AI assisted detections.`,
      list: [
        { title: "Illegal parking detection" },
        { title: "Speed violation detection" },
        { title: "Red light violation detection" },
        { title: "Stop line violation detection" },
        { title: "Wrong lane driving" },
        { title: "Helmet detection" },
        { title: "Triple seater detection" },
        { title: "Mob detection" },
      ],
      // https://images.unsplash.com/photo-1529572079217-04ffdce1059b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
      img: `https://images.pexels.com/photos/2716060/pexels-photo-2716060.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
    },
    {
      title: "Traffic Management",
      content: `Manage traffic at key junctions and areas by monitoring people and vehicles.`,
      list: [
        { title: "Vehicle count" },
        { title: "Pedestrian detection" },
        { title: "Obstruction detection" },
      ],
      img: `https://images.unsplash.com/photo-1508798179027-a00aa5326443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    },
    {
      title: "Classification",
      content: `Categorize vehicles with advanced analysis with the help of AI.`,
      list: [{ title: "Vehicle type" }, { title: "Logo detection" }],
      img: `https://images.unsplash.com/photo-1521674685714-2446ff917fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
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
            <p className="text-bookmark-white text-lg lg:text-xl lg:container lg:px-20">
              {data.subText}
            </p>
          </div>
        </div>
      </section>

      {/* ====================== Section #1  ================== */}
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
            <h2 className="text-3xl lg:text-5xl font-medium mb-4 ">
              {data.label}
            </h2>

            <div className="text-lg lg:text-xl text-justify text-core-black md:text-justify w-full lg:w-5/6">
              <p>
                Guise Intelligent traffic provides solutions for accurate and
                comprehensive analyses of city traffic by comprehending visual
                data through edge based AI assistance. The ability to plan a
                more efficient and safe traffic management system leads to a
                smarter city
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

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40  ">
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

        {/* ====================== Section #2  ================== */}
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
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 text-core-black ">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-10">
                What Guise AI can do for you
              </h2>

              <div className="text-justify space-y-10  order-1 md:order-2">
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Track Vehicles
                  </h2>
                  <p className="text-lg">
                    In case of repeat offenders on the road, being able to track
                    offenses and vehicles automatically though license plates
                    can help maintain safer roads. Furthermore, premises can log
                    the entry and exit of vehicles for future reference
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Density Metrics
                  </h2>
                  <p className="text-lg">
                    Understand the density of vehicles at different locations at
                    different times. Having this data can help you understand
                    peak hours and locations and accordingly plan routes
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Classify Traffic
                  </h2>
                  <p className="text-lg">
                    Distinguish between the kind of vehicles that exist all over
                    your city. Understand how different areas receive what kind
                    of traffic at which hours of the day to organize and design
                    better
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== Section #3  ================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative ">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 order-2 md:order-1 text-core-black">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-10">
                Guise AI can help you…
              </h2>

              <div className="text-justify  space-y-10 lg:w-5/6">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2">
                    Understand traffic
                  </h2>
                  <p className="text-lg">
                    Have an automated system to help understand your cities
                    movement better. Get accurate numbers on vehicle density and
                    location and systematically make decisions
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2">Be prepared</h2>
                  <p className="text-lg">
                    With analyzed data, prepare for special cases well in
                    advance with efficient roadblocks and route management.
                    Preparing for the worst has been easier
                  </p>
                </div>

                <div className="">
                  <h2 className="text-xl font-semibold mb-2">
                    Maintain Safer roads
                  </h2>
                  <p className="text-lg">
                    Violating road safety standards have led to countless
                    accidents every year that have cost human lives. With an
                    automated system, receive real time alerts and records to
                    prevent harsh outcomes and penalize the responsible party
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== Section #4  ================== */}
        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image4}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full lg:w-6/12">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4">
                Violation detections
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light text-lg  text-justify lg:text-xl space-y-5 text-gray-500 lg:w-5/6">
                  Maintain safer roads with automated detection and tracking of
                  violators. Setup real time alerts with constant monitoring on
                  a day-to-day basis. Make your city a smarter city and a safer
                  city.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* ====================== Section #5  ================== */}

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40  ">
          <div className="flex flex-wrap items-center pt-8  ">
            <div className="w-full md:w-6/12  md:order-2">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1596188431116-f858853f2be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1580742744464-d67b9e35ddff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVoaWNsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-72 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1511814104612-47a8f022914b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.pexels.com/photos/3289479/pexels-photo-3289479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-6/12   md:order-1 ">
              <h2 className="text-3xl lg:text-4xl font-medium mb-4  lg:w-5/6">
                Explore our solutions for a smarter system
              </h2>

              <p className=" font-light text-justify lg:w-5/6 text-lg lg:text-xl  space-y-10 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                explicabo numquam dicta ea, cumque maxime dolor optio similique
                quo, provident iste itaque ipsa impedit temporibus! Itaque
                reiciendis pariatur unde quae.
              </p>

              <div className="grid  mt-8 sm:grid-cols-2 gap-y-4 lg:w-5/6   ">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Vehicle Detection
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Vehicle make and build
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Vehicle Count
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    License Plate Recognition
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Road Violation detection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>

      {/* ====================== DEMO BUTTON  ================== */}

      <DemoComponent />
    </div>
  );
};
