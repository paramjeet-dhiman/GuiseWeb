import React from "react";
import { Tick } from "../Ticks/Tick";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";

export const DSOverview = () => {
  let data = {
    label: "Digital Signage",
    subText: `Guise AI generates meaningful insights from camera video streams to help you create the greatest impact on your customers and improve operations.`,
    bgImg: `https://images.unsplash.com/photo-1488273478515-f13bd0b73037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80`,
    title: `Lorem Ipsum`,
    image1: `https://images.unsplash.com/photo-1471991750293-5fc0e377b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80`,
    image2: `https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image3: `https://images.unsplash.com/photo-1592959462773-467d73e161b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
    image4: `https://images.unsplash.com/photo-1529218402470-5dec8fea0761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80`,
  };

  const tabContent = [
    {
      title: "Footfall Analysis",
      content: `Quantify and analyze the interaction of your retail outlets with the customers.`,
      list: [
        { title: "People entry count" },
        { title: "People exit count" },
        { title: "Person tracking" },
      ],
      img: `https://images.unsplash.com/photo-1528406745358-6c3112259eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80`,
    },
    {
      title: "Customer Profiling",
      content: `Understand your customers better and target the right audience with AI assisted detections.`,
      list: [{ title: "Customer Age" }, { title: "Customer Gender" }],
      img: `https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Apparel Analysis",
      content: `Update with customers trends and fashion statements, and analyze the information for smarter decisions.`,
      list: [
        { title: "Apparel Detection" },
        { title: "Apparel Type" },
        { title: "Apparel Color" },
      ],
      img: `https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,
    },
    {
      title: "Crowd Management",
      content: `Detect, log and manage crowded areas with the help of constant supervision with Guise AI.`,
      list: [
        { title: "Dwell time" },
        { title: "Wait time" },
        { title: "Crowd counting" },
        { title: "Queue detection and tracking" },
      ],
      img: `https://images.unsplash.com/photo-1471991750293-5fc0e377b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80`,
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
                className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                src={data.image1}
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-6/12">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4">
              {data.label}
            </h2>

            <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500 lg:w-5/6">
              <p className="font-light">
                Boost sales and organize resources through intelligent analytics
                with the help of automated AI systems. Though our applications
                on the edge, we help you get deeper insights in understanding
                your customers and help you make the right decisions at all your
                outlets.
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
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10">
                Analyze and understand your customer base
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-10  text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Footfall
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Having the power to track your customer flow into your
                    stores helps you understand your executive decisions and get
                    instant feedback on business performance.
                  </p>
                </div>

                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Demographics
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Understand your customers better and plan your target sector
                    for efficient investment in marketing and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================  Feature #1 ================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 lg:order-2">
              <div className="flex justify-center relative ">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 lg:order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10">
                Informed decisions
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="text-lg lg:text-xl">
                  <p className="font-light text-justify lg:w-5/6">
                    Guise AI solutions at the edge can make your existing
                    systems smarter, enabling you to analyze your customers all
                    around the globe. With a simple application augmented to
                    your stores, you are now able to generate analytics and
                    visualize your customer trends, making informed executive
                    decisions going forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white  lg:px-40  ">
          <div className="flex flex-col lg:flex-row items-center  justify-between gap-x-10">
            <div className="w-full lg:w-1/2">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className="object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-72 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1488273478515-f13bd0b73037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-20">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4  lg:w-5/6">
                Join the revolution now
              </h2>

              <p className=" font-light text-justify lg:w-5/6 text-lg lg:text-xl  space-y-10 text-gray-500">
                Guise AI algorithms generate meaningful insights from camera
                video streams to optimize airport ground operations. The
                untapped data-driven insights help to scale your airport
                operations for the next level of air travel.
              </p>

              <div className="grid  mt-8 sm:grid-cols-2 gap-y-4  ">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    People count
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Age and gender
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Dwell time
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Crowd Counting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <DemoComponent />
    </div>
  );
};
