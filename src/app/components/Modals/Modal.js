import React from "react";
import Modal from "react-modal";
import { BookDemoForm } from "../Forms/BookDemoForm";

export const ModalDemo = ({ bookDemo, setBookDemo }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      border: "0",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="bg-black">
      <Modal
        isOpen={bookDemo}
        style={customStyles}
        onRequestClose={() => setBookDemo(false)}
        overlayClassName="myoverlay"
        contentLabel="Book Demo Modal">
        <div className="space-y-10 ">
          <h1 className="text-center py-10 uppercase bg-gray-200 font-bold text-3xl">
            Book A Demo
          </h1>
          <BookDemoForm />
        </div>

        <button
          onClick={() => setBookDemo(false)}
          className="  px-5 py-4 space-x-2 group rounded-lg flex absolute bottom-10 right-10  items-center justify-center transform hover:scale-105 hover:text-white bg-gray-200 hover:bg-red-600  hoverTransition  ">
          <span className="text-lg font-semibold">Close</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Modal>
    </div>
  );
};
