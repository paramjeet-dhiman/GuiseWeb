import React from "react";
import { Link } from "react-router-dom";
import { Tick } from "../Ticks/Tick";

export const ProductsDescribe = () => {
  let data = {
    bgImg: `https://images.pexels.com/photos/240524/pexels-photo-240524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    label: "Airport Ground Operations Software",

    subText: `The ability of Airports, Airlines, and Aviation Authorities to
    implement high-impact strategies is critical in order to increase
    customer satisfaction and operational efficiency.`,

    title: `Lorem Ipsum`,

    image1: `https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    image2: `https://images.unsplash.com/photo-1578434972378-e3c393d983db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`,
    image3: `https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image4: `https://images.pexels.com/photos/4213043/pexels-photo-4213043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
    image5: `https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    image6: `https://images.pexels.com/photos/221258/pexels-photo-221258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem, ratione mollitia accusamus tempore sequi debitis minima error molestiae veritatis architecto doloribus culpa aperiam ipsum soluta deleniti dignissimos recusandae ex?`,

    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi ipsum rerum provident placeat officiis eius iure alias soluta debitis!`,
  };

  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(${data.bgImg}) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              {data.label}
            </h1>
            <p className="text-bookmark-white">{data.subText}</p>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-20">
        <div className="px-10 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-16 ">
          <div className="">
            <h2 className="text-3xl lg:text-5xl font-medium w-3/4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
          </div>

          <div className="text-lg lg:text-xl font-light space-y-5">
            <p>
              When you remove a steering wheel, pedals, a rearview mirror, and
              more, you get something new — an experience purely designed around
              the rider. That means a spacious cabin and an on-demand,
              consistent experience where you can relax, work, or connect.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              numquam esse quam corrupti officiis, veritatis fugiat omnis
              blanditiis voluptatem voluptatibus exercitationem quod accusantium
              earum! Repudiandae laudantium reprehenderit eius vitae quis.
            </p>
          </div>
        </div>
      </section> */}

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
              {data.title}
            </h2>

            <div className="text-lg lg:text-xl space-y-5 text-gray-500">
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-28">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Features
          </h4>
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            We make it Easier for you
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Here's how these features help you
          </p>
        </div>

        {/* ======================  Feature #1 ================== */}

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
                Mitigates risks and responds to security threats
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati fugit architecto, veritatis ipsa corporis,
                    excepturi illo iure molestias ut voluptate sit!
                  </p>
                </div>
                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati.
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2 ">
              <div className="flex justify-center relative">
                <img
                  className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
                  src={data.image3}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12">
              <h2 className="text-3xl lg:text-5xl font-medium mb-8">
                {data.title}
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">
                      Monitor and manage airport video surveillances
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">Parking and curbside management</div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">
                      Manage access to restricted areas
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">Analyze flow of passengers</div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">Boaring Route Management</div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0 flex items-center">
                      <Tick />
                    </div>
                    <div class="copy-body">Spot and track intrusions</div>
                  </div>
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
            <div className="flex flex-col w-full lg:w-6/12">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4">
                {data.title}
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <p>{data.desc1}</p>
                <p>{data.desc2}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:py-20 lg:px-40 gap-16 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-6/12 md:m-0 md:order-2 ">
              <div className="flex justify-center relative">
                <img
                  className=" shadow-xl w-full h-full"
                  src={`https://images.unsplash.com/photo-1549894595-4698795b38ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-6/12">
              <h2 className="text-3xl  lg:text-4xl font-medium lg:mb-10">
                Voluptate autem eaque iste quis vero aperiam odit commodi!
                Laudantium, porro vita?
              </h2>

              <div className="text-lg lg:text-xl  text-gray-500">
                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati fugit architecto, veritatis ipsa corporis,
                    excepturi illo iure molestias ut voluptate sit!
                  </p>
                </div>
                <div className="lg:pl-2 lg:pb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="py-10 lg:py-20 container px-10 md:px-0">
          <div className="grid lg:grid-cols-2  gap-16 ">
            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Safety Detection
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                porro ducimus ipsam veritatis quasi cupiditate ut recusandae
                doloremque accusamus iste nemo ullam repudiandae voluptatibus,
                ex labore quisquam nam! Quisquam, iure!
              </div>
            </div>
            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Vehicle Detection
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati blanditiis rem illum reprehenderit sed suscipit
                  impedit facilis minus aut numquam maxime quia id veniam
                  tenetur cumque incidunt quos, ipsam voluptate.
                </p>
              </div>
            </div>

            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Object Tracking
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati blanditiis rem illum reprehenderit sed suscipit
                  impedit facilis minus aut numquam maxime quia id veniam
                  tenetur cumque incidunt quos, ipsam voluptate.
                </p>
              </div>
            </div>

            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Baggage Detection
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati blanditiis rem illum reprehenderit sed suscipit
                  impedit facilis minus aut numquam maxime quia id veniam
                  tenetur cumque incidunt quos, ipsam voluptate.
                </p>
              </div>
            </div>
            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Logo detection
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati blanditiis rem illum reprehenderit sed suscipit
                  impedit facilis minus aut numquam maxime quia id veniam
                  tenetur cumque incidunt quos, ipsam voluptate.
                </p>
              </div>
            </div>
            <div className="bg-bookmark-white px-5 py-10 shadow-lg hover:shadow-xl">
              <h3 className="text-xl w-full lg:text-3xl uppercase font-bold text-bookmark-blue mb-4">
                Upcoming Soon
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati blanditiis rem illum reprehenderit sed suscipit
                  impedit facilis minus aut numquam maxime quia id veniam
                  tenetur cumque incidunt quos, ipsam voluptate.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* 
      <section className="flex flex-col lg:flex-row px-10 py-10  lg:mt-20 bg-white lg:py-20 lg:px-40 gap-16 ">
        <div className="flex mx-auto flex-col lg:flex-row items-center  justify-around gap-10">
          <div className="flex justify-center">
            <img
              className="relative z-10 rounded-md self-start shadow-xl w-full h-full"
              src={data.image4}
              alt=""
              draggable="false"
            />
          </div>

          <div className="md:pr-12 mt-10 md:mt-0 ">
            <h3 className="text-3xl font-semibold">Advantages</h3>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Optimize ground operations efficiency
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Turnaround time reduction (increase throughput)
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Maximize asset utilization
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Increase passenger flow
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Improve customer satisfaction
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Accurate data to aid with safety audits
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <h4 className="text-gray-800 font-medium">
                      Better real-time data to help with workforce training
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="bg-bookmark-white py-10 lg:py-36  ">
        <div className="container px-10 lg:px-10">
          <h1 className="text-xl font-medium lg:text-5xl text-core-black uppercase lg:font-black lg:px-4 text-center ">
            See what Guise can do for you
          </h1>
          <div className="flex justify-center items-center mt-10 ">
            <a
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2 py-1"
              href="/demo">
              <span className="text-base lg:text-xl font-medium">
                Book a DEMO Now
              </span>
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M0 1.00586H11V12.0059"
                  stroke="currentColor"
                  strokeWidth="2"></path>
                <line
                  x1="10.857"
                  y1="1.15437"
                  x2="0.745382"
                  y2="11.266"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="2.61313"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
