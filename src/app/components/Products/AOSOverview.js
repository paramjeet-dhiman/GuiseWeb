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
    customer satisfaction and operational efficiency.`,

    title: `Lorem Ipsum`,

    image1: `https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image2: `https://images.unsplash.com/photo-1578434972378-e3c393d983db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`,
    image3: `https://images.unsplash.com/photo-1565108404384-2919e47c07c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    image4: `https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image5: `https://images.unsplash.com/photo-1578332243515-42f819ba0784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80`,
    image6: `https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image7: `https://images.unsplash.com/photo-1503365194569-df4e1d04cec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`,
  };

  const tabContent = [
    {
      title: "Operations Tracking",
      content: `Record the following operational events and track them automatically with the Guise AI Airport Ground Operations.`,
      list: [
        { title: "Airline detection" },
        { title: "Aircraft arrival and departure time" },
        { title: "Cargo Offload and Onload duration" },
        { title: "JetBridge connection duration" },
      ],
      img: `https://images.unsplash.com/photo-1482351437900-d57cf1b9cd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Safety Monitoring",
      content: `Maintain safety standards and minimize violations with constant surveillance and alerts.`,
      list: [
        { title: "Safety cones" },
        { title: "Wheel chocks detection" },
        { title: "Safety jacket/vest detection" },
        { title: "Violation Alerts" },
        // { title: "Parking Lines detection" },
      ],
      img: `https://images.unsplash.com/photo-1541707423647-46d6213e390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    },
    {
      title: "Ground Crew",
      content: `Manage, count, and record the duration of ground crew and other staff members with automated people counting and tracking.`,
      list: [
        { title: "Ground staff monitoring" },
        { title: "Fueling and Catering" },
      ],
      img: `https://images.pexels.com/photos/2599729/pexels-photo-2599729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Vehicle Management",
      content: `Manage airport resources efficiently by tracking usage and durations assigned to every airplane.`,
      list: [
        { title: "Fleet count" },
        { title: "Detection and tracking" },
        { title: "Fuel Truck/ Cargo truck/ Belt trucks/ Pushback truck" },
      ],
      img: `https://images.unsplash.com/photo-1515941719567-48bbfc9163f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
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
            <h2 className="text-3xl  lg:text-5xl font-medium mb-4">
              Airport Ground Operations
            </h2>

            <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500 lg:w-5/6">
              <p>
                Our Airport Ground Operations software provides airport
                operators the means to maximize their asset utilization. From
                increasing flight turnaround efficiency to reducing delays to
                increasing tarmac safety, Guise AI is transforming the airport
                experience.
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
            Here's how we help you enhance customer experience and boost ROI
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

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
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
                Scale Operations
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Airports
                  </h2>
                  <p className="font-light text-justify">
                    With every passing year, statistics show that the number of
                    people utilizing flight services have been increasing
                    exponentially, while the number and size of Airports remain
                    constant. Airports are resource constrained services which
                    can provide only for a limited number of flights in a day.
                    But numbers show that most Airports fail to maximize asset
                    utilization, hence do not live up to the expected number of
                    flights serviced by a significant margin. This in turn
                    restricts the number of flights an Airline can operate in a
                    single day, which leads to increased costs for flight
                    travel. There is a clear bridge between demand and supply
                    which can be resolved with proper resource management.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Airlines
                  </h2>
                  <p className="font-light text-justify">
                    The costing strategy of airlines includes keeping their
                    flights in transit at all possible times. Primarily because
                    the aircrafts are usually leased and in such a scenario time
                    is money. But also because idle flights do not bring in
                    money, but instead incur heavy parking charges at Airports.
                    Careful planning and scheduling of flights are done to make
                    sure they avoid having to stay at an airport for too long.
                    But it is very commonly seen that flights are always delayed
                    due to many reasons, with one being poor resource management
                    at Airports. These delays lead to shifts in the schedule,
                    causing the flights to remain grounded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2  ">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image5}
                  // src={`https://images.unsplash.com/photo-1549894595-4698795b38ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                Experience what our AI can do for you
              </h2>

              <div className="text-lg lg:text-xl space-y-10  text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Generate statistics
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Our applications run continuously on the edge, converting
                    visual data into actionable statistics unavailable prior to
                    our technology.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Plan Smarter
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    The data generated can be used to plan statistically more
                    effective resource management decisions and flight
                    scheduling. Efficient ground operations lead to greater
                    customer satisfaction.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Operate Safer
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Maintain thorough safety standards thoroughly and get real
                    time alerts if a violation occurs. Operate safely and
                    smartly.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Scale Better
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Use automated and accurate statistics to optimize resource
                    utilization and scale your operations to capitalize on the
                    ever-increasing growth in air travel.
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
            <h1 className="text-3xl  lg:text-5xl font-semibold text-center text-bookmark-blue">
              {/* <h1 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-center text-bookmark-blue"> */}
              See Guise AI in action!
            </h1>
          </div>
          <div className="lg:container mt-10 shadow-xl">
            <ReactCompareImage
              leftImage={Airport1}
              rightImage={Airport2}
              leftImageLabel="Before"
              rightImageLabel="After"
              rightImageCss={{ filter: "brightness(80%)" }}
              leftImageCss={{ filter: "brightness(80%)" }}
              className=""
            />
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
