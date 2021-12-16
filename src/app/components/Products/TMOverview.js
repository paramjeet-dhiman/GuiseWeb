import React from "react";
import { Tick } from "../Ticks/Tick";
import { ScrollButton } from "../ScrollButton/ScrollBtn";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";

export const TMOverview = () => {
  let data = {
    label: "Traffic Management",
    subText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod doloribus at adipisci earum aspernatur veritatis, ad quia reprehenderit repudiandae laudantium, obcaecati molestiae laboriosam? Blanditiis eligendi facilis pariatur omnis cupiditate quibusdam.`,
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

      {/* ====================== Section #1  ================== */}
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
            <h2 className="text-3xl lg:text-5xl font-medium mb-4 ">
              {data.label}
            </h2>

            <div className="text-lg lg:text-xl space-y-5 text-gray-500 w-5/6">
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

        {/* ====================== Section #2  ================== */}
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
                  className="shadow-xl w-full h-full"
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
              <h2 className="text-3xl lg:text-5xl font-medium mb-8 lg:w-5/6 lg:leading-tight">
                Explore our Suite of solutions for all your problems
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
