import { Link } from "react-router-dom";
import BGTech from "../../assets/images/BGTech.jpg";

export function Home() {
  const products = [
    {
      label: "Airports",
      img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Retail Banking",
      img: "https://images.unsplash.com/photo-1621981932617-638ed3d5fcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },

    {
      label: "Energy",
      img: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Retail",
      img: "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      label: "Cities",
      img: "https://images.unsplash.com/photo-1551793611-5e15858c0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Intelligent Audio",
      img: "https://image.freepik.com/free-photo/young-woman-with-microphone-recording-voice-acting_1303-26279.jpg",
    },
  ];

  return (
    <div className="">
      {/*================= Hero Section ===================*/}

      <section
        className="mt-16 relative   overflow-hidden lg:h-screen"
        style={{
          background: `url(https://image.freepik.com/free-vector/white-abstract-background_23-2148812993.jpg) center center / cover no-repeat`,
          height: "100%",
        }}
        // https://image.freepik.com/free-vector/white-technology-background_23-2148390329.jpg
        // https://image.freepik.com/free-vector/white-technology-background_23-2148403783.jpg
        // https://image.freepik.com/free-vector/white-technology-background_23-2148403782.jpg
        // https://image.freepik.com/free-vector/white-elegant-texture-background-style_23-2148432200.jpg
        // https://image.freepik.com/free-vector/realistic-white-monochrome-background_23-2149023985.jpg
        // https://image.freepik.com/free-vector/white-abstract-background_23-2148812993.jpg
      >
        <div className="">
          <div className="lg:flex items-center lg:w-1/2 h-52 lg:h-screen">
            <div className="  pb-8 bg- sm:pb-16 md:pb-20  lg:w-full lg:pb-28 ">
              <main className="mt-10 mx-auto  px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-40 ">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-wide  font-extrabold uppercase text-core-black sm:text-5xl lg:text-7xl lg:leading-snug">
                    We are AI
                  </h1>
                  <h1 className="text-4xl tracking-tight font-extrabold uppercase text-core-black sm:text-5xl lg:text-7xl ">
                    on the edge
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Guise AI runs AI models on the edge for...
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <Link
                      to="/technology"
                      className="  justify-center px-4 py-2  border-transparent text-lg lg:text-xl font-bold rounded hover:text-white text-core-black border-2 border-core-black hoverTransition hover:bg-core-black md:py-4 md:text-lg md:px-5">
                      Read more
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <div
            className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
            // style={{
            //   // clipPath: `polygon(4% 0, 100% 0, 100% 50%, 100% 100%, 0 100%);`,
            // }}
          >
            {/* <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}

            <img
              className="h-72 w-full md:w-full object-cover  md:h-full"
              // https://image.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg
              src={BGTech}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <section className="flex items-center justify-center py-20  relative h-screen  bg-white">
        <div className=" lg:px-44 flex flex-col   mx-auto  md:h-128 space-y-10 gap-y-10 lg:gap-y-0 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6">
          <div className="flex flex-col items-center w-full pt-20  sm:pt-36 md:pt-48 lg:pt-0   lg:flex-row lg:w-1/2">
            <div className="px-10 lg:px-0 md:order-2 flex flex-col justify-center items-center md:items-start ">
              <h2 className="text-3xl  font-extrabold text-center md:text-left  lg:leading-tight text-core-black md:text-5xl">
                We are AI on the edge
              </h2>
              <p className="mt-4 font-medium  text-gray-500 text-center md:text-left  text-lg lg:text-xl lg:w-5/6">
                Guise AI runs AI models on the edge for...
              </p>

              <div className=" mt-10 flex justify-center lg:justify-start">
                <Link to="/technology">
                  <button className="btn border-2 rounded-md border-core-black hover:bg-core-black hover:text-gray-100   transform hover:scale-105 hoverTransition  text-lg md:text-xl  md:inline font-semibold">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex w-full h-full lg:w-1/2">
            <img
              src={`https://image.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg`}
              className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
              alt="sdf"
              draggable="false"
            />
          </div>
        </div>
      </section> */}

      {/*========================== Background Image with text ==========================*/}
      <section
        className="relative text-core-black"
        style={{
          background: `url(https://image.freepik.com/free-vector/white-abstract-background_23-2148812993.jpg) center center / cover no-repeat`,
          height: "100%",
        }}>
        <div className=" lg:flex justify-between py-10 lg:py-0 lg:h-screen">
          <div className="lg:relative lg:inset-y-0 lg:left-0 lg:w-1/2 ">
            <img
              className=" w-full object-cover h-full"
              src={`https://image.freepik.com/free-vector/robotic-mind_53876-93188.jpg`}
              alt=""
            />
          </div>
          <div className="w-full flex  lg:pl-20 items-center lg:w-1/2">
            <p className="md:text-3xl mt-5 lg:mt-0 px-10 lg:px-0 text-left w-full text-xl lg:leading-normal lg:w-5/6 font-medium ">
              Guise AI's solutions at the edge deliver feedback rapidly and
              locally within the system. Localized processing is more efficient,
              less expensive, and it increases the level of security in terms of
              data privacy while maintaining GDPR compliance.
            </p>
          </div>
          {/* <div className=" testing  lg:w-1/2">
            <p className="text-core-black font-medium  text-xl lg:text-2xl">
              Guise AI's solutions at the edge deliver feedback rapidly and
              locally within the system. Localized processing is more efficient,
              less expensive, and it increases the level of security in terms of
              data privacy while maintaining GDPR compliance.
            </p>
          </div> */}
        </div>

        {/* <div
          style={{
            background: `url(https://image.freepik.com/free-vector/gradient-technology-symbols-background_23-2149110134.jpg) center center / cover no-repeat`,
            height: "100%",
          }}>
          <div
            className="lg:text-left py-20  flex flex-col items-center justify-center"
            style={{
              boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 40%)`,
              height: "100%",
            }}>
            <div className="flex flex-col lg:w-5/6 md:flex-row  w-full px-10 md:px-40  text-center">
              <p className="md:text-3xl  text-center w-full text-xl lg:leading-normal font-bold">
                Guise AI's solutions at the edge deliver feedback rapidly and
                locally within the system. Localized processing is more
                efficient, less expensive, and it increases the level of
                security in terms of data privacy while maintaining GDPR
                compliance.
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* ============================= 6 SOLUTIONS CARDS ========================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="px-10 text-2xl lg:text-4xl lg:leading-tight font-semibold text-center text-core-black">
            With Guise AI Continual Learning technology, our solutions are
            revolutionizing technology and making significant impact in several
            mission critical industries.
          </h1>
        </div>
        <div className=" md:px-44 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 py-10">
          {products.map((item, index) => (
            <article
              key={index}
              className="relative w-full h-72 bg-cover bg-center group lg:rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
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

      {/*============ 2 col right-left image and text ===========*/}

      {/* <section className="bg-white py-20 lg:py-20 mt-5 lg:mt-0 ">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="px-10 text-2xl lg:text-4xl  font-semibold text-center text-bookmark-blue">
            Deliver the most dynamic and effective customer experience with
            Guise AI's realtime solutions on the edge
          </h1>

          <p className="text-gray-800   text-lg lg:text-xl  lg:text-center w-3/4  container  text-center  lg:w-4/6 mt-2 md:mt-4"></p>
        </div>

        <div className=" relative mt-10 lg:py-10">
          <div className="md:px-44  flex flex-col lg:flex-row items-center justify-center gap-x-24 ">
            <div className="flex flex-1 justify-center ">
              <img
                src={`https://image.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg`}
                className=" w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
                alt="sdf"
                draggable="false"
              />
            </div>

            <div className="px-10 md:px-0  flex flex-1 flex-col items-center mt-5 lg:mt-0 ">
              <p className="text-core-black font-medium text-justify text-xl lg:text-2xl lg:w-5/6">
                Guise AI's solutions at the edge deliver feedback rapidly and
                locally within the system. Localized processing is more
                efficient, less expensive, and it increases the level of
                security in terms of data privacy while maintaining GDPR
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/*============================= Join Team =========================== */}

      <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="">
          <h1 className=" text-2xl lg:text-4xl font-semibold text-center text-bookmark-blue">
            Why Choose Guise AI ?
          </h1>
          {/* <p className="w-5/6 lg:w-full text-gray-800  text-lg lg:text-xl  lg:text-center  container  text-center  mt-2">
            Help us on our quest to make good software even better.
          </p> */}
        </div>

        <div className="md:px-44 py-20  gap-y-10 cursor:pointer h-full">
          <div className="grid lg:grid-cols-12 gap-10">
            {[
              {
                title: "Untap Data",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-24 text-color-700"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                ),
              },
              {
                title: "Scalability",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-24 text-color-700"
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
                title: "Technology",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-24 text-color-700"
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
                title: "Cost Efficiency",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-24 text-color-700"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="col-span-3 md:px-10 py-10  md:h-96 flex  flex-col justify-center  items-center bg-white shadow-lg  rounded-lg">
                <div className="mb-8 ">{item.icon}</div>
                <div className="text-center text-core-black  ">
                  <h4 className="font-extrabold text-lg md:text-xl uppercase mb-4">
                    {item.title}
                  </h4>
                  <p className="font-medium text-base md:text-lg text-color-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
