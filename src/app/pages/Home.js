import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactCompareImage from "react-compare-image";
import { HorizontalScroll } from "../components/HorizontalScroll/HorizontalScroll";
import { ReactComponent as UndrawHello } from "../../assets/svg/undraw_hello.svg";
import { ReactComponent as UndrawProgrammer } from "../../assets/svg/undraw_programmer.svg";
import { ReactComponent as UndrawLostOnline } from "../../assets/svg/undraw_lost_online.svg";
import { Partners } from "../components/Partners/Partners";
// import { ReactComponent as UndrawPolaroid } from "../../assets/svg/undraw_polaroid.svg";

export function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();

  return (
    <div className="">
      {/*================= HERO  screen Navbar Background h-screen middle text headline with subheading ===================*/}
      <section className="relative h-screen grid place-content-center bg-white  ">
        <div className=" md:hidden flex justify-center mb-10 ">
          <UndrawHello className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
        </div>
        <div className="px-10 md:px-28 flex flex-col-reverse lg:flex-row items-center  lg:mt-20">
          <div className="flex ">
            <div className="flex items-center text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full ">
                <h2 className="text-5xl font-semibold text-gray-800 mb-2 md:text-7xl">
                  Build Your New
                  <span className="text-indigo-600  text-7xl"> Idea</span>
                </h2>
                <p className="text-gray-500 lg:w-3/4 text-sm md:text-lg text-center lg:text-left mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis commodi cum cupiditate ducimus, fugit harum id
                  necessitatibus odio quam quasi, quibusdam rem tempora
                  voluptates. Cumque debitis dignissimos id quam vel!
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-6 py-5">
                  <button className="btn bg-gray-900 text-gray-200  text-sm md:text-lg font-semibold rounded hover:bg-gray-800">
                    Book a Demo
                  </button>
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
                // clipPath: `polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)`,
                clipPath: ` polygon(150px 100%, 100% 100%, 100% 0, 0 0)`,
              }}>
              <div
                className="h-full object-cover  ring-4 ring-gray-200 shadow-xl "
                style={{
                  height: "100%",
                  width: "100%",
                  background: ` url("https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center center / cover no-repeat`,
                }}>
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*========================== 2 screen with full image background and text in top left ==========================*/}
      <section className="relative h-screen">
        <div
          style={{
            background: `url("https://images.ctfassets.net/95kuvdv8zn1v/6O9hC60HzPsKMmchWQ9RHv/84d0d3f2feceb9497f54890bf09b99f2/GetCruise-Homepage-Hero-Desktop-Cropped_webp.webp") center center / cover no-repeat`,
            height: "100%",
          }}>
          <div
            className="lg:text-left py-20 text-white"
            style={{
              boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 62%)`,
              height: "100%",
            }}>
            <div className="px-10 md:px-44 space-y-5 sm:text-center">
              <h1 className="sm:w-full text-center	md:w-full lg:w-4/12 lg:text-left font-normal lg:font-extrabold text-5xl  md:text-6xl lg:text-5xl leading-tight lg:leading-tight  ">
                Driving cities forward
              </h1>
              <p className="w-full lg:w-3/12 md:text-xl text-center lg:text-left   text-base  lg:font-normal   lg:leading-normal lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                error rem iste. Unde magni optio veritatis totam ipsa aliquam
                illo quo, tenetur doloribus earum quaerat, eaque voluptatem
                vitae nostrum expedita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*========================= 3 screen with bg-white  text in center below text carousel ====================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto    px-12 lg:px-2">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Meet the Fleet
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 lg:mt-4">
            There are two self-driving vehicles in the Cruise family. One is our
            ride of today. The other is your ride of tomorrow.
          </p>
          <div className="flex justify-center items-center mt-2 ">
            <a
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2 rounded-md px-10 py-1"
              href="/technology">
              <span>Learn how they work</span>
              <svg className="h-3 w-3 " viewBox="0 0 12 12" fill="none">
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
        {/* <div className="block relative">
          <div className="overflow-hidden w-full">
            <div>
               */}
        <div className="lg:w-full  cursor-grab">
          <HorizontalScroll
            sliderRef={sliderRef}
            setSlideIndex={setSlideIndex}
          />
          <div className="px-20  text-gray-900  hidden lg:block">
            <div
              className={`${
                slideIndex === 0
                  ? "hidden"
                  : "bg-red-500 hover:bg-red-600 hover:shadow-xl hover:animate-pulse transform hover:scale-110  px-3 py-3  lg:px-5 lg:py-5  rounded-full float-left flex justify-center items-center transition-all ease-linear duration-500 "
              }`}
              onClick={() => sliderRef?.current?.slickPrev()}>
              <svg
                className="w-10 h-10 text-white animate-goLeft"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"></path>
              </svg>
            </div>

            <button
              className={`${
                slideIndex === 1
                  ? "hidden"
                  : "bg-red-500 hover:bg-red-600 hover:shadow-xl hover:animate-pulse transform hover:scale-110 px-3 py-3 lg:px-5 lg:py-5   float-right	 rounded-full flex justify-center items-center transition-all ease-linear duration-500 "
              }`}
              onClick={() => sliderRef?.current?.slickNext()}>
              <svg
                className="w-10 h-10 text-white  animate-goRight   "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* 
            </div>
          </div> */}
        {/* </div> */}
      </section>

      {/*============ 4 screen with bg-gray  text in center below text 2 col grid right image left text at center ===========*/}

      <section className="bg-bookmark-white py-20 lg:py-20 mt-5 lg:mt-10">
        <div className="sm:w-3/4 lg:w-4/12 mx-auto px-12 lg:px-5">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Driving change in how we live
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 lg:mt-4">
            We’re giving more people more access to more of what they need — all
            while saving lives and improving the health of our planet.
          </p>

          <div className="flex justify-center items-center mt-2 ">
            <a
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500  hover:text-blue-400 flex items-center space-x-2 rounded-md px-10 py-1"
              href="/technology">
              <span className="text-sm  lg:text-lg font-medium">
                See what we offer
              </span>
              <svg className="h-3 w-3 " viewBox="0 0 12 12" fill="none">
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

        <div className="relative  mt-20 lg:mt-40">
          <div className="container  flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <UndrawProgrammer className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-xl lg:text-4xl font-semibold text-blue-500">
                Self-driving ride-hail
              </h1>
              <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-left  mt-4 lg:mt-6   my-4 text-center  sm:w-3/4 lg:w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis quasi impedit adipisci
                corporis, asperiores qui? Alias consequuntur, repellendus sit
                aliquid at atque tempore nemo id commodi odio!
              </p>
            </div>
          </div>
        </div>

        <div className=" relative mt-20 lg:mt-36">
          <div className="container  flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <UndrawLostOnline className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-xl lg:text-4xl font-semibold text-blue-500">
                Self-driving delivery
              </h1>
              <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-left  mt-4 lg:mt-6   my-4 text-center  sm:w-3/4 lg:w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis quasi impedit adipisci
                corporis, asperiores qui? Alias consequuntur, repellendus sit
                aliquid at atque tempore nemo id commodi odio!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 screen with bg-gray opposite of 4 screen*/}
      <section className="bg-white py-10 mt-10 lg:py-10 lg:mt-20 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto    px-12 lg:px-2">
          <h1 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-center text-bookmark-blue">
            Our commitment to our communities
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center w-4/6 lg:w-9/12 mt-2 lg:mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center items-center mt-2 ">
            <a
              // id="go_to_/technology_textHeader_index_2"
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2 py-1"
              href="/technology">
              <span className="text-sm  lg:text-lg font-medium">
                Let's make an impact
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
        <div className="lg:container py-10">
          <ReactCompareImage
            leftImage="https://images.ctfassets.net/95kuvdv8zn1v/5arv9KLmG5G7Y6c5pDHnrA/04c3ab5ed779227679f3e63c4d2f2770/Good_webp.webp?fm=webp"
            rightImage="https://images.ctfassets.net/95kuvdv8zn1v/4sCtUzO3ZV8VuACTE1Vuas/4f8d419ce0501a84eef4ee8498493c9e/Bad_webp.webp?fm=webp"
            className=""
          />
        </div>
      </section>

      {/* News */}
      <section className="py-10 mt-10 lg:py-16 lg:mt-10">
        <div className="container w-5/6 lg:w-11/12 ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-bookmark-blue">
            Guise news
          </h1>

          <div className="w-3/4 text-sm lg:text-lg pl-2 mt-2 lg:mt-4  ">
            <a
              className="text-blue-500 hover:text-blue-400 flex items-center space-x-2"
              href="/technology">
              <span className="text-sm lg:text-lg font-medium ">
                See more news
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
            </a>
          </div>
        </div>
        {/* cards */}
        <div className="container w-5/6   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-14">
          {[1, 2, 3].map((item) => (
            <Link
              to="/"
              key={item}
              className="cursor-pointer text-gray-900 hover:text-blue-500 transform hover:scale-105  card-zoom-image">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src="https://images.ctfassets.net/95kuvdv8zn1v/36KGXBtiMA29YpPzTXqc1x/60aa2392e417f1f8ced7f98f54bf820b/Cruise_2nd-Floor_0404.jpg?fm=webp"
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col  space-y-1">
                <p className="font-medium text-sm">04 · 23 · 21</p>
                <div className="text-lg lg:text-xl font-medium flex space-x-2">
                  <p>The Guise Origin Story</p>
                  <svg className="" width="11" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M1 2H17V18"
                      strokeWidth="3"
                      stroke="currentColor"></path>
                    <line
                      x1="15.9606"
                      y1="3.06066"
                      x2="1.55018"
                      y2="17.471"
                      strokeWidth="3"
                      strokeMiterlimit="2.61313"
                      stroke="currentColor"></line>
                  </svg>
                </div>
              </div>

              {/* <UndrawPolaroid className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full" /> */}

              <div className="text-blue-500 hover:text-blue-400  mt-2  flex space-x-2">
                <p className="text-xl  font-medium"></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-b border-gray-200" />
      <Partners />
      <hr className="border-b border-gray-200" />
      {/*============================= Join Team =========================== */}

      <section className="py-10 mt-10 lg:py-16 lg:mt-10">
        <div className="container w-5/6 lg:w-11/12  ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-bookmark-blue">
            Join our team
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
            With partners like GM, Honda, Softbank, Microsoft, and Walmart
            backing our mission to Drive Change, there's no better time to
            become a Cruiser.
          </p>
          <div className="w-3/4 text-sm lg:text-lg pl-2 mt-2 lg:mt-4 ">
            <Link
              className="text-blue-500  hover:text-blue-400 flex items-center space-x-2"
              to="/careers/jobs">
              <span className="text-sm  lg:text-lg font-medium ">
                See open positions
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
        {/* cards */}
        <div className="container w-5/6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-screen-lg mt-14">
          {["Hardware", "Software", "Commercial", "University"].map((item) => (
            <Link
              to="/"
              key={item}
              className="cursor-pointer text-gray-900 hover:text-blue-500 transform hover:scale-105  card-zoom-image ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src="https://images.ctfassets.net/95kuvdv8zn1v/36KGXBtiMA29YpPzTXqc1x/60aa2392e417f1f8ced7f98f54bf820b/Cruise_2nd-Floor_0404.jpg?fm=webp"
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex space-x-2">
                <p className="text-lg lg:text-xl font-medium">{item}</p>
                <svg className="" width="11" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M1 2H17V18"
                    strokeWidth="3"
                    stroke="currentColor"></path>
                  <line
                    x1="15.9606"
                    y1="3.06066"
                    x2="1.55018"
                    y2="17.471"
                    strokeWidth="3"
                    strokeMiterlimit="2.61313"
                    stroke="currentColor"></line>
                </svg>
              </div>

              {/* <UndrawPolaroid className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full" /> */}

              <div className="text-blue-500 hover:text-blue-400  mt-2  flex space-x-2">
                <p className="text-xl  font-medium"></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= Stay up to date ============================ */}
      <section className=" bg-bookmark-white text-bookmark-blue py-20 mt-20  ">
        <div className=" container  lg:flex">
          {/* heading */}
          <div className="container sm:w-3/4 w-11/12 lg:w-3/4">
            <h1 className="font-medium text-3xl lg:text-5xl lg:font-medium sm:text-center lg:text-left ">
              Stay up to date
            </h1>
            <p className="w-auto sm:text-center lg:text-left font-normal text-gray-800 text-sm lg:text-lg mt-4 lg:mt-6 lg:w-4/6  ">
              Get the latest news from Cruise delivered directly to your inbox.
            </p>
          </div>
          {/* form */}
          <div className="container sm:w-3/4 w-11/12 lg:w-3/4 flex flex-col  ">
            <div className="flex flex-col  gap-5 mt-8">
              <div className="border-b-2 border-gray-400">
                <input
                  type="text"
                  placeholder="First, Last"
                  className="text-gray-900 font-medium text-sm lg:text-xl pl-1 focus:outline-none bg-transparent flex-1"
                  required
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-400  w-auto">
                <input
                  type="text"
                  placeholder="email@address.com"
                  className="text-gray-900 font-medium text-sm lg:text-xl pl-1 focus:outline-none bg-transparent flex-1"
                  required
                />
                <span className="text-blue-500 flex space-x-2 items-center lg:mr-3  font-semibold text-sm lg:text-xl  cursor-pointer hover:text-blue-400">
                  <p>Submit</p>
                  <svg
                    className="w-3 h-3"
                    width="11"
                    viewBox="0 0 19 19"
                    fill="none">
                    <path
                      d="M1 2H17V18"
                      strokeWidth="3"
                      stroke="currentColor"></path>
                    <line
                      x1="15.9606"
                      y1="3.06066"
                      x2="1.55018"
                      y2="17.471"
                      strokeWidth="3"
                      strokeMiterlimit="2.61313"
                      stroke="currentColor"></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
