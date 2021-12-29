import BGTech from "../../assets/images/BGTech.jpg";
import BGTech2 from "../../assets/images/BGTech2.jpg";

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
    <div className="select-none">
      {/*================= Hero Section ===================*/}

      <section className="flex items-center justify-center py-20  relative h-screen  bg-white">
        <div className=" relative mt-20 lg:mt-36">
          <div className="md:px-44  flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="px-10 md:px-0  flex flex-1 flex-col items-center lg:items-start">
              <h2 className="text-2xl lg:text-4xl font-semibold  uppercase text-center md:text-left  lg:leading-tight text-core-black">
                We are AI on the edge
              </h2>
              <p className="mt-4 text-gray-600 text-center md:text-left  text-lg lg:text-xl lg:w-5/6">
                Guise AI runs AI models on the edge for...
              </p>
            </div>

            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src={BGTech}
                className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
                alt="sdf"
                draggable="false"
              />
            </div>
          </div>
        </div>
        {/* <div className=" lg:px-40 flex flex-col   mx-auto   space-y-10 gap-y-10 lg:gap-y-0 lg:space-y-20 lg:flex-row lg:items-center lg:space-x-6">
          <div className="flex flex-col items-center w-full pt-20  sm:pt-36 md:pt-48 lg:pt-0   lg:flex-row lg:w-1/2">
            <div className="px-10 lg:px-0 md:order-2 flex flex-col justify-center items-center md:items-start ">
              <h2 className="text-2xl lg:text-4xl font-semibold  uppercase text-center md:text-left  lg:leading-tight text-core-black">
                We are AI on the edge
              </h2>
              <p className="mt-4 text-gray-600 text-center md:text-left  text-lg lg:text-xl lg:w-5/6">
                Guise AI runs AI models on the edge for...
              </p>
            </div>
          </div>

          <div className="flex w-full h-full lg:w-1/2">
            <img
              src={BGTech}
              className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
              alt="sdf"
              draggable="false"
            />
          </div>
        </div> */}
      </section>

      {/*========================== Background Image with text ==========================*/}
      <section className="relative text-core-black">
        <div className=" relative mt-20 lg:mt-36">
          <div className="md:px-44  flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
                src={BGTech2}
                alt="sdf"
                draggable="false"
              />
            </div>

            <div className="px-10 md:px-0  flex flex-1 flex-col items-center lg:items-start">
              <p className="text-core-black font-medium lg:leading-snug text-xl lg:text-2xl text-left  lg:w-5/6">
                Guise AI's solutions at the edge deliver feedback rapidly and
                locally within the system. Localized processing is more
                efficient, less expensive, and it increases the level of
                security in terms of data privacy while maintaining GDPR
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 6 SOLUTIONS CARDS ========================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-20 ">
        <div className="sm:w-3/4 container mx-auto">
          <h2 className="text-2xl px-10 lg:text-4xl font-semibold text-center lg:leading-tight text-core-black">
            With Guise AI Continual Learning technology, our solutions are
            revolutionizing technology and making significant impact in several
            mission critical industries.
          </h2>
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
                  <span className="absolute inset-0 "></span>
                  {item.label}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/*============================= WHY US ? =========================== */}

      <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="">
          <h1 className=" text-2xl lg:text-4xl font-semibold text-center text-bookmark-blue">
            Why Choose Guise AI ?
          </h1>
        </div>

        <div className="md:px-44 py-20  gap-y-10 cursor:pointer h-full">
          <div className="grid lg:grid-cols-12 gap-10">
            {[
              {
                title: "Untap Data",
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                icon: (
                  <svg
                    className="h-24 text-bookmark-teal"
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
                    className="h-24 text-bookmark-orange"
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
                    className="h-24 text-indigo-500"
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
                    className="h-24 text-social-instagram"
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
                <div className="mb-8 filter drop-shadow-2xl ">{item.icon}</div>
                <div className="text-center text-core-black  ">
                  <h4 className="font-extrabold text-lg md:text-2xl uppercase mb-4">
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
