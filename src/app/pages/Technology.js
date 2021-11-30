import React from "react";
import { Link } from "react-router-dom";
import { StayUpToDate } from "./StayUpToDate";

export const Technology = () => {
  return (
    <div className="pt-10 h-full select-none">
      {/* ========================== HERO Section ====================  */}
      <section className="relative h-screen grid place-content-center bg-bookmark-blue  ">
        <div className="px-10 md:px-28 flex flex-col-reverse lg:flex-row items-center  lg:mt-20">
          <div className="flex ">
            <div className="flex items-center text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full ">
                <p className="font-medium text-sm lg:text-lg text-social-instagram mb-2">
                  Technology
                </p>
                <h2 className="text-5xl font-semibold upper text-gray-100 mb-2 md:text-7xl">
                  Transforming Technology
                </h2>
                <p className="text-gray-400 lg:w-3/4 text-sm md:text-lg text-center lg:text-left mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis commodi cum cupiditate ducimus, fugit harum id
                  necessitatibus odio quam quasi, quibusdam rem tempora
                  voluptates. Cumque debitis dignissimos id quam vel!
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-6 py-5">
                  <Link to="/demo">
                    <button className="btn border text-white text-sm md:text-xl font-semibold shadow-md hover:shadow-xl transform hover:scale-105  hover:bg-core-black transition-all ease-in-out duration-500">
                      Book a Demo
                    </button>
                  </Link>
                  {/* <button
                    className="btn bg-gray-300 text-gray-900 text-sm md:text-lg font-semibold rounded hover:bg-gray-400"
                    href="#">
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
            <div
              className="hidden lg:block lg:w-1/2 "
              style={{
                height: "750px",
              }}>
              <div
                className="h-full object-cover "
                style={{
                  height: "100%",
                  width: "100%",
                  background: ` url("https://images.pexels.com/photos/461082/pexels-photo-461082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center center / cover no-repeat`,
                }}>
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== Continuous Learning ======================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Continuous Learning
          </h1>
          <p className="text-gray-800 font-medium  lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">10x</h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-1 text-3xl lg:text-5xl font-semibold">
                Smarter
              </h2>
              <p className="mb-8 font-medium text-gray-400">AI Application</p>
              <p className="w-5/6 text-center font-light">
                Nihil numquam iure tempora, explicabo ipsam animi, non corrupti
                dolore quas accusamus quia magni itaque optio
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">
                Balance
              </h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                Accuracy and Size
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== Knowledge Distillation ======================== */}

      <section className="bg-bookmark-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Knowledge Distillation
          </h1>
          <p className="text-gray-800 font-medium  lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80  bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">10x</h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96  bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-1 text-3xl lg:text-5xl font-semibold">
                Smarter
              </h2>
              <p className="mb-8 font-medium text-gray-400">AI Application</p>
              <p className="w-5/6 text-center font-light">
                Nihil numquam iure tempora, explicabo ipsam animi, non corrupti
                dolore quas accusamus quia magni itaque optio
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">
                Balance
              </h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                Accuracy and Size
              </p>
            </div>
          </div>
        </div>

        <section className=" py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== Neural Architecture Search ======================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Neural Architecture Search
          </h1>
          <p className="text-gray-800 font-medium  lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">10x</h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-1 text-3xl lg:text-5xl font-semibold">
                Smarter
              </h2>
              <p className="mb-8 font-medium text-gray-400">AI Application</p>
              <p className="w-5/6 text-center font-light">
                Nihil numquam iure tempora, explicabo ipsam animi, non corrupti
                dolore quas accusamus quia magni itaque optio
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">
                Balance
              </h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                Accuracy and Size
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* =================================== Quantization ============================ */}

      <section className="bg-bookmark-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Quantization
          </h1>
          <p className="text-gray-800 font-medium  lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80  bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">10x</h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96  bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-1 text-3xl lg:text-5xl font-semibold">
                Smarter
              </h2>
              <p className="mb-8 font-medium text-gray-400">AI Application</p>
              <p className="w-5/6 text-center font-light">
                Nihil numquam iure tempora, explicabo ipsam animi, non corrupti
                dolore quas accusamus quia magni itaque optio
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   bg-white text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">
                Balance
              </h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                Accuracy and Size
              </p>
            </div>
          </div>
        </div>

        <section className=" py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== hyper dimensional computing ======================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Hyper Dimensional Computing
          </h1>
          <p className="text-gray-800 font-medium  lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 class="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">10x</h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96  bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-1 text-3xl lg:text-5xl font-semibold">
                Smarter
              </h2>
              <p className="mb-8 font-medium text-gray-400">AI Application</p>
              <p className="w-5/6 text-center font-light">
                Nihil numquam iure tempora, explicabo ipsam animi, non corrupti
                dolore quas accusamus quia magni itaque optio
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   bg-bookmark-offWhite text-core-black hoverTransition shadow-xl transform lg:scale-110 hover:scale-105 flex flex-col justify-center items-center border">
              <h2 className="mb-2 text-3xl lg:text-5xl font-semibold">
                Balance
              </h2>
              <p className="mb-8 text-xl font-medium text-gray-400">
                Accuracy and Size
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== Carrers ======================== */}

      <section className="flex flex-col lg:flex-row px-10 py-10 bg-bookmark-smoke lg:py-20 lg:px-40 gap-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" w-full lg:w-7/12 mb-10 md:m-0 md:order-2">
            <div className="flex justify-center relative">
              <img
                className="relative z-10 rounded-md self-start w-full h-full"
                src="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-4/12">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4">Careers </h2>
            <h3 className="text-lg lg:text-3xl text-gray-700 mb-6">
              We are looking for exceptionally talented people to join our team
            </h3>
            <div className="text-lg lg:text-xl  text-gray-500">
              <p>
                Imagine yourself contributing to the development of one of the
                most dynamic FinTech companies in the world.This innovative
                company is Guise.
              </p>{" "}
            </div>
            <Link to="/careers/jobs">
              <button
                className="btn-small text-lg lg:text-xl bg-gray-900 hover:bg-gray-700 text-white font-semibold  mt-8"
                target="_blank"
                rel="noopener noreferer">
                View all openings
              </button>
            </Link>
          </div>
        </div>
      </section>
      <StayUpToDate />
    </div>
  );
};
