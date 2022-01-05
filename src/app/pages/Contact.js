import React from "react";

export const Contact = () => {
  return (
    <div className="bg-bookmark-blue pt-10 h-full">
      <section
        className="w-full bg-center bg-cover "
        style={{
          height: "36rem",
          background: `url(https://images.pexels.com/photos/4476606/pexels-photo-4476606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
        }}>
        <div className="flex items-center justify-center w-full h-full bg-bookmark-blue bg-opacity-70">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20  ">
        <div className="sm:w-3/4 lg:w-6/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Get In Touch
          </h4>
          <h1 className="text-4xl uppercase font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Have some questions?
          </h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lets get this conversation started. Tell us a bit about yourself,
            and we'll get in touch as soon as we can.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 pb-28">
        <div className="grid md:px-32  w-full  gap-x-20 gap-y-16 ">
          {/* <div className="flex items-center px-5 lg:px-0 col-auto md:col-span-5  text-gray-800">
            <div className="w-full ">
              <div className="grid gap-8">
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className=" shadow-lg  flex items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-blue-100 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Address
                      </div>
                      <div className="font-medium text-lg">
                        XXX XXXX, Floor 4 San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className="flex shadow-lg  items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-green-100 text-green-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Phone
                      </div>
                      <div className="font-medium text-lg">+45 77 99 77 99</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className="flex shadow-lg items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-red-100 text-red-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Mail
                      </div>
                      <div className="font-medium text-lg">mail@guise.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" col-span-full mx-auto container">
            <div className="">
              <div className="flex flex-wrap justify-center  ">
                <div className="w-full px-5 lg:px-0 ">
                  <div className="relative bg-white rounded-md   flex flex-col min-w-0 break-words w-full  shadow-lg ">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        Want to work with us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                        Complete this form and we will get back to you
                      </p>
                      <form>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="full-name">
                            Full Name
                          </label>
                          <input
                            id="full-name"
                            type="text"
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="message">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            cols="80"
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full"
                            placeholder="Type a message..."></textarea>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="btn btn-black  active:bg-gray-600 text-lg font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit">
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-32 relative block ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Build something
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                inventore incidunt deleniti, voluptates, eligendi iure doloribus
                asperiores quaerat in ne
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-white">
        <div className="flex items-center justify-between">
          <div className=" w-full md:w-7/12 mb-32 md:m-0 md:order-2">
            <div className="flex justify-center relative">
              <img
                className="relative z-10 rounded-md self-start"
                src="https://nexo.io/media/pages/about-us/cc0d84e3f5-1631610879/nexcareers.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col w-full md:w-5/12 md:pr-64 relative">
            <h2 className="text-xl md:text-5xl mb-16">Careers </h2>
            <h3 className="b-headline mb-16">
              We are looking for exceptionally talented people to join our team{" "}
            </h3>
            <div className="s-text2 m-clip text-gray-500">
              <p>
                Imagine yourself contributing to the development of one of the
                most dynamic blockchain-based FinTech companies in the world,
                redefining how financial services are conducted. This innovative
                company is Nexo.
              </p>{" "}
            </div>
            <a
              className="b-button b-button--m b-button--icon-r b-button--indigo mt-32"
              href="https://nexo.breezy.hr"
              target="_blank"
              rel="noopener noreferer">
              View all openings{" "}
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};
