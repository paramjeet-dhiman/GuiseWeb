import React from "react";
import { Tick } from "../Ticks/Tick";
import Tab from "../TabSlider/TabSlider";

import { ScrollButton } from "../ScrollButton/ScrollBtn";
import { DemoComponent } from "../DemoComponent";

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
    image5: `https://images.unsplash.com/photo-1530758857751-3c6e5147e24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
    image6: `https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image7: `https://images.unsplash.com/photo-1503365194569-df4e1d04cec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`,
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
    <div className="bg-white h-full ">
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
              Airport Ground Operations
            </h2>

            <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500 w-5/6">
              <p>
                Guise Airport Ground Operations assist Airports to maximize
                their asset utilization, catering to the needs of supporting the
                ever-growing flying population. Our application also help
                Airlines to keep flights on time with better resource
                management, reducing the number of delays and cost inefficient
                grounded flights
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

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative ">
                <img
                  className="shadow-xl w-full h-full"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10">
                Experience an all-round solution with AI
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Turnaround Time
                  </h2>
                  <p className="font-light text-justify w-5/6">
                    Airlines and Airports suffer huge losses with every second
                    of delay in the operations. While there are several factors
                    that can affect this delay, unmet standards of ground
                    operations are a significant contributing factor.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Optimized Strategies
                  </h2>
                  <p className="font-light text-justify w-5/6">
                    Planning resources for each flight becomes a challenging
                    task for Airport Authorities in large Airports with shared
                    resources. Airlines that outsource ground operational tasks,
                    rely heavily on the turnaround time of these operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
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
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2  ">
              <div className="flex justify-center relative">
                <img
                  className=" shadow-xl w-full h-full"
                  src={data.image5}
                  // src={`https://images.unsplash.com/photo-1549894595-4698795b38ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10 w-5/6">
                Experience what AI can do for you
              </h2>

              <div className="text-lg lg:text-xl  text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Generate statistics
                  </h2>
                  <p className="font-light text-justify w-5/6">
                    Our applications run continuously on the edge, converting
                    visual data into comprehensible statistics that were not
                    possible to record and examine before.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Plan Smarter
                  </h2>
                  <p className="font-light text-justify w-5/6">
                    Data generated can be used to plan statistically more
                    efficient resource management decisions and flight
                    scheduling. A more organized airport leads to lesser delays
                    and more customer satisfaction.
                  </p>
                </div>
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Operate Safer
                  </h2>
                  <p className="font-light text-justify w-5/6">
                    Maintain safety standards thoroughly and get real time
                    alerts in case of a violation. No more lives need to be lost
                    or endangered. Operate safely and smartly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image6}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full lg:w-6/12">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4">
                Customer Satisfaction
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light text-justify">
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
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
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
        </section>
      </section>

      <DemoComponent />

      <ScrollButton />
    </div>
  );
};
