import React from "react";
import { Link } from "react-router-dom";
import airplaneProduct from "../../assets/images/airplane_product.jpg";
import audioProduct from "../../assets/images/audio_product.jpeg";
import signageProduct from "../../assets/images/ds_product.jpeg";
import trafficProduct from "../../assets/images/traffic_product.jpeg";
import ProductBgImg from "../../assets/images/product_bg.jpg";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";

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

    // {
    //   name: "Energy Management",
    //   img: energyProduct,
    //   description: `Guise AI with its self adaptive pattern identification is empowering the energy sector both at the downstream and upstream sectors with efficient predictions`,
    //   url: `/products/energy-management-overview`,
    // },
  ];

  return (
    <div className="bg-white h-full">
      <HeroHeader img={ProductBgImg} title="Products" />

      <div className="lg:py-10"></div>
      {productsInfo.map((product, index) => (
        <section className="bg-white py-10  mt-10 " key={index}>
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-3xl font-semibold lg:text-4xl lg:font-bold text-center text-bookmark-blue">
              {product.name}
            </h1>
          </div>
          <div className="container  md:px-52  mt-5 lg:mt-5">
            <div className=" text-gray-700 hover:text-bookmark-blue ">
              <div className="flex justify-center mb-4 lg:h-screen/3 ">
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
                <div className="text-lg lg:text-xl lg:max-w-3xl">
                  <p>{product.description}</p>
                </div>

                <div className=" text-sm lg:text-lg mt-2 lg:mt-5  ">
                  <Link
                    className="text-blue-500 cursor-pointer hover:text-blue-400 flex items-center space-x-2 "
                    to={product.url}>
                    <span className="text-sm  lg:text-xl font-bold transform hover:scale-105 hoverTransition ">
                      Read more
                    </span>
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
