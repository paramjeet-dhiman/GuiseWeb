import React from "react";
import { Tick } from "../Ticks/Tick";
import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";

export const EMOverview = () => {
  let data = {
    label: "Energy Management",
    subText: `Guise AI with its real time video and data analysis is empowering the energy sector both at the downstream and upstream sectors with real time and efficient predictions.`,
    bgImg: `https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,

    title: `Lorem Ipsum`,
    image1: `https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    image2: `https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`,
    image3: `https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`,
    image4: `https://images.unsplash.com/photo-1628010055450-21f2a0863767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image5: `https://images.unsplash.com/photo-1620415629284-975004d37752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image6: `https://images.pexels.com/photos/6040783/pexels-photo-6040783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image7: `https://images.unsplash.com/photo-1545208942-e1c9c916524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    image8: `https://images.unsplash.com/photo-1515614457209-3c7081d62743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image9: `https://images.pexels.com/photos/9800092/pexels-photo-9800092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  };

  const tabContent = [
    {
      title: "Microgrid",
      content: `Improve resource management and delivery improved efficiency in resource management with AI.`,
      list: [
        { title: "Predictive analysis" },
        { title: "Real time updation with CL" },
        { title: "Energy Conservation and planning" },
      ],
      img: `https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80`,
    },
    {
      title: "Power Management",
      content: `Manage complex power distribution systems and track electricity consumption to reduce theft.`,
      list: [
        { title: "Consumption reports" },
        { title: "Distribution Analytics" },
        { title: "Theft Detection" },
      ],
      img: `https://images.unsplash.com/photo-1515614457209-3c7081d62743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "SCADA Systems",
      content: `Gear up your network security systems with real time AI assisted threat detection.`,
      list: [
        { title: "Anomaly detection" },
        { title: "Real Time data management and Alerts" },
        { title: "Real Time Network Intrusion Detection" },
      ],
      img: `https://images.unsplash.com/photo-1502637098811-fa9526d2b659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`,
    },
    {
      title: "Customer Profiling",
      content: `Understand and analyze your customer consumption patterns for better load balancing and resource optimization.`,
      list: [
        { title: "Consumption Analysis" },
        { title: "Real time Alerts" },
        { title: "Real time self adjusting predictions" },
      ],
      img: `https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`,
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

      {/* ==================== section #1 ========================== */}
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
              Energy Mangement
            </h2>

            <div className="text-lg lg:text-xl text-justify text-core-black md:text-justify w-full lg:w-5/6">
              <p className="">
                The energy sector, one of our primary focuses, suffers from a
                deficit of analytics for optimal management and faces a series
                of challenges related to supply models, demand, and efficiency.
              </p>
              <p className="">
                At Guise AI we aim to provide real time and self-adapting
                analytics that can adjust to the uncertainties in real time and
                provide accurate predictions, leading to efficient resource
                allocation.
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
        {/* ==================== section #2 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image2}
                  alt=""
                  draggable="false"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium  mb-4 lg:mb-10">
                Predictive analysis in Microgrids
              </h2>

              <div className="text-lg lg:text-xl text-justify space-y-10 text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Sources of Energy
                  </h2>
                  <p className="font-light">
                    A major portion of energy for microgrids is obtained from
                    renewable energy sources such as wind turbines and solar
                    energy panels. Microgrids play an important role in the
                    distribution and stability of electric grids.
                  </p>
                </div>

                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Problems faced
                  </h2>
                  <p className="font-light">
                    However, given the limited capacities of local energy
                    generation and storage in such a community, it is extremely
                    challenging for an isolated microgrid to balance the power
                    demand and generation in real-time with dynamically changing
                    energy demand. As a result, clear forecasting is required to
                    obtain accurate details of energy generation.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Issues with current solutions
                  </h2>
                  <p className="font-light">
                    Traditional forecasting were done with the help of skilled
                    mathematicians or even simple ML solutions, studying the
                    varying sources over weeks to find recurring patterns. But
                    their pattern recognition is prone to being outdated
                    extremely quickly and hence presenting with inaccurate
                    predictions over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #3 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40  ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 lg:order-2">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image4}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 lg:order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:w-5/6">
                Real Time and Self Adapting predictions
              </h2>

              <div className="text-lg lg:text-xl text-justify text-gray-500">
                <p className=" font-light lg:w-5/6">
                  With its homegrown Continual Learning Algorithm, we aim to
                  assist in this problem by providing highly scalable and robust
                  real time forecasting applications. When data is ingested and
                  learned from continuously, prediction systems become more
                  incisive and are able to understand the data much more
                  accurately, even through fluctuations in the trend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #4 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
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
            <div className="flex lg:pl-20 flex-col w-full lg:w-6/12 ">
              <h2 className="text-3xl  lg:text-5xl  font-medium mb-4 lg:mb-10">
                Anomaly Detection in Power Grids
              </h2>

              <div className="text-lg lg:text-xl text-justify space-y-10 text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Non-Technical Losses
                  </h2>
                  <p className="font-light ">
                    Non-technical losses (NTL) are one of the most major
                    problems pertaining to the power grid, and have been for
                    quite a long time. Unlike technical losses which are
                    generally caused during generation and distribution, NTL are
                    anomalies which include installation errors, faulty meters
                    and electricity theft, etc.
                  </p>
                </div>

                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Electricity Theft
                  </h2>
                  <p className="font-light ">
                    A major portion of the NTLs are caused by some mode of
                    electricity theft.Referring to World Bank reports, NTL
                    represents a significant part of the total power losses in
                    both developing and developed nations.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Smart Grids
                  </h2>
                  <p className="font-light ">
                    Thanks to the introduction of IoT, Smart Power grids are
                    quickly rising as a standard norm across the globe. Majority
                    of microgrids and power grids are shifting towards the use
                    of Smart meters and sensors that produce real time data
                    about energy flow and consumption across the grid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #5 ========================== */}
        {/* <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0 lg:order-2">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image6}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 lg:order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:w-5/6">
                Theft Detection
              </h2>

              <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500">
                <p className=" font-light lg:w-5/6">
                  Currently, most work concentrates on analyzing characteristics
                  of electricity consumption to detect NTL among residential
                  customers. With the introduction of Smart Meter data we can
                  analyse and study the consumption patterns thoroughly and on a
                  more frequent basis.
                </p>
                <p className=" font-light lg:w-5/6">
                  Moreover the data can be tallied and analysed at various
                  checkpoints throughout the grid, enabling us to pinpoint the
                  exact stretch or location of leaks. But it is highly possible
                  in real world scenarios that the general trend of consumption
                  changes over time.
                </p>
                <p className=" font-light lg:w-5/6">
                  Guise AI’s Continual Learning AI caters to these industry
                  requirements and performs extremely well in adapting to real
                  time data. With the help of the Outlier Detection devised from
                  our Algorithm we can have real time knowledge updation leading
                  to accurate predictions and germane alerts.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* ==================== section #6 ========================== */}
        {/* 
        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2 order-1 ">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image5}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col lg:pl-20 w-full lg:w-6/12 order-2">
              <h2 className="text-3xl  lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                Network Intrusion Detection for SCADA systems
              </h2>

              <div className="text-lg lg:text-xl  text-justify space-y-5   text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Cybersecurity
                  </h2>
                  <p className="font-light lg:w-5/6 ">
                    Cybersecurity is currently one of the main concerns for
                    SCADA ICS operators, as a result of a series of recent
                    successful cyberattacks against several targets, such as
                    electric power substations and distribution grids, sewage
                    processing units or even nuclear power plants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ==================== section #7 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 lg:order-2">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image9}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 lg:order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 lg:w-5/6">
                Network Intrusion Detection for SCADA systems
              </h2>

              <div className="text-lg lg:text-xl text-justify space-y-5 text-gray-500">
                <h2 className="text-xl font-semibold mb-2 text-gray-700">
                  Cybersecurity
                </h2>
                <p className="font-light lg:w-5/6 ">
                  Cybersecurity is currently one of the main concerns for SCADA
                  ICS operators, as a result of a series of recent successful
                  cyberattacks against several targets, such as electric power
                  substations and distribution grids, sewage processing units or
                  even nuclear power plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #7 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 ">
              <div className="flex justify-center relative">
                <img
                  className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
                  src={data.image7}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full  lg:w-6/12  ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:mb-10 ">
                Customer Profile and Load Balancing
              </h2>

              <div className="text-lg  lg:text-xl text-justify space-y-10 text-gray-500">
                <div className="">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Smart Meter Data
                  </h2>
                  <p className="font-light ">
                    Analyzing smart meter data can help in understanding the
                    users electricity consumption behavior and demands; thus,
                    enabling better services to be provided. Guise AI proposes
                    its Continual Learning method to constantly adapt and
                    distinguish your customers based on their consumption
                    habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #8 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40  ">
          <div className="flex flex-wrap items-center pt-8  ">
            <div className="w-full md:w-6/12  md:order-2">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 ">
                  <div
                    className=" object-cover bg-cover bg-center rounded-lg shadow-xl  h-52 lg:h-72"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1515614457209-3c7081d62743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1509389928833-fe62aef36deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div
                    className=" object-cover bg-cover bg-center  shadow-lg rounded-md text-center  hidden lg:block lg:h-72 "
                    style={{
                      background: `url(https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80) center center / cover no-repeat`,
                    }}></div>

                  <div
                    className="p-8 mt-8 hidden lg:block lg:h-72 object-cover bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      background: `url(https://images.unsplash.com/photo-1459802243250-97792e921da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
                    }}></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-6/12   md:order-1 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4  lg:w-5/6">
                Explore our Suite of Solutions
              </h2>

              <p className=" font-light text-justify lg:w-5/6 text-lg lg:text-xl  space-y-10 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat ipsa unde soluta necessitatibus, ut itaque rerum illum
                maxime obcaecati ad? Mollitia autem itaque quisquam eligendi
                recusandae laboriosam magnam rem harum!
              </p>

              <div className="grid  mt-8 sm:grid-cols-2 gap-y-4 lg:w-5/6  ">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Predictive analysis in Microgrids
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Anomaly Detection in Power Grids
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Network Intrusion Detection in SCADA systems
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    Customer Profiling
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
