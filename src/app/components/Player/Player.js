import React, { useEffect } from "react";
import ReactPlayer from "react-player";

export const Player = ({ setShowModal }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setShowModal]);

  return (
    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150">
      <div className="modal-overlay absolute w-full h-full bg-core-black opacity-95"></div>
      <div className="relative ">
        <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full  outline-none focus:outline-none ">
          <div
            onClick={() => setShowModal(false)}
            className="h-10 w-10 flex items-center justify-center transform hover:scale-105 hover:text-white bg-gray-50 opacity-20 hover:opacity-100 absolute -right-5 -top-5 hover:bg-red-600 rounded-full hoverTransition  ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          {/*body*/}
          <div
            style={{
              height: "28rem",
              width: "50rem",
              background: "transparent",
            }}>
            <ReactPlayer
              url="https://vimeo.com/191476378"
              controls
              width="100%"
              height="100%"
              autoPlay
            />
          </div>
        </div>
      </div>
    </div>
  );
};
