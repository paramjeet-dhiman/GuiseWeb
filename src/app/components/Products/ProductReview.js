import React from "react";
import ReactCompareImage from "react-compare-image";
import Tab from "../TabSlider/TabSlider";
import { Tick } from "../Ticks/Tick";
import { ScrollButton } from "../ScrollButton/ScrollBtn";
import { DemoComponent } from "../DemoComponent";

export const ProductReview = () => {
  let data = {
    label: "Traffic Management",
    subText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod doloribus at adipisci earum aspernatur veritatis, ad quia reprehenderit repudiandae laudantium`,
    bgImg: `https://images.unsplash.com/photo-1488134684157-fea2d81a5ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`,

    title: `Lorem Ipsum`,

    image1: `https://images.unsplash.com/photo-1535015585980-7cb6b4de8f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    image2: `https://images.pexels.com/photos/297927/pexels-photo-297927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image3: `https://images.unsplash.com/photo-1594028411108-96a5b0302a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image4: `https://images.unsplash.com/photo-1499351094445-76ef13077fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80`,
    image5: `https://images.unsplash.com/photo-1596188431116-f858853f2be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  };

  const tabContent = [
    {
      title: "Operations Tracking",
      content: `Record the following operational events and track them automatically with the Guise AI airport Ground Operations Suite.`,
      list: [
        { title: "Aircraft check in and check out time" },
        { title: "Baggage Offload and Onload time" },
        { title: "Footbridge attach and detach time" },
        { title: "Aircraft Logo Detection" },
      ],
      img: `https://images.unsplash.com/photo-1482351437900-d57cf1b9cd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Safety Checking",
      content: `Maintain safety standards and minimize violations with all time surveillance and alerts.`,
      list: [
        { title: "Safety Chokes detection" },
        { title: "Safety jacket detection" },
        { title: "Parking Lines detection" },
      ],
      img: `https://images.unsplash.com/photo-1541707423647-46d6213e390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    },
    {
      title: "Staff Management",
      content: `Manage, count, and record the duration of ground staff, cleaning crew and other members with automated people counting and tracking.`,
      list: [
        { title: "Ground staff monitoring" },
        { title: "Cleaning crew detection and count" },
      ],
      img: `https://images.pexels.com/photos/2599729/pexels-photo-2599729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Resource Management",
      content: `Manage airport resources efficiently by tracking usage and durations assigned to every airplane.`,
      list: [
        { title: "Vehicle detection and tracking" },
        { title: "Vehicle counting" },
      ],
      img: `https://images.unsplash.com/photo-1515941719567-48bbfc9163f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
    },
    {
      title: "Baggage Management",
      content: `Manage and track baggage either in the airport for safety purposes or for operational management during segregation, unloading or offloading.`,
      list: [
        { title: "Baggage detection" },
        { title: "Baggage size and color" },
        { title: "Baggage counting" },
        { title: "Baggage dwell time" },
      ],
      img: `https://images.unsplash.com/photo-1569512850669-7baa648e82d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Passenger Management",
      content: `Manage passengers through long queues and boarding processes at the airport with automated analytics through computer vision.`,
      list: [
        { title: "Queue wait time" },
        { title: "Flight passenger counting" },
        { title: "Dwell time at airport locations" },
      ],
      img: `https://images.unsplash.com/photo-1581745841536-c10790870219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
  ];
  return (
    <div className="bg-white h-full  select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          background: `url(${data.bgImg}) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0">
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
                className="relative z-10  self-start rounded-md shadow-xl w-full h-full"
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

            <div className="text-lg lg:text-xl space-y-5  text-gray-500 w-5/6">
              <p>
                Guise Intelligent traffic provides solutions for accurate and
                comprehensive analyses of city traffic by comprehending visual
                data through edge based AI assistance. The ability to plan a
                more efficient and safe traffic management system leads to a
                smarter city.
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
            Here's glimpse how these features help you
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
        {/* ====================== Section #2  ================== */}
        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl  rounded-md w-full h-full"
                  src={data.image2}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10">
                Build a Smarter City with the help of AI
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Understand traffic
                  </h2>
                  <p className="font-light">
                    Have an automated system to help understand your city’s
                    movement better. Get accurate numbers on vehicle density and
                    location and systematically make decisions.
                  </p>
                </div>
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Be prepared
                  </h2>
                  <p className="font-light">
                    With analyzed data, prepare for special cases well in
                    advance with efficient roadblocks and route management.
                    Preparing for the worst has been easier.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Maintain Safer roads
                  </h2>
                  <p className="font-light">
                    Violating road safety standards have led to countless
                    accidents every year that have cost human lives. With an
                    automated system, receive real time alerts and records to
                    prevent harsh outcomes and penalize the responsible party.
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
                  className="shadow-xl rounded-md w-full h-full"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10">
                Real time traffic analysis
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className=" lg:pb-10">
                  <p className="font-light w-5/6">
                    Real time streaming will help understand traffic trends
                    across the city much better. Junction signals need not be
                    statically programmed and can be updated in real time as per
                    the seen traffic. Vehicle density and analysis as per the
                    day and time can be used to plan efficient routes and manage
                    crowding. Uncertainty caused by special cases such as
                    roadblocks can be diffused in real time with alternate route
                    planning and predictions as per the density.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 screen with bg-gray opposite of 4 screen*/}
        <section className="bg-bookmark-white py-10 mt-10 lg:py-20  lg:px-40  ">
          <div className="flex flex-wrap items-center pt-8">
            <div className="w-full md:w-6/12  ">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className=" shadow-lg rounded-md text-center h-52 lg:h-56"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1597762333765-cbcd63dd8acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="  shadow-lg p-8 mt-8 rounded-md text-center hidden lg:block lg:h-56"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1524567492592-cee28084482e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className=" shadow-lg p-8 mt-8 rounded-md text-center hidden lg:block lg:h-56"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1503025768915-494859bd53b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" shadow-lg rounded-md text-center  hidden lg:block lg:h-56 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1515678845848-b037361130e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="  shadow-lg p-8 mt-8 rounded-md text-center hidden lg:block lg:h-56"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1531270144996-257a6b16bea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="  shadow-lg p-8 mt-8 rounded-md text-center hidden lg:block lg:h-56"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1596188431116-f858853f2be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-16">
              <h3 className="text-2xl font-medium tracking-wide text-gray-800 md:text-4xl   lg:text-5xl  mb-2  leading-normal">
                Lorem ipsum dolor
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-8 text-blueGray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit possimus iure adipisci iste accusamus obcaecati tempora
                eligendi, tenetur ipsam molestiae, eius voluptatibus cum sint
                pariatur autem dicta, illo sequi quis?
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="copy-body">Vehicle Detection</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="copy-body">Vehicle make and build</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="copy-body">Road Violation detection</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="copy-body">License Plate Recognition</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="copy-body">Vehicle Count</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
            {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Features
          </h4> */}
            <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
              Let's see in action
            </h1>
            <p className="text-gray-800 font-medium text-lg lg:text-xl pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="lg:container mt-10 rounded-md">
            <ReactCompareImage
              className="rounded-md"
              leftImage="https://images.pexels.com/photos/5696661/pexels-photo-5696661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              rightImage="https://i.postimg.cc/NFKCQWTq/Group-69.png"
            />
          </div>
        </section>

        {/* ====================== Section #4  ================== */}
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
                Violation detections
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light">
                  Road safety rules need to be maintained in order to avoid
                  fatal repercussions. Violations such as breaking the signal or
                  no helmets for two-wheelers and triple riding can be tracked
                  easily with the help of constant monitoring. Driving on the
                  wrong side of the street or violating speed norms can also be
                  easily detected and tracked in real time. Maintaining records
                  of repeat offenders and rewarding them with appropriate
                  decisions can help clear the roads of such unwanted potential
                  risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== Section #5  ================== */}
        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2  ">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image5}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 ">
              <h2 className=" lg:text-5xl  mb-8 lg:w-5/6  text-2xl font-medium tracking-wide text-gray-800 md:text-4xl">
                Explore our Suite
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500 lg:w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Vehicle Detection</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Vehicle make and build</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Road Violation detection</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">License Plate Recognition</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Vehicle Count</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ====================== DEMO BUTTON  ================== */}
      <DemoComponent />
      <ScrollButton />
    </div>
  );
};
