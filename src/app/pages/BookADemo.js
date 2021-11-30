import React from "react";

export const BookADemo = () => {
  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "36rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-70">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              Request a DEMO
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-6/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center text-sm font-semibold md:text-lg text-social-instagram mb-4">
            DEMO
          </h4>
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
            Watch our products in action & see how they can help your business
          </h1>
          <p className="text-gray-600 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Just answer a few simple questions so we can personalize the right
            experience for you.
          </p>
        </div>
      </section>
      <section className=" py-10 lg:py-20 mt-10 lg:mt-10 container bg-bookmark-smoke border border-gray-100 relative mb-8 rounded-md shadow-xl">
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
          <form>
            <div className="flex flex-col flex-auto lg:flex-row -mx-3">
              <div className="lg:w-1/2 px-3 mb-5">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  Full name
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400 text-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
                    placeholder="John Smith"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 px-3 mb-5">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  Company
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400 text-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
                    placeholder="Company Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400 text-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
                    placeholder="johnsmith@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-auto lg:flex-row -mx-3">
              <div className="lg:w-1/2 px-3 mb-5">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  Phone
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400 text-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input
                    type="number"
                    required
                    className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 px-3 mb-5">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  Select Solution
                </label>

                <div className="relative flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute inset-0 m-auto mr-3 text-bookmark-blue dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>

                  <select
                    // value="1"
                    className="select w-full rounded-lg border-2 text-gray-400 border-gray-200 outline-none focus:border-gray-900  bg-white  pl-4 py-4 appearance-none flex items-center ">
                    <option selected disabled>
                      Select Solution you're looking for
                    </option>
                    <option value="AGO">Airport Ground Ops</option>
                    <option value="FB">Finance Banking</option>
                    <option value="SC">Smart Cities</option>
                    <option value="RT">Retail</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label
                  for=""
                  className="text-sm text-gray-700 font-semibold px-1">
                  How do you hear about us?
                </label>
                <div className="flex">
                  <div className="relative flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute inset-0 m-auto mr-3 text-bookmark-blue dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>

                    <select
                      // value={"1"}
                      className="select w-full rounded-lg border-2 text-gray-400 border-gray-200 outline-none focus:border-gray-900  bg-white  pl-4 py-4 appearance-none flex items-center">
                      <option selected disabled>
                        How do you hear about us?
                      </option>
                      <option value="facebook">Facebook</option>
                      <option value="linkedin">Linkedin</option>
                      <option value="twitter">Twitter</option>
                      <option value="online">Online</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full mb-5">
                <button className="btn btn-black  text-lg font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
