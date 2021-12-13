import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactCompareImage from "react-compare-image";
import { HorizontalScroll } from "../components/HorizontalScroll/HorizontalScroll";
import { Partners } from "../components/Partners/Partners";
import { StayUpToDate } from "./StayUpToDate";

export function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();

  const products = [
    {
      label: "Airports",
      img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Retail Banking",
      img: "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      label: "Brick and Mortar",
      img: "https://images.unsplash.com/photo-1522223052418-ce2c5a88e0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      label: "Energy Management",
      img: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Safety and Security",
      img: "https://images.pexels.com/photos/5474288/pexels-photo-5474288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      label: "Smart Cities",
      img: "https://images.unsplash.com/photo-1551793611-5e15858c0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Surveillance",
      img: "https://images.unsplash.com/photo-1529058890700-d85d58cf46b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="">
      {/*================= HERO  screen Navbar Background h-screen middle text headline with subheading ===================*/}

      <section className=" py-20  relative h-screen grid place-content-center bg-white  ">
        <div className="lg:px-28 flex flex-col-reverse lg:flex-row items-center ">
          <div className="flex space-y-10 gap-y-20 lg:space-y-0 lg:flex-row flex-col pt-20 lg:pt-20">
            <div className=" order-2 md:order-1 px-10   text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full">
                <h2 className="text-3xl lg:leading-tight font-semibold upper text-gray-900 mb-4 md:text-3xl md:pt-40 lg:text-5xl ">
                  We design and develop experiences that make people's live
                  <span className="text-blue-500 font-bold"> simple.</span>
                </h2>

                <p className="text-gray-500 lg:w-3/4 text-sm md:text-xl text-center lg:text-left mb-6">
                  Our AI solutions on the edge deliver accurate insights helping
                  you to make impactful business decisions
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-6 py-5">
                  <Link to="/technology">
                    <button className="btn bg-core-black text-gray-100 transform hover:scale-105 hoverTransition  text-lg md:text-xl font-semibold rounded hover:bg-gray-700">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 lg:w-1/2  ">
              <img
                src={`https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                className="w-full h-5/6 lg:w-full lg:h-full"
                alt="sdf"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative h-screen grid place-content-center bg-white pattern  ">
        <div className="px-10 md:px-28 flex flex-col-reverse lg:flex-row items-center  lg:mt-20 ">
          <div className="flex ">
            <div className="flex items-center text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full ">
                <h2 className="text-5xl font-semibold upper text-gray-900 mb-4 md:text-7xl  ">
                  Lorem ipsum dolor sit amet Idea
                </h2>
                <p className="text-gray-500 lg:w-3/4 text-lg md:text-lg text-center lg:text-left mb-6">
                  Our AI solutions on the edge deliver accurate insights helping
                  you to make impactful business decisions
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-6 py-5">
                  <Link to="/technology">
                    <button className="btn bg-core-black text-gray-100 transform hover:scale-105 hoverTransition  text-lg md:text-xl font-semibold rounded hover:bg-gray-700">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="hidden lg:block lg:w-1/2 "
              style={{
                height: "750px",
                // clipPath: `polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)`,
                // clipPath: ` polygon(150px 100%, 100% 100%, 100% 0, 0 0)`,
              }}>
              <div
                className="h-full object-cover  rounded shadow-xl "
                style={{
                  height: "100%",
                  width: "100%",
                  background: ` url("https://image.freepik.com/free-photo/designer-using-transparent-digital-tablet-screen-futuristic-technology_53876-105379.jpg") center center / cover no-repeat`,
                }}>
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*========================== 2 screen with full image background and text in top left ==========================*/}
      <section className="relative h-screen py-10 lg:py-0">
        <div
          style={{
            background: `url(https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
            height: "100%",
          }}>
          <div
            className="lg:text-left py-20 text-bookmark-white flex flex-col items-center justify-center"
            style={{
              boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 82%)`,
              height: "100%",
            }}>
            <div className="px-10 md:px-44 space-y-10 sm:text-center">
              {/* <h1 className="sm:w-full text-center	md:w-full lg:w-4/12 lg:text-left font-normal lg:font-extrabold text-5xl  md:text-6xl lg:text-5xl leading-tight lg:leading-tight  ">
                Lorem ipsum dolor sit ame
              </h1> */}
              <p className="w-full text-xl md:text-3xl text-left  font-medium lg:text-3xl lg:leading-normal">
                Guise AI solves the cost and efficiency problems endemic in AI
                today. Our continuous learning AI solutions on the edge allow
                machines to continuously learn and adapt to dynamically changing
                data in the real world without having to constantly retrain
                models.
              </p>

              <p className="w-full text-xl md:text-3xl text-left  font-medium lg:text-3xl lg:leading-normal">
                Clients and OEMs who require an accurate, cost-efficient and
                secure solution turn to Guise AI to continuously extract
                patterns and predict from real-time and dynamically changing
                data to create the greatest impact on end-users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTIONS CARDS ========================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="text-3xl font-semibold lg:text-5xl lg:font-semibold text-center text-core-black">
            With Guise AI Continual Learning technology, our solutions are
            revolutionizing technology and making significant impact in several
            mission critical industries.
          </h1>
        </div>
        <div className="container grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 py-10">
          {products.map((item, index) => (
            <article
              key={index}
              className="relative w-full h-64 bg-cover bg-center group lg:rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${item.img})`,
              }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h4 className="text-white text-2xl font-bold text-center">
                  <span className="absolute inset-0"></span>
                  {item.label}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*========================= 3 screen with bg-white  text in center below text carousel ====================== */}
      <section className="bg-bookmark-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto    px-12 lg:px-2">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Lorem ipsum dolor sit ame
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 lg:mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error
            rem iste.
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
          <div className="px-20 py-5 text-gray-900  hidden lg:block">
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

      <section className="bg-white py-20 lg:py-20 mt-5 lg:mt-10">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="text-3xl font-semibold lg:text-5xl  lg:font-semibold text-center text-core-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error
            rem iste.
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg px-10 lg:px-0 lg:text-center w-3/4  container  text-center  lg:w-3/6 mt-2 lg:mt-4">
            Deliver the most dynamic and effective customer experience with
            guise ai's realtime solutions on the edge
          </p>
        </div>

        <div className="relative  mt-20 lg:mt-40">
          <div className="container  flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src={`https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`}
                className="w-full h-full"
                alt="sdf"
                draggable="false"
              />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-xl lg:text-4xl font-semibold text-blue-500">
                Lorem ipsum dolor sit
              </h1>
              <p className="text-gray-800 font-medium text-sm lg:text-lg  lg:text-left  mt-4 lg:mt-6   my-4 text-center  sm:w-3/4 lg:w-5/6">
                Guise AI's solutions at the edge deliver feedback rapidly and
                locally within the system. Localized processing is more
                efficient, less expensive, and it increases the level of
                security in terms of data privacy while maintaining GDPR
                compliance.
              </p>
            </div>
          </div>
        </div>

        <div className=" relative mt-20 lg:mt-36">
          <div className="container  flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src={`https://images.unsplash.com/photo-1591478209132-e32752b9af43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`}
                className="w-full h-full"
                alt="sdf"
                draggable="false"
              />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-xl lg:text-4xl font-semibold text-blue-500">
                Lorem ipsum dolor sit
              </h1>
              <p className="text-gray-800 font-medium text-sm lg:text-lg  lg:text-left  mt-4 lg:mt-6   my-4 text-center  sm:w-3/4 lg:w-5/6">
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
      <section className="bg-bookmark-white py-10 mt-10 lg:py-10 lg:mt-20 ">
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
            leftImage="https://images.pexels.com/photos/5696661/pexels-photo-5696661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            rightImage="https://i.postimg.cc/NFKCQWTq/Group-69.png"
            className=""
          />
        </div>
      </section>

      {/* =============================== Success Stories ====================================== */}
      <section className="py-10  lg:py-20 ">
        <div className="container w-5/6 lg:w-11/12 ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-bookmark-blue">
            Success Stories
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg  lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
            Checkout how leading companies trust and use GuiseAI’s premier
            solutions.
          </p>
        </div>
        {/* cards */}
        <div className="container w-5/6   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-14">
          {[
            {
              title: "Sharp NEC",
              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newshubasia.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fnec-display-solutions2.jpg&f=1&nofb=1",
              url: "https://www.sharp-nec-displays.com/global/",
            },
            {
              title: "Norden Communications",
              img: "https://www.nordencommunication.com/public/uploads/media/Intersec%202018%20(7).jpg",
              url: "https://www.nordencommunication.com/en",
            },
            {
              title: "Digifort",
              img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecurityelectronicsandnetworks.com%2Fwp-content%2Fuploads%2F2020%2F08%2FDigifort-1024x667.jpg&f=1&nofb=1",
              url: "https://www.digifort.com/",
            },
          ].map((item) => (
            <a
              target="_blank"
              href={item.url}
              key={item.title}
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-900 hover:text-blue-500 transform hover:scale-105  card-zoom-image">
              <div className="flex justify-center w-full h-full mb-4 shadow-xl">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col  space-y-1">
                {/* <p className="font-medium text-sm">04 · 23 · 21</p> */}
                <div className="text-lg lg:text-xl font-medium flex space-x-2">
                  <p>{item.title}</p>
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
            </a>
          ))}
        </div>
      </section>

      {/* <hr className="border-b border-gray-200 my-10" /> */}

      {/* =============================== Partners ====================================== */}
      <Partners />

      {/*============================= Join Team =========================== */}

      <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="container w-5/6 lg:w-11/12  ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-bookmark-blue">
            Join our team
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            autem corrupti quaerat, tenetur mollitia accusantium cupiditate sunt
            eos ullam odit, similique eveniet repellendus itaque magni. Quas
            quaerat amet tenetur consectetur!
          </p>
          <div className="w-3/4 text-sm lg:text-lg pl-2 mt-2 lg:mt-4 ">
            <Link
              className="text-blue-500  hover:text-blue-400 flex items-center space-x-2"
              to="/careers">
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
        <div className="container w-5/6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-screen-lg  py-10">
          {[
            {
              label: "Hardware",
              img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              url: "/careers/jobs",
            },
            {
              label: "Software",
              img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              url: "/careers/jobs",
            },
            {
              label: "Commercial",
              img: "https://images.pexels.com/photos/7709146/pexels-photo-7709146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              url: "/careers/jobs",
            },
            {
              label: "University",
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              url: "/careers/jobs",
            },
          ].map((item) => (
            <Link
              to={item.url}
              key={item.label}
              className="cursor-pointer text-gray-900 hover:text-blue-500 transform hover:scale-105  card-zoom-image ">
              <div className="flex justify-center w-full h-full mb-4 ">
                <img
                  src={item.img}
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex space-x-2">
                <p className="text-lg lg:text-xl font-medium">{item.label}</p>
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

              <div className="text-blue-500 hover:text-blue-400  mt-2  flex space-x-2">
                <p className="text-xl  font-medium"></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= Stay up to date ============================ */}
      <StayUpToDate />
    </div>
  );
}
