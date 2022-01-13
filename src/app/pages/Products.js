import React from "react";
import { Link } from "react-router-dom";
import airplaneProduct from "../../assets/images/airplane_product.jpg";
import audioProduct from "../../assets/images/audio_product.jpeg";
import signageProduct from "../../assets/images/ds_product.jpeg";
import energyProduct from "../../assets/images/energy_product.jpeg";
import trafficProduct from "../../assets/images/traffic_product.jpeg";

export const Products = () => {
  const productsInfo = [
    {
      name: "Airport Ground Operations",
      description: `The ability of Airlines & Aviation Authorities to implement high-impact strategies is critical to increase customer satisfaction and operational efficiency`,
      img: airplaneProduct,
      url: `/products/airport-operations-overview`,
    },
    {
      name: "Digital Signage",
      description: `Guise AI generates meaningful insights from camera streams to help you create the greatest impact on your customers`,
      img: signageProduct,
      url: `/products/digital-signage-overview`,
    },
    {
      name: "Traffic Management",
      description: `Revolutionize vehicle and crowd management with accurate analytics for better planning and design of city routes. Smart Cities rise from smart analytics`,
      img: trafficProduct,
      url: `/products/traffic-management-overview`,
    },
    {
      name: "Intelligent Audio",
      description: `Experience a new level of audio processing by Guise AI Intelligent Audio with improved and customizable AI assisted noise filtration`,
      img: audioProduct,
      url: `/products/intelligent-audio-overview`,
    },

    {
      name: "Energy Management",
      img: energyProduct,
      description: `Guise AI with its self adaptive pattern identification is empowering the energy sector both at the downstream and upstream sectors with efficient predictions`,
      url: `/products/energy-management-overview`,
    },
  ];

  return (
    <div className="bg-white h-full">
      <section
        className="w-full bg-center bg-cover"
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

      <div className="lg:py-10"></div>
      {productsInfo.map((product, index) => (
        <section className="bg-white py-10  mt-10 " key={index}>
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-3xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              {product.name}
            </h1>
          </div>
          <div className="container  md:px-20 mt-5 lg:mt-10">
            <div className=" text-gray-700 hover:text-bookmark-blue ">
              <div
                className="flex justify-center mb-4 lg:h-screen/3 "
                // style={{ height: "36rem" }}
              >
                <Link to={product.url} className="">
                  <img
                    loading="lazy"
                    src={product.img}
                    className="object-cover  filter drop-shadow-xl  w-full h-full bg-cover bg-center lg:rounded-lg shadow-xl"
                    alt="sdf"
                    draggable="false"
                  />
                </Link>
              </div>
              <div className="px-5 lg:px-0 flex flex-col items-center mt-7 text-center">
                <div className="text-lg lg:text-xl lg:w-5/6">
                  <p>{product.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-5  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to={product.url}>
                    <span className="text-sm  lg:text-xl font-bold transform hover:scale-105 hoverTransition ">
                      Read more
                    </span>
                    {/* <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
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
                    </svg> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="py-10"></div>
    </div>
  );
};
