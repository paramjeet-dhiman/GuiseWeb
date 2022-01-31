import React from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { BookDemoForm } from "../components/Forms/BookDemoForm";
import HeaderIMG from "../../assets/images/HeaderBookDemo.jpg";
export const BookADemo = () => {
  return (
    <div className="bg-white h-full select-none">
      <HeroHeader img={HeaderIMG} title="Request a DEMO" />

      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className=" container mx-auto px-10 lg:px-28 ">
          <h1 className="text-2xl w-full lg:text-4xl font-bold text-center text-core-black">
            Watch our products in action & see how they can help your business
          </h1>
          <p className="text-core-black  text-base lg:text-lg   text-center  mt-2 md:mt-4">
            Just answer a few simple questions so we can personalize the right
            experience for you.
          </p>
        </div>
      </section>

      <section className=" py-10 lg:py-20 mt-10 lg:mt-10 container bg-white border border-gray-100 relative mb-8 rounded-lg shadow-xl">
        <div className="px-10 md:px-20 flex flex-col justify-center ">
          <div className="container mb-8">
            <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">
              Let's Schedule a Demo
            </h1>
            <p className="text-gray-700 font-medium text-sm lg:text-lg  lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
              Tell us a few things about yourself and we'll show you a lot more
              about us.
            </p>
          </div>
          <BookDemoForm />
        </div>
      </section>
    </div>
  );
};
