import React from "react";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";

export const DSOverview = () => {
  let data = {
    label: "Digital Signage",
    subText: `Guise AI generates meaningful insights from camera video streams to help you create the greatest impact on your customers`,
    bgImg: `https://images.unsplash.com/photo-1488273478515-f13bd0b73037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80`,
    title: `Lorem Ipsum`,
    image1: `https://images.unsplash.com/photo-1471991750293-5fc0e377b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80`,
    image2: `https://images.unsplash.com/photo-1554307967-24ebd6cf5b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80`,
    image3: `https://images.unsplash.com/photo-1592959462773-467d73e161b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
    image4: `https://images.unsplash.com/photo-1552519837-47846308a0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80`,
  };

  const tabContent = [
    {
      title: "Footfall",
      content: `Quantify the interaction of your retail outlets with the customers with constant supervision`,
      list: [
        { title: "People entry and exit count" },
        { title: "Person detection" },
        { title: "Crowd counting" },
      ],
      img: `https://images.unsplash.com/photo-1528406745358-6c3112259eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80`,
    },
    {
      title: "Demographics",
      content: `Understand your customers better and target the right audience with AI assisted detections`,
      list: [{ title: "Age" }, { title: "Gender" }],
      img: `https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Apparel",
      content: `Update with customers trends and fashion statements, and access such untapped information for smarter decisions`,
      list: [
        { title: "Apparel detection" },
        { title: "Apparel color" },
        { title: "Logo detection" },
      ],
      img: `https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,
    },
    {
      title: "Drive-through",
      content: `Extend your supervision with metrics on vehicles as well, with Guise AI's automated monitoring`,
      list: [
        { title: "Vehicle wait time" },
        { title: "Vehicle detection" },
        { title: "Vehicle count" },
        { title: "Vehicle logo detection" },
      ],
      img: `https://images.unsplash.com/photo-1564784669814-7bf9b1f587cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Engagement",
      content: `Detect, log and manage crowded areas with the help of constant supervision provide by Guise AI`,
      list: [
        { title: "Dwell time" },
        { title: "Wait time" },
        { title: "Custom location tracking" },
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
              {/* <p className="font-light">
                Boost sales and organize resources through intelligent analytics
                with the help of automated AI systems. Though our applications
                on the edge, we help you get deeper insights in understanding
                your customers and help you make the right decisions at all your
                outlets.
              </p>
              <p className="font-light">
                Our applications on the edge help you gain deeper insights into
                your customers and make the most impactful decisions at your
                physical locations.
              </p>
              <p className="font-light">
                With a simple application augmented to your stores, you can now
                generate analytics and visualize your customer trends, making
                informed executive decisions going forward.
              </p>  */}
              <p className="font-light">
                Get a deeper insight of how your brand engages with its
                customers with a never seen before approach that utilizes
                untapped data resources. With Guise AI's innovate solutions, we
                help you make informed decisions and understand how your
                customers interact with your products and services
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
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12  ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:leading-tight lg:mb-10 ">
                Customer engagement like never before
              </h2>

              <div className="text-lg  lg:text-lg space-y-5  text-gray-500">
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Understand your brand engagement
                  </h2>
                  <p className="font-light text-justify">
                    Analyze customer flows at prime retail locations that helps
                    you get instant feedback on customer engagement
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Target relevant sectors
                  </h2>
                  <p className="font-light text-justify">
                    Get deeper insights about your customers and plan your
                    target sector for efficient investment in marketing and
                    operations
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Accumulate interaction metrics
                  </h2>
                  <p className="font-light text-justify">
                    Accurate and untapped data on volumes and numbers help you
                    understand what margin of customers you are able to retain
                    through your marketing
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Make Informed decisions
                  </h2>
                  <p className="font-light text-justify">
                    Guise AI solutions at the edge can make your existing
                    systems smarter, enabling you to make informed executive
                    decisions going forward
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
            <div className="flex flex-col w-full lg:w-6/12 lg:order-1 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                Guise AI can help you…
              </h2>

              <div className="text-lg  lg:text-lg space-y-5  text-gray-500">
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Visualize your customer behavior
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    With Guise AI, you can now possess the ability and use it to
                    analyze and visualize your customer's behavior
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Connect to your customers with instant feedback
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Guise AI tech, helps you make the right choices on what you
                    display and get instant feedback
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Improve your marketing efforts and user experience
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    With Guise AI, you can study accurately collected metrics to
                    enhance marketing efforts and user experience
                  </p>
                </div>
                <div className="">
                  <h2 className="text-2xl font-medium mb-2 text-gray-700">
                    Compare your efforts with accurate metrics
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Understand how product placement and location can be
                    improved through data provided by Guise AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white  lg:px-40  ">
          <div className="flex flex-col lg:flex-row items-center  justify-between gap-x-10">
            <div className="w-full lg:w-1/2">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className="object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                    style={{
                      background: `url(https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.pexels.com/photos/4480984/pexels-photo-4480984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center center / cover no-repeat`,
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
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                Guise AI can help you…
              </h2>

              <div className="text-lg  lg:text-xl space-y-5  text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Visualize
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Ever thought about what the possession of an ability to
                    retain customer-engagement data could do to your business?
                    With Guise AI, you can now possess this ability and use it
                    to analyze and visualize your customer's behavior.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Connect
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    With such untapped data at your hand, connect with your
                    customers like never before. Guise AI tech, helps you make
                    the right choices on what you display and get instant
                    feedback.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Improve
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Not sure why you are not receiving the recognition you
                    deserve? With Guise AI, you can study accurately collected
                    metrics to enhance marketing efforts and user experience.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Compare
                  </h2>
                  <p className="font-light text-justify lg:w-5/6">
                    Compare what marketing efforts are making an impression on
                    your customers the most. Understand how product placement
                    and location can be improved through data provided by Guise
                    AI.
                  </p>
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
