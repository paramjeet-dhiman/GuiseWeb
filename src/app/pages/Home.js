import BGTech from "../../assets/images/BGTech.jpg";
import { Link } from "react-router-dom";
import { AutoPlaySlide } from "../components/Marquee/AutoPlaySlide";

export function Home() {
  const marqueeData = [
    {
      title: "Demographic Analysis",
      bio: "With Age and Gender",
      img: `https://images.unsplash.com/photo-1577721174006-98a67a796931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: "Person Engagement",
      bio: "With dwell and wait times",
      img: `https://images.pexels.com/photos/5225266/pexels-photo-5225266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "Footfall Analysis",
      bio: "With people count",
      img: `https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80`,
    },
    {
      title: "Safety Compliance",
      bio: "With HardHat, and Safety Jacket",
      img: `https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
    {
      title: "License Plate Recognition",
      // bio: "With automatic license plate recognition",
      img: `https://images.unsplash.com/photo-1590417328119-564c9a26bade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Traffic Analysis",
      bio: "With vehicle count and pedestrian detection",
      img: `https://images.unsplash.com/photo-1523359501256-962c803a361b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80`,
    },

    {
      title: "Traffic Violations",
      bio: "With Illegal parking, Speed violation, Red light violation, Wrong lane, and Stop Line violation detection",
      img: `https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    },

    {
      title: "Noise Cancellation",
      bio: "With AI powered noise detection and filtration",
      img: `https://images.unsplash.com/photo-1572119244337-bcb4aae995af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    },
    {
      title: "Noise Detection",
      bio: "With AI powered noise detection and filtration",
      img: `https://images.unsplash.com/photo-1574064565163-af7a987a1490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    },

    {
      title: "Logo Detection",
      // bio: "With AI powered noise detection and filtration",
      img: `https://images.unsplash.com/photo-1541797873665-6d4cc148885f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxvZ29zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: "Color Detection",
      // bio: "With AI powered noise detection and filtration",
      img: `https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    },
  ];

  return (
    <div className="select-none">
      {/*================= Hero Section ===================*/}

      <section className="flex items-center justify-center h-screen  bg-white">
        <div className=" mt-10 lg:mt-20  px-8   md:px-20  lg:px-40  grid lg:grid-cols-12 gap-10 lg:gap-10  ">
          <div className="col-span-full lg:col-span-6 flex flex-col justify-center w-full ">
            {/* <h2 className="text-3xl md:text-5xl font-bold uppercase text-center lg:text-left ">
              AI at the edge
            </h2>
            <p className="mt-2 lg:mt-4 text-center lg:text-justify text-base lg:text-xl  lg:w-wb">
              Guise AI algorithms at the edge identify and refine critical data
              to drive your business.
            </p> */}

            <div className="text-center  lg:text-left w-full">
              <h1 className="text-4xl lg:text-left tracking-wide lg:tracking-wider   font-bold  uppercase  md:text-6xl">
                AI at the edge
              </h1>
              <p className=" mt-2 lg:mt-5   lg:text-left text-base  w-full  lg:max-w-lg  lg:text-xl">
                Guise AI at the Edge leverages local compute to extract
                meaningful data, delivering better insights for enterprises.
              </p>
            </div>
          </div>

          <div className="col-span-full flex items-center justify-center lg:col-span-6 ">
            <img
              src={BGTech}
              className="object-cover bg-cover bg-center md:h-hm md:w-wm lg:w-wl lg:h-hl rounded-lg shadow-xl  filter drop-shadow-2xl   "
              alt="sdf"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/*========================== Background Image with text ==========================*/}
      {/* <section className="lg:py-10">
        <div className=" lg:mt-20  px-10   md:px-20  lg:px-40  grid lg:grid-cols-12 gap-10 lg:gap-20  ">
          <div className="col-span-full lg:col-span-6  order-2 lg:order-1">
            <img
              className="object-cover bg-cover bg-center w-full h-full  rounded-lg shadow-xl  filter drop-shadow-2xl   "
              src={BGTech4}
              alt="sdf"
              draggable="false"
              loading="lazy"
            />
          </div>

          <div className="pb-10 col-span-full lg:col-span-6 flex flex-col justify-center w-full  order-1 lg:order-2">
            <div className="text-center lg:text-left w-full ">
              <h1 className="text-3xl font-bold uppercase  lg:tracking-tight lg:text-4xl">
                Target Data Where It Lives
              </h1>
              <div className="mt-2 lg:mt-5 text-center lg:text-justify text-base lg:text-xl  space-y-5 ">
                <p className="sm:max-w-lg sm:mx-auto lg:mx-0">
                  The need to overcome latency and bandwidth issues combined
                  with massive volumes of data is changing the topology of
                  distributed enterprises. Computing data at the edge is rapidly
                  growing, but how do you properly harness your untapped data?  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ============================= 6 SOLUTIONS CARDS ========================== */}
      <section className="bg-bookmark-blue h-full py-10 lg:py-20  ">
        <div className="px-10  lg:px-20">
          <div className="text-white flex flex-col justify-center space-y-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl  text-center font-bold lg:leading-tight">
                Guise AI Capabilities
              </h2>
              <p className="mt-2 lg:mt-10 text-gray-400 text-center max-w-screen-lg  text-lg lg:text-2xl">
                Guise AI at the Edge is built to make AI easier to use with low
                latency and at less bandwidth, while still maintaining expert
                levels of accuracy, speed, and privacy. It is hardware agnostic
                and brings out insights from your unstructured data.
              </p>
            </div>
            <Link to="/products">
              <div className="text-blue-500  px-6 rounded-md py-2 md:py-3  text-lg lg:text-xl uppercase  font-semibold border-2 border-blue-500 hover:bg-blue-500  hover:scale-105 hoverTransition  hover:text-white ">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 h-full py-10  ">
        <div className="px-10  lg:px-20">
          <div className="text-white">
            <h2 className="text-3xl lg:text-5xl text-center font-bold lg:leading-tight">
              Seamlessly integrate with{" "}
              <span className="text-core-guise  ">Guise AI </span> Edge APIs
            </h2>
            {/* <p className="mt-2 lg:mt-5 text-gray-400 text-center  text-lg lg:text-3xl">
              We are hardware agnostic
            </p> */}
          </div>

          {/* <div className="grid grid-cols-1  lg:grid-cols-3 gap-20 py-10 mt-10 ">
            {new Array(3).fill(1).map((item) => (
              <div
                className="p-20 rounded-lg shadow-xl filter drop-shadow-2xl"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1642775588674-3ad7225d3f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}></div>
            ))}
          </div> */}
        </div>
      </section>

      {/* <section className="bg-white py-10 lg:py-20 ">
        <div className="px-8 md:px-48">
          <h2 className="text-2xl lg:text-4xl  font-semibold text-center lg:leading-tight ">
            Guise AI runs industry-specific AI models at the edge which provide
            the data to optimize your business and stay competitive.
          </h2>
        </div>
        <div className="  md:px-20  lg:px-40  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mt-4 lg:mt-10 py-10">
          {products.map((item, index) => (
            <article
              key={index}
              className="relative w-full h-72 bg-cover bg-center group lg:rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                backgroundImage: `url(${item.img})`,
              }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h4 className="text-white text-2xl font-bold text-center">
                  <span className="absolute inset-0 "></span>
                  {item.label}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/*============================= WHY US ? =========================== */}

      {/* <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="px-8 md:px-0">
          <h1 className="text-3xl lg:text-5xl text-center text-core-black font-bold  ">
            Why Choose Guise AI ?
          </h1>
        </div>

        <div className="md:px-20 lg:px-40 px-10 mt-10 lg:mt-0 lg:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {[
              {
                title: "Innovative",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-20 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                title: "Scalable",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-20 text-bookmark-orange"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
              {
                title: "Accuracy",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg fill="#e4405f" className="h-20" viewBox="0 0 24 24">
                    <path d="M6 12c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm7.995 1.911l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10s4.477 10 10 10c5.233 0 9.521-4.021 9.957-9.142-.301-.483-1.066-1.061-1.962-.947z" />
                  </svg>
                ),
              },
              {
                title: "Privacy",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-20 text-bookmark-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className=" flex p-20  flex-col justify-center  items-center bg-white shadow-lg  rounded-lg">
                <div className="mb-7 px-5 filter drop-shadow-2xl">
                  {item.icon}
                </div>
                <div className="text-center text-core-black   ">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold uppercase">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className=" py-10 lg:py-20 overflow-hidden">
        <h1 className="text-3xl  lg:text-4xl text-center  font-bold lg:leading-tight">
          <span className="text-core-guise  ">Guise AI </span> runs
          industry-specific models at the Edge for your use cases
        </h1>
        <div className="">
          <AutoPlaySlide data={marqueeData} />
          {/* <MarqueeComponent direction="left" data={marqueeData} /> */}
          {/* <MarqueeComponent direction="right" data={marqueeData.slice(5)} /> */}
        </div>
      </section>

      <section className="bg-bookmark-blue py-10 lg:py-28">
        <div className="flex px-10 lg:px-8 space-y-16  text-white flex-col justify-center items-center">
          <h2 className="text-2xl  lg:text-5xl  font-bold lg:leading-tight">
            Get started with{" "}
            <span className="text-core-guise  ">Guise AI </span> at the Edge
          </h2>
          <Link to="/demo" className="">
            <div className="text-blue-500 px-6 rounded-md py-2 md:py-3  text-lg lg:text-xl uppercase  font-semibold border-2 border-blue-500 hover:bg-blue-500  hover:scale-105 hoverTransition  hover:text-white ">
              Book A DEMO
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
