import React from "react";
import { Tick } from "../Ticks/Tick";
import { ScrollButton } from "../ScrollButton/ScrollBtn";
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
    image3: `https://images.unsplash.com/photo-1607679314701-efa14aa743d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    image4: `https://images.unsplash.com/photo-1628010055450-21f2a0863767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image5: `https://images.pexels.com/photos/735468/pexels-photo-735468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image6: `https://images.pexels.com/photos/6040783/pexels-photo-6040783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image7: `https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image8: `https://images.unsplash.com/photo-1515614457209-3c7081d62743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image9: `https://images.pexels.com/photos/9800092/pexels-photo-9800092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
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

      {/* ==================== section #1 ========================== */}
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
              Energy Mangement
            </h2>

            <div className="text-lg lg:text-xl space-y-5 text-gray-500 w-5/6">
              <p className="font-light">
                The energy sector, one of our primary focuses, suffers from a
                deficit of analytics for optimal management and faces a series
                of challenges related to supply models, demand, and efficiency.
              </p>
              <p className="font-light">
                However, several energy sectors can benefit in large quantities
                with the use of AI and ML right from the oil and gas segments to
                supporting communication within smart grids, IoT devices, and
                meters. These technologies have proved to help advance power
                management’s performance and expand renewable energy sources.
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
        {/* ==================== section #2 ========================== */}

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
                Predictive analysis in Microgrids
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Sources of Energy
                  </h2>
                  <p className="font-light">
                    A major portion of energy for microgrids is obtained from
                    renewable energy sources such as wind turbines and solar
                    energy panels. Microgrids play an important role in the
                    distribution and stability of electric grids as they not
                    only distribute energy grids into smaller self-sustaining
                    cells but can also act as reservoirs and emergency supplies
                    to the macro-grid.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
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
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Issues with current solutions
                  </h2>
                  <p className="font-light">
                    Traditional forecasting for such problems has been done with
                    skilled mathematicians and analysts studying the varying
                    sources over weeks to find recurring patterns. Even current
                    AI and ML techniques work on the concept of studying a large
                    sum of data and finding useful trends in it. Both these
                    techniques fail as they are predicting trends based on past
                    data and not the incoming data. With data arriving in
                    continuous streams, we need an adaptive application that can
                    amend itself with new incoming data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #3 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image4}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 w-5/6">
                Real Time and Self Adapting predictions
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light w-5/6">
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
                  className="shadow-xl w-full h-full"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full lg:w-6/12 ">
              <h2 className="text-3xl  lg:text-5xl w-5/6 font-medium lg:mb-10">
                Anomaly Detection in Power Grids
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Non-Technical Losses
                  </h2>
                  <p className="font-light w-5/6">
                    Non-technical losses (NTL) are one of the most major
                    problems pertaining to the power grid, and have been for
                    quite a long time. Unlike technical losses which are
                    generally caused during generation and distribution, NTL are
                    anomalies which include installation errors, faulty meters
                    and electricity theft, etc.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Electricity Theft
                  </h2>
                  <p className="font-light w-5/6">
                    A major portion of the NTLs are caused by some mode of
                    electricity theft.Referring to World Bank reports, NTL
                    represents a significant part of the total power losses in
                    both developing and developed nations. A survey from the
                    Northeast Group LLC shows that more than $89.3 billion is
                    lost every year worldwide due to NTL making it a significant
                    challenge to deal with.
                  </p>
                </div>
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Smart Grids
                  </h2>
                  <p className="font-light w-5/6">
                    Thanks to the introduction of IoT, Smart Power grids are
                    quickly rising as a standard norm across the globe. Majority
                    of microgrids and power grids are shifting towards the use
                    of Smart meters and sensors that produce real time data
                    about energy flow and consumption across the grid. But even
                    then we lack a proficient system to identify electricity
                    anomalies and thefts on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #5 ========================== */}
        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image6}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 w-5/6">
                Theft Detection
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light w-5/6">
                  Currently, most work concentrates on analyzing characteristics
                  of electricity consumption to detect NTL among residential
                  customers. With the introduction of Smart Meter data we can
                  analyse and study the consumption patterns thoroughly and on a
                  more frequent basis.
                </p>
                <p className=" font-light w-5/6">
                  Moreover the data can be tallied and analysed at various
                  checkpoints throughout the grid, enabling us to pinpoint the
                  exact stretch or location of leaks. But it is highly possible
                  in real world scenarios that the general trend of consumption
                  changes over time.
                </p>
                <p className=" font-light w-5/6">
                  Guise AI’s Continual Learning AI caters to these industry
                  requirements and performs extremely well in adapting to real
                  time data. With the help of the Outlier Detection devised from
                  our Algorithm we can have real time knowledge updation leading
                  to accurate predictions and germane alerts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #6 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2 order-1 ">
              <div className="flex justify-center relative">
                <img
                  className=" shadow-xl w-full h-full"
                  src={data.image5}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col lg:pl-20 w-full lg:w-6/12 order-2">
              <h2 className="text-3xl  lg:text-4xl font-medium lg:mb-10 w-5/6">
                Network Intrusion Detection for SCADA systems
              </h2>

              <div className="text-lg lg:text-xl  text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    SCADA
                  </h2>
                  <p className="font-light w-5/6 mb-4">
                    Industry 4.0 makes everything in your supply chain “smart” –
                    from smart manufacturing and factories to smart warehousing
                    and logistics. It also interconnects with back-end systems,
                    like enterprise resource planning (ERP), to give companies
                    an unprecedented level of visibility and control. The core
                    of a lot of these major Industry 4.0 systems work with the
                    help of SCADA systems.
                  </p>
                  <div className="font-light w-5/6 mb-4">
                    Supervisory control and data acquisition (SCADA) is a system
                    of software and hardware elements that allows industrial
                    organizations to:
                    <ul className="list-disc lg:pl-10 mt-4 font-light w-5/6 ">
                      <li>
                        Control industrial processes locally or at remote
                        locations
                      </li>
                      <li>Monitor, gather, and process real-time data</li>
                      <li>
                        Directly interact with devices such as sensors, valves,
                        pumps, motors, and more through human-machine interface
                        (HMI) software
                      </li>
                      <li>Record events into a log file</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Security
                  </h2>
                  <p className="font-light w-5/6 mb-4">
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
        </section>

        {/* ==================== section #7 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image9}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 w-5/6">
                Network Intrusion Detection
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p className=" font-light w-5/6">
                  Data over the internet is shared in the form of packets, all
                  these packets are shared in continuous real time streams where
                  each packet, apart from the data being shared, stores metadata
                  of the communication happening (such as sender and receiver IP
                  addresses etc). While the data is strictly prohibited to read
                  as per ethical norms (or is usually encrypted) NIDS performs
                  anomaly detection on the metadata which is open to
                  consumption.
                </p>
                <p className=" font-light w-5/6">
                  With the help of our Continuous Learning AI at GuiseAI we can
                  help the NIDS learn about the network data flow and understand
                  trends and isolated points. The NIDS will aso be able to
                  update itself in real time as per the data flowing through the
                  network, this helps identify the latest of anomalies as per
                  current network trends.
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
                  className="shadow-xl w-full h-full"
                  src={data.image7}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex lg:pl-20 flex-col w-full  lg:w-6/12  ">
              <h2 className="text-3xl lg:text-5xl font-medium lg:mb-10 w-5/6">
                Customer Profile and Load Balancing
              </h2>

              <div className="text-lg lg:pl-2 lg:text-xl space-y-5 text-gray-500">
                <div className=" lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Customer segmentation
                  </h2>
                  <p className="font-light w-5/6">
                    Customer segmentation allows organizations to divide a
                    market into subsets of customers that have, or are perceived
                    to have, common needs, interests, and priorities – then
                    design and implement strategies targeted toward them which
                    can make the difference between an underutilized service and
                    one that resonates with customers.
                  </p>
                </div>

                <div className=" lg:pb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Smart Meter Data
                  </h2>
                  <p className="font-light w-5/6">
                    Due to the increase in the number of smart meter devices, a
                    power grid generates a large amount of data. Analyzing the
                    data can help in understanding the users’ electricity
                    consumption behavior and demands; thus, enabling better
                    service to be provided to them. Performing power load
                    profile clustering is the basis for mining the users’
                    electricity consumption behavior. By examining the
                    complexity, randomness, and uncertainty of the users’
                    electricity consumption behavior, Guise AI proposes
                    Continual Learning method to analyze this behavior
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== section #8 ========================== */}

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 order-2">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image8}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex  flex-col w-full lg:w-6/12 order-1">
              <h2 className="text-3xl lg:text-5xl font-medium mb-8 w-5/6">
                Explore our Suite of Solutions
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 w-5/6 gap-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      Predictive analysis in Microgrids
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      Anomaly Detection in Power Grids
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">
                      Network Intrusion Detection in SCADA systems
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div className="copy-body">Customer Profiling</div>
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
