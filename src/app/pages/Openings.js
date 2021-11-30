import React from "react";

export const Openings = () => {
  const JOBS = [
    {
      title: "Frontend Engineer",
      location: "Sidney, Australlia",
      type: "Remote",
    },
    {
      title: "Backend Engineer",
      location: "California, US",
      type: "Remote",
    },
    {
      title: "ML Engineer",
      location: "Banglore, India",
      type: "Full Time",
    },
    {
      title: "Frontend Engineer",
      location: "Sidney, Australlia",
      type: "Remote",
    },
    {
      title: "Backend Engineer",
      location: "California, US",
      type: "Remote",
    },
    {
      title: "ML Engineer",
      location: "Banglore, India",
      type: "Full Time",
    },
    {
      title: "Backend Engineer",
      location: "California, US",
      type: "Remote",
    },
    {
      title: "ML Engineer",
      location: "Banglore, India",
      type: "Full Time",
    },
    {
      title: "Frontend Engineer",
      location: "Sidney, Australlia",
      type: "Remote",
    },
  ];
  return (
    <div className="bg-bookmark-blue pt-10 h-full">
      <section
        className="w-full bg-center bg-cover "
        style={{
          height: "28rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80) center center / cover no-repeat`,
        }}>
        <div className="flex items-center justify-center w-full h-full bg-bookmark-blue bg-opacity-70">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-5xl font-bold  text-white uppercase md:text-7xl mb-4 shadow-2xl">
              Our Openings
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 select-none bg-white">
        <div className="flex justify-center space-x-5 py-10 ">
          <div className="relative w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-800 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
              width={16}
              height={16}
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
              // value={mode}
              // onChange={(e) => setMode(e.target.value)}
              placeholder="Departments"
              className="w-full focus:outline-none pl-4 py-2 appearance-none flex items-center h-12 border rounded bg-white border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
              <option value="auto">Any Departments</option>
            </select>
          </div>

          <div className="relative w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-800 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
              width={16}
              height={16}
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
              // value={mode}
              // onChange={(e) => setMode(e.target.value)}
              className="w-full focus:outline-none pl-10 py-2 appearance-none flex items-center h-12 border rounded bg-white border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
              <option value="auto">Any Location</option>
            </select>
          </div>
        </div>
        <div className="px-10 md:px-36 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  py-10 ">
          {JOBS.map((item) => (
            <div className="rounded-md w-full bg-bookmark-offWhite hover:bg-white border border-gray-200 px-4 py-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out  cursor-pointer">
              <div className="flex flex-col justify-start ">
                <div className="flex justify-between items-center ">
                  <div className="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2 ">
                    <svg
                      className="w-7 h-7 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <span>{item.title}</span>
                  </div>
                  <span className="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
                    {item.type}
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex space-x-1 items-center">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item.location}</span>
                </div>
                <div>
                  <div className="mt-5">
                    <button className="  mr-2 my-1 uppercase tracking-wider  px-2 btn-black hover:text-white  border text-sm   font-semibold  rounded  py-1 transition transform duration-500 cursor-pointer">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
