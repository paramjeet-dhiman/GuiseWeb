import React from "react";
import Tab from "../TabSlider/TabSlider";
import { DemoComponent } from "../DemoComponent";
import ReactCompareImage from "react-compare-image";
import Airport1 from "../../../assets/images/airport1.jpg";
import Airport2 from "../../../assets/images/airport2.jpg";

export const AOSOverview = () => {
  let data = {
    bgImg: `https://images.pexels.com/photos/240524/pexels-photo-240524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    label: "Airport Ground Operations",

    subText: `The ability of Airports, Airlines, and Aviation Authorities to
    implement high-impact strategies is critical in order to increase
    customer satisfaction and operational efficiency`,

    title: `Lorem Ipsum`,
    // https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    image1: `https://images.unsplash.com/photo-1638072252174-8806821a091e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image2: `https://images.unsplash.com/photo-1578434972378-e3c393d983db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`,
    image3: `https://images.unsplash.com/photo-1565108404384-2919e47c07c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    image4: `https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image5: `https://images.unsplash.com/photo-1577023631454-3cc63cc63cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`,
    image6: `https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image7: `https://images.unsplash.com/photo-1503365194569-df4e1d04cec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`,
  };

  const tabContent = [
    {
      title: "Operations",
      content: `Record the following operational events and track them automatically with the Guise AI airport ground operations suite.`,
      list: [
        { title: "Aircraft gate arrival time" },
        { title: "Aircraft gate departure time" },
        { title: "Cargo status" },
        { title: "Cargo offload time" },
        { title: "Cargo onload time" },
        { title: "Jet bridge status" },
        { title: "Jet bridge connection duration" },
        { title: "Airline detection" },
        // { title: "Aircraft arrival and departure time" },
        // { title: "Cargo offload and onload duration" },
      ],
      img: `https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Safety Monitoring",
      content: `Maintain safety standards and minimize violations with constant surveillance and alerts.`,
      list: [
        { title: "Safety cones detection" },
        { title: "Safety chokes detection" },
        { title: "Pushback truck detection" },
        { title: "Wheel chocks detection" },
        { title: "Safety jacket/vest detection" },
        { title: "Violation Alerts" },
        // { title: "Parking Lines detection" },
      ],
      img: `https://images.pexels.com/photos/240524/pexels-photo-240524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Asset Management",
      content: `Manage airport ground vehicles efficiently by tracking type, usage and durations assigned to every airplane.`,
      list: [
        { title: "Fuel truck duration" },
        { title: "Cargo carriers duration and count" },
        { title: "Cargo loaders transfer duration" },
        { title: "Pushback truck detection" },
        { title: "Catering truck duration" },
      ],
      img: `https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    // {
    //   title: "Ground Crew",
    //   content: `Manage ground staff, cleaning crew and other human resources with automated people counting and tracking.`,
    //   list: [
    //     { title: "Ground staff monitoring" },
    //     { title: "Fueling and Catering" },
    //   ],
    //   img: `https://images.pexels.com/photos/2599729/pexels-photo-2599729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    // },
  ];

  return (
    <div className="bg-white h-full select-none ">
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
          <div className="flex flex-col text-justify w-full lg:w-6/12">
            <h2 className="md:pl-1 text-3xl  lg:text-5xl  font-medium mb-4">
              Airport Ground Operations
            </h2>

            <div className="text-lg lg:text-xl text-justify text-core-black md:text-justify w-full lg:w-5/6">
              <p>
                Our algorithms generate meaningful insights from camera streams
                to optimize airport ground operations and enhance the customer
                experience. From increasing flight turnaround efficiency to
                reducing delays to increasing tarmac safety, Guise AI is
                transforming the airport experience
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

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image5}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 text-core-black ">
              <h2 className="text-3xl lg:text-4xl  mb-4 lg:mb-10 font-semibold ">
                Experience how Guise AI can assist you
              </h2>

              <div className="text-justify space-y-10">
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Unseen Statistics
                  </h2>
                  <p className="text-lg">
                    Our applications run continuously on the edge, converting
                    visual data into comprehensible statistics that were not
                    possible to record and examine before
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Safety Standards
                  </h2>
                  <p className="text-lg">
                    With constant monitoring provided by Guise AI, stay on top
                    of safety standards that must be maintained for any aviation
                    services
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Resource Utilization
                  </h2>
                  <p className="text-lg">
                    Monitor and visualize fleet count, as your ground staff and
                    vehicles that are assigned for each aircraft servicing
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Service Tracking
                  </h2>
                  <p className="text-lg">
                    Keep a track of entry and exit times, along with durations
                    of all your services provided to an aircraft. Maintain a
                    record of expected versus actual time spent to perform a
                    service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================  Feature #1 ================== */}

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 ">
              <div className="flex justify-center relative ">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 lg:pl-20  ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 ">
                Experience an all-round solution with AI
              </h2>

              <div className="text-lg lg:text-xl space-y-10 text-gray-500 ">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Turnaround Time
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Airlines and Airports suffer huge losses with every second
                    of delay in the operations. While there are several factors
                    that can affect this delay, unmet standards of ground
                    operations are a significant contributing factor.
                  </p>
                </div>

                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Safety
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Running operations with individuals on tarmacs can be a
                    serious task with threat to human lives. Elaborate safety
                    measures are put in place to keep accidents from happening,
                    but the risk of them failing increases with factors like
                    human error and harsh weather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image4}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full lg:w-6/12">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4">
                Safety Operations
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light text-justify">
                  Dealing with aircrafts and running operations with individuals
                  on tarmacs, can pose a serious threat to human lives.
                  Elaborate safety measures are put in place to keep accidents
                  from happening, but the risk of them failing increases with
                  internal factors like human error and external factors like
                  harsh weather. Keeping safety standards in check is a
                  difficult task to maintain given the large volume of flights
                  that are accommodated in a single day.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-1 ">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-80"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1566319280755-c66cbcf93061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-80 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-80 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1585585828599-461a0419b788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-80 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.pexels.com/photos/1928064/pexels-photo-1928064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full lg:w-6/12  text-core-black">
              <h2 className="text-3xl lg:text-4xl  mb-4 lg:mb-10 font-semibold">
                Guise AI can help you...
              </h2>

              <div className="text-justify space-y-10 lg:w-5/6  ">
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Decrease Turnaround Time
                  </h2>
                  <p className="text-lg">
                    Data generated can be used to plan statistically more
                    efficient resource management decisions and flight
                    scheduling
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">
                    Satisfy Customer Needs
                  </h2>
                  <p className="text-lg">
                    A more organized airport leads to lesser delays and more
                    customer satisfaction. With Guise AI you can now deliver the
                    best flight experience
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">Operate Safer</h2>
                  <p className="text-lg">
                    Maintain thorough safety standards thoroughly and get real
                    time alerts if a violation occurs. Operate safely and
                    smartly
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold  mb-2">Scale Better</h2>
                  <p className="text-lg">
                    With automated and accurate statistics, optimize resource
                    utilization and scale your operations to cater to the
                    ever-increasing air travel with the same fixed amount of
                    resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20  lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 ">
              <div className="flex justify-center relative ">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image6}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 lg:pl-20  ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4">
                Customer Satisfaction
              </h2>

              <div className="text-lg lg:text-xl space-y-10 text-gray-500">
                <p className=" font-light text-justify lg:w-5/6">
                  With improved turnaround times and safety operations carried
                  out, customers can be satisfied and assured to have the best
                  experience possible. As quoted by Steve Jobs - “ Get Closer
                  than Ever to your customers. So close, in fact, that you tell
                  them what they need well before they realize it themselves”
                </p>
                 <p className=" font-light text-justify">
                  Guise AI algorithms generate meaningful insights from camera
                  video streams to optimize airport ground operations. The
                  untapped data-driven insights help to reduce delays on the
                  tarmac and improve turnaround efficiency. Cameras installed
                  are monitored continuously to ensure safety procedures are
                  followed and also to detect at-risk behavior.
                </p> 
              </div>
            </div>
          </div>
        </section> */}

        {/*Slider image*/}
        <section className="bg-bookmark-white py-10 mt-10 lg:py-20 lg:mt-20 ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto  px-12 lg:px-2">
            <h1 className="text-3xl  lg:text-5xl font-semibold text-center text-core-black">
              {/* <h1 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-center text-bookmark-blue"> */}
              See Guise AI in action!
            </h1>
          </div>
          <div
            className="lg:container mt-10 shadow-xl"
            title="Slide the bar to see the difference that Guise AI can make">
            <ReactCompareImage
              leftImage={Airport1}
              rightImage={Airport2}
              // leftImageLabel="Before"
              // rightImageLabel="After"
              rightImageCss={{ filter: "brightness(80%)" }}
              leftImageCss={{ filter: "brightness(80%)" }}
              sliderLineColor="#8AEA92"
              sliderLineWidth={4}
            />
          </div>
          <div className="flex items-center justify-center space-x-1 font-light text-color-300 pt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Slide the bar to see the difference that Guise AI can make
            </span>
          </div>
        </section>

        {/* 5 screen with bg-gray opposite of 4 screen*/}
        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40  ">
          <div className="flex flex-wrap items-center pt-8  ">
            <div className="w-full md:w-6/12  md:order-2">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1566319280755-c66cbcf93061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1580285198593-af9f402c676a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-72 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1585585828599-461a0419b788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1581745841536-c10790870219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-6/12   md:order-1 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4  lg:w-5/6">
                Join the revolution now
              </h2>

              <p className=" font-light text-justify lg:w-5/6 text-lg lg:text-xl  space-y-10 text-gray-500">
                Guise AI algorithms generate meaningful insights from camera
                video streams to optimize airport ground operations. The
                untapped data-driven insights help to scale your airport
                operations for the next level of air travel.
              </p>

              <div className="grid  mt-8 sm:grid-cols-2 gap-y-4 lg:w-5/6   ">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Logo detection
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Staff detection and counting
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Safety detection and tracking
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Baggage Detection and tracking
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Vehicle detection, tracking and counting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2  ">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image7}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-8">
                Explore our Suite
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500 lg:w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Logo detection</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Staff detection and count</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      Safety detections and tracking
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      {" "}
                      Vehicle detection, tracking and counting
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      Baggage Detection and tracking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </section>

      <DemoComponent />
    </div>
  );
};
