import React from "react";
import UndrawRedHat from "../../assets/images/redHat.png";
import UndrawSharp from "../../assets/images/sharpNec.png";
import UndrawNorden from "../../assets/images/norden.png";
import UndrawIntel from "../../assets/images/intel.png";

const BusinessPartners = [
  {
    title: "RedHat",
    about:
      "We’re the world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies. We help you standardize across environments, develop cloud-native applications, and integrate, automate, secure, and manage complex environments with award-winning support, training, and consulting services.",
    logo: (
      <img
        src={UndrawRedHat}
        className="w-full h-full  px-10 py-2"
        alt="redhat logo"
      />
    ),
    URL: "https://www.redhat.com/en",
  },
  // {
  //   title: "Intel",
  //   about:
  //     "We’re the world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies. We help you standardize across environments, develop cloud-native applications, and integrate, automate, secure, and manage complex environments with award-winning support, training, and consulting services.",
  //   logo: (
  //     <img
  //       src={UndrawIntel}
  //       className="w-full h-full  px-44 py-1"
  //       alt="redhat logo"
  //     />
  //   ),
  //   URL: "https://www.redhat.com/en",
  // },
];
const TechPartners = [
  {
    title: "Sharp NEC",
    about:
      "Sharp NEC Display Solutions is responsible for the visual solutions Business around display devices.Today, display devices permeate our daily lives, spanning from information displays at railway stations and airports, promotional displays in stores and shopping malls, projection mapping at events and theme parks, to even safety applications that monitor the infrastructure to make our lives safer and more comfortable.",
    logo: (
      <img
        src={UndrawSharp}
        className="w-full h-full  px-10 flex-1 py-6 "
        alt="sharpNec logo"
      />
    ),
    URL: "https://www.nec-display.com/global/index.html",
  },
  {
    title: "Norden Communication",
    about:
      "Norden is one of its own kind manufacturer and supplier of the ELV and Optical Solutions of all kinds that have been tried and tested and cater to a wide spectrum of environments such as the telecommunications, buildings, utilities and industries, surveillance systems and Public Addressing Systems. The company provides some of the exemplary devices and solutions having the best modern technology as their working foundations.",
    logo: (
      <img
        src={UndrawNorden}
        className="w-full h-full  px-10  "
        alt="norden logo"
      />
    ),
    URL: "https://www.nordencommunication.com/en-in/",
  },
];

export const Partners = () => {
  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              Our Partners
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center text-sm md:text-lg text-social-instagram mb-4">
            Our Partners
          </h4>
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            We Work With the Best Partners
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            We’ve integerated with the below partners and more
          </p>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-2 mt-10 lg:mt-10">
        <div className=" px-5 lg:px-28 sm:w-3/4 lg:w-5/12  ">
          <h1 className="text-3xl  py-2 font-semibold lg:text-5xl lg:font-bold  ">
            Technology Partners
          </h1>
        </div>
        <div className="px-5 lg:px-28 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16  py-10">
          {TechPartners.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer text-gray-900   border border-gray-100 hover:shadow-xl shadow rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={item.URL}
                className="">
                <div className="shadow">
                  <div className="flex items-center justify-center bg-bookmark-offWhite hover:bg-bookmark-white bg-contain  py-5">
                    {item.logo}
                  </div>
                </div>
              </a>

              <div className="flex flex-col   px-5 py-5 space-y-1">
                <h2 className="font-bold text-sm lg:text-2xl text-bookmark-blue mb-4 tracking-wide">
                  {item.title}
                </h2>

                <h4 className="text-lg lg:text-xl font-light tracking-wide  flex space-x-2">
                  {item.about}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-10 lg:py-20 ">
        <div className=" px-5 lg:px-28 sm:w-3/4 lg:w-5/12  ">
          <h1 className="text-3xl  py-2font-semibold lg:text-5xl lg:font-bold  ">
            Business Partners
          </h1>
        </div>
        <div className="px-5 lg:px-28 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16  py-10">
          {BusinessPartners.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer text-gray-900   border border-gray-100 hover:shadow-xl shadow rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={item.URL}
                className="">
                <div className="shadow">
                  <div className="flex items-center justify-center bg-bookmark-offWhite hover:bg-bookmark-white bg-contain  py-5">
                    {item.logo}
                  </div>
                </div>
              </a>

              <div className="flex flex-col   px-5 py-5 space-y-1">
                <h2 className="font-bold text-sm lg:text-2xl text-bookmark-blue mb-4 tracking-wide">
                  {item.title}
                </h2>

                <h4 className="text-lg lg:text-xl font-light tracking-wide  flex space-x-2">
                  {item.about}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
