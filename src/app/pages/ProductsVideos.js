import React, { useState } from "react";
import { Player } from "../components/Player/Player";

export const ProductsVideos = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white h-full select-none">
      <section
        className="w-full bg-center bg-cover  "
        style={{
          height: "28rem",
          // boxShadow: `inset 0 0 0 2000px rgb(0 0 0 / 9%)`,
          background: `url(https://images.unsplash.com/photo-1617540702506-89475a91c171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80) center center / cover no-repeat`,
        }}>
        <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-70">
          <div className="text-center px-10 lg:px-0">
            <h1 className="text-4xl font-bold  text-white uppercase md:text-7xl mb-4">
              Videos
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-white flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0">
            {[1, 2, 3, 4, 1, 2, 3, 4, 4].map((item, idx) => (
              <div
                className="max-w-sm  bg-white px-5  pt-5 pb-2 rounded-xl shadow-lg transform hover:scale-105 hoverTransition"
                key={idx}>
                <div className="shadow-lg border-gray-800 bg-gray-100 relative">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/5456314/pexels-photo-5456314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    Live
                  </div>
                </div>
                {/* <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/r9jwGansp1E"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item}
                  />
                </div> */}
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                  Customer case study: Edmonton Transit System
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="relative ">
                    <button
                      className="mt-4 text-lg  text-white font-medium rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors ease-linear duration-300 "
                      onClick={() => setShowModal(true)}>
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showModal ? (
        <Player showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};
