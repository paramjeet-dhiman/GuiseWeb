import { Link } from "react-router-dom";
import BGTech from "../../assets/images/globe-6858907.jpg";
import BGTech2 from "../../assets/images/2880645.jpg";

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
      label: "Energy Utilities",
      img: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      label: "Retail",
      img: "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      label: "Public Safety",
      img: "https://images.pexels.com/photos/5474288/pexels-photo-5474288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      label: "Cities",
      img: "https://images.unsplash.com/photo-1551793611-5e15858c0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="">
      {/*================= Hero Section ===================*/}
      <section className="flex items-center justify-center py-20  relative h-screen  bg-black">
        <div className=" lg:px-44 flex flex-col   mx-auto  md:h-128 space-y-10 gap-y-10 lg:gap-y-0 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6">
          <div className="flex flex-col items-center w-full pt-20  sm:pt-36 md:pt-48 lg:pt-0   lg:flex-row lg:w-1/2">
            <div className="px-10 lg:px-0 md:order-2 flex flex-col justify-center items-center md:items-start ">
              <h2 className="text-3xl font-bold text-center md:text-left  lg:leading-tight text-gray-300 md:text-5xl">
                We design and develop experiences that make people's live
                Simple.
              </h2>
              <p className="mt-4 text-gray-400 text-center md:text-left  text-lg lg:text-xl w-5/6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>

              <div className=" mt-10 flex justify-center lg:justify-start">
                <Link to="/technology">
                  <button className="btn border-2 hover:border-white  text-white hover:text-core-black hover:bg-white transform hover:scale-105 hoverTransition  text-lg md:text-xl  md:inline font-semibold">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex w-full h-full lg:w-1/2">
            <img
              src={BGTech2}
              className="object-cover w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
              alt="sdf"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/*========================== Background Image with text ==========================*/}
      <section className="relative h-screen py-10 lg:py-0">
        <div
          style={{
            background: `url(${BGTech}) center center / cover no-repeat`,
            height: "100%",
          }}>
          <div
            className="lg:text-left py-20 text-bookmark-white flex flex-col items-center justify-center"
            style={{
              boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 80%)`,
              height: "100%",
            }}>
            <div className="px-10 md:px-44 space-y-10 sm:text-center">
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

      {/* ============================= 6 SOLUTIONS CARDS ========================== */}
      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="px-10 text-2xl lg:text-3xl lg:leading-tight font-semibold text-center text-core-black">
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

      <section className="bg-white py-20 lg:py-20 mt-5 lg:mt-10">
        <div className="sm:w-3/4 container mx-auto">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center text-bookmark-blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error
            rem iste.
          </h1>

          <p className="text-gray-800   text-lg lg:text-xl  lg:text-center w-3/4  container  text-center  lg:w-4/6 mt-2 md:mt-4">
            Deliver the most dynamic and effective customer experience with
            guise ai's realtime solutions on the edge
          </p>
        </div>

        <div className=" relative mt-20 lg:mt-36">
          <div className="md:px-44  flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src={`https://image.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg`}
                className=" w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
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

      {/*============================= Join Team =========================== */}

      <section className="bg-white py-10 lg:py-20">
        <div className="w-5/6 lg:w-4/12 mx-auto">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center text-bookmark-blue">
            Join our Team
          </h1>
          <p className="w-5/6 lg:w-full text-gray-800  text-lg lg:text-xl  lg:text-center  container  text-center  mt-2">
            Help us on our quest to make good software even better.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center  md:px-44 py-20  gap-y-10">
          <div className="w-full lg:w-1/2 px-10 md:px-0 order-2 lg:order-1">
            <p className="font-medium text-sm uppercase lg:text-lg text-social-instagram my-2">
              We are hiring.
            </p>
            <h1 className="text-core-black font-bold text-3xl lg:text-5xl lg:w-5/6 lg:leading-tight ">
              Are you ready to share your expertise ?
            </h1>
            <p className="text-gray-700 text-xl lg:text-2xl font-light  mt-4 md:mt-6 lg:w-5/6">
              We're always looking for talented, creative and passionate people
              to join our team. If you're interested in opportunities at our
              company, we'd love to hear from you.
            </p>

            <div>
              <Link to="/careers">
                <button className="btn  bg-blue-500 hover:bg-blue-600 text-white font-semibold transform hover:scale-105 hoverTransition   text-xl mt-6 rounded-full px-10 py-4">
                  Join us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              className=" w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
              src="https://images.pexels.com/photos/4342126/pexels-photo-4342126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
