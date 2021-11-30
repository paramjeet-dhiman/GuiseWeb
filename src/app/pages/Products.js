import React from "react";
import { Link } from "react-router-dom";
import { Tick } from "../components/Ticks/Tick";

import { StayUpToDate } from "./StayUpToDate";

export const Products = () => {
  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-70">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              Products
            </h1>
          </div>
        </div>
      </section>

      {/* =======================  AIRPORT  ======================== */}

      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Product
          </h4> */}
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Airport Ground Operations
          </h1>
          {/* <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.t sit
            necessitatibus obcaecati modi tempore voluptas
          </p> */}
        </div>

        <div className="container  px-10 md:px-20 mt-14">
          {[
            {
              label: "Safety detection",
              img: `https://images.unsplash.com/photo-1582809998712-4fc340132e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
              description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
            },
          ].map((item) => (
            <div
              key={item}
              className=" text-gray-700 hover:text-bookmark-blue   ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                {/* <p className="font-semibold text-sm lg:text-lg text-gray-900 mb-2">
                  {item.label}
                </p> */}
                <div className="text-lg lg:text-xl  flex space-x-2">
                  <p>{item.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-6  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to="/products/overview">
                    <span className="text-sm lg:text-xl font-medium ">
                      Read more
                    </span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================  Digital Signage  ======================== */}
      <section className="bg-bookmark-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Product
          </h4> */}
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Digital Signage
          </h1>
          {/* <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.t sit
            necessitatibus obcaecati modi tempore voluptas
          </p> */}
        </div>

        <div className="container  px-10 md:px-20 mt-14">
          {[
            {
              label: "Safety detection",
              img: `https://images.unsplash.com/photo-1583330357508-1864f8e57785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
              description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
            },
          ].map((item) => (
            <div
              key={item}
              className=" text-gray-700 hover:text-bookmark-blue   ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                {/* <p className="font-semibold text-sm lg:text-lg text-gray-900 mb-2">
                  {item.label}
                </p> */}
                <div className="text-lg lg:text-xl  flex space-x-2">
                  <p>{item.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-6  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to="/products/overview">
                    <span className="text-sm lg:text-xl font-medium ">
                      Read more
                    </span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================  Intelligent Audio  ======================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Product
          </h4> */}
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Intelligent Audio
          </h1>
          {/* <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.t sit
            necessitatibus obcaecati modi tempore voluptas
          </p> */}
        </div>

        <div className="container  px-10 md:px-20 mt-14">
          {[
            {
              label: "Safety detection",
              img: `https://images.unsplash.com/photo-1510279410431-2d0808d69bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
              description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
            },
          ].map((item) => (
            <div
              key={item}
              className=" text-gray-700 hover:text-bookmark-blue   ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                {/* <p className="font-semibold text-sm lg:text-lg text-gray-900 mb-2">
                  {item.label}
                </p> */}
                <div className="text-lg lg:text-xl  flex space-x-2">
                  <p>{item.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-6  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to="/products/overview">
                    <span className="text-sm lg:text-xl font-medium ">
                      Read more
                    </span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================  Traffic Management  ======================== */}
      <section className="bg-bookmark-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Product
          </h4> */}
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Traffic Management
          </h1>
          {/* <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.t sit
            necessitatibus obcaecati modi tempore voluptas
          </p> */}
        </div>

        <div className="container  px-10 md:px-20 mt-14">
          {[
            {
              label: "Safety detection",
              img: `https://images.unsplash.com/photo-1611147533125-9ca445f32036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
              description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
            },
          ].map((item) => (
            <div
              key={item}
              className=" text-gray-700 hover:text-bookmark-blue   ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                {/* <p className="font-semibold text-sm lg:text-lg text-gray-900 mb-2">
                  {item.label}
                </p> */}
                <div className="text-lg lg:text-xl  flex space-x-2">
                  <p>{item.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-6  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to="/products/overview">
                    <span className="text-sm lg:text-xl font-medium ">
                      Read more
                    </span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================  Energy Management  ======================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Product
          </h4> */}
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Energy Management
          </h1>
          {/* <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.t sit
            necessitatibus obcaecati modi tempore voluptas
          </p> */}
        </div>

        <div className="container  px-10 md:px-20 mt-14">
          {[
            {
              label: "Safety detection",
              img: `https://images.unsplash.com/photo-1487875961445-47a00398c267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
              description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
            },
          ].map((item) => (
            <div
              key={item}
              className=" text-gray-700 hover:text-bookmark-blue   ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col items-center mt-10">
                {/* <p className="font-semibold text-sm lg:text-lg text-gray-900 mb-2">
                  {item.label}
                </p> */}
                <div className="text-lg lg:text-xl  flex space-x-2">
                  <p>{item.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-6  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to="/products/overview">
                    <span className="text-sm lg:text-xl font-medium ">
                      Read more
                    </span>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-b border-gray-200" />
      <StayUpToDate />
    </div>
  );
};
