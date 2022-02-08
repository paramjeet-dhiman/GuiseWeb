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
      description: `Guise AI helps Airlines & Aviation Authorities implement high-impact strategies to increase customer satisfaction and operational efficiency`,
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
      description: `Revolutionize vehicle and crowd management with accurate analytics for better planning of city routes. Smart Cities rise from smart analytics`,
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

      <div className="py-5 lg:py-10"></div>

      {productsInfo.map((product, index) => (
        <section
          className="flex flex-col py-10 items-center justify-center"
          key={index}>
          <div className="container  space-y-7 bg-white text-core-black rounded-lg   md:w-full">
            <div className="">
              <h1 className="text-2xl tracking-tight sm:text-3xl  lg:text-4xl font-bold text-center">
                {product.name}
              </h1>
            </div>

            <div>
              <div className="flex justify-center mb-4 lg:h-screen/3 ">
                <Link to={product.url} className="">
                  <img
                    loading="lazy"
                    src={product.img}
                    className="object-cover bg-contain  filter drop-shadow-xl  w-full h-full  bg-center rounded-lg shadow-xl hover:shadow-sm hoverTransition"
                    alt={product.img}
                    draggable="false"
                  />
                </Link>
              </div>
            </div>

            <div className="max-w-screen-sm mx-auto space-y-3 text-center">
              <p className="mb-3 text-base md:text-lg">{product.description}</p>

              <Link
                to={product.url}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-core-guise border-2 border-core-guise rounded-sm hoverTransition hover:text-white hover:bg-core-guise ">
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      <div className="py-5 lg:py-10"></div>
    </div>
  );
};
