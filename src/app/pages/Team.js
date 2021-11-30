import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UndrawProgrammer } from "../../assets/svg/undraw_programmer.svg";
import { SocialConnect } from "./SocialConnect";
export const Team = () => {
  return (
    <div className="bg-bookmark-blue pt-10 h-full">
      <section className="lg:mt-10 text-gray-200 container mt-20   ">
        <div className="relative flex h-screen">
          <div className="container  flex flex-col lg:flex-row-reverse items-center justify-center gap-x-20">
            {/* image */}
            <div className="flex flex-1 justify-center lg:mb-0">
              <UndrawProgrammer className="w-10/12 h-10/12 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
            </div>
            {/* content */}
            <div className="w-3/4 lg:w-auto flex flex-1 flex-col items-center  text-center md:text-left lg:items-start">
              <p className="text-red-500 font-medium text-xl mb-2">Team</p>
              <h1 className="text-3xl lg:text-7xl  font-medium tracking-normal leading-normal text-blue-500">
                Lorem ipsum, dolor sit
              </h1>
              <p className="font-medium text-base  mt-2 lg:text-lg pl-2 lg:text-left   text-center  sm:w-3/4 lg:w-5/6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white py-20 text-gray-900   select-none ">
        <div className="container grid grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-5  p-5 container w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-black bg-opacity-80   flex justify-center items-center rounded-full">
              <svg
                className="w-10 h-10 text-white"
                fill="#fff"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path>
                <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Competitive salary
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-blue-600 bg-opacity-80   flex justify-center items-center rounded-full">
              <svg
                viewBox="-64 0 512 512"
                className="w-10 h-10 text-white"
                fill="#fff">
                <path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z" />
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Flexible working
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-yellow-600 bg-opacity-80   flex justify-center items-center rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-white">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Technical Challenge
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-green-600 bg-opacity-80   flex justify-center items-center rounded-full">
              <svg
                className="w-10 h-10 text-white"
                fill="#fff"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px">
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <path d="M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M11,11H9v2H8v-2H6v-1h2V8h1v2h2V11z M15,10c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C16,9.55,15.55,10,15,10z M17,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C18,12.55,17.55,13,17,13z" />
                  </g>
                </g>
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Team Hangouts
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-red-600 bg-opacity-80   flex justify-center items-center rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Be part of the financial revolution
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="px-5 py-5 lg:px-8 lg:py-8 bg-purple-600 bg-opacity-80 hover:bg-purple-700 hover:bg-opacity-90     flex justify-center items-center rounded-full">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <p className="mt-5 text-center text-sm md:text-xl font-medium ">
              Bonus options in digital assets
            </p>
          </div>
        </div>
      </section>
      <section className="h-full bg-bookmark-white">
        <div className="w-full  py-20   text-bookmark-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
              <h2 className="text-base font-bold text-indigo-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading ">
                Check our awesome team members
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative overflow-hidden   shadow-lg w-full bg-green-600 bg-opacity-80 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Jade Bradley
                  </p>
                  <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-purple-600 bg-opacity-80 hover:bg-purple-700 hover:bg-opacity-90      rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Dany Bailey
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Software Engineer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className=" object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Lucy Carter
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Graphic Designer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-green-600 bg-opacity-80  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Jade Bradley
                  </p>
                  <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-purple-600 bg-opacity-80 hover:bg-purple-700 hover:bg-opacity-90    rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Dany Bailey
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Software Engineer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className=" object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Lucy Carter
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Graphic Designer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-green-600 bg-opacity-80  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Jade Bradley
                  </p>
                  <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-purple-600 bg-opacity-80 hover:bg-purple-700 hover:bg-opacity-90    rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className="object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Dany Bailey
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Software Engineer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>

              <div className="relative overflow-hidden   shadow-lg w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <svg
                  className="absolute bottom-0 left-0 mb-8 z-0"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: "0.1" }}>
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <div className="mb-8 z-20">
                  <img
                    className=" object-center object-cover rounded-full h-36 w-36"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="photosdfsdf"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">
                    Lucy Carter
                  </p>
                  <p className="text-base text-gray-400 font-normal">
                    Graphic Designer
                  </p>
                  <SocialConnect youtube={false} fb={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*============================= Join Team =========================== */}

      <section className="bg-white py-10  lg:py-20 ">
        <div className="container w-5/6 lg:w-11/12  ">
          <h1 className="text-4xl lg:text-5xl font-semibold text-bookmark-blue">
            Join our team
          </h1>
          <p className="text-gray-800 font-medium text-sm lg:text-lg pl-2 lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
            With partners like GM, Honda, Softbank, Microsoft, and Walmart
            backing our mission to Drive Change, there's no better time to
            become a Cruiser.
          </p>
          <div className="w-3/4 text-sm lg:text-lg pl-2 mt-2 lg:mt-4 ">
            <Link
              className="text-blue-500  hover:text-blue-400 flex items-center space-x-2"
              to="/careers/jobs">
              <span className="text-sm  lg:text-lg font-medium ">
                See open positions
              </span>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M0 1.00586H11V12.0059"
                  stroke="currentColor"
                  strokeWidth="2"></path>
                <line
                  x1="10.857"
                  y1="1.15437"
                  x2="0.745382"
                  y2="11.266"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="2.61313"></line>
              </svg>
            </Link>
          </div>
        </div>
        {/* cards */}
        <div className="container w-5/6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-screen-lg mt-14">
          {["Hardware", "Software", "Commercial", "University"].map((item) => (
            <Link
              to="/"
              key={item}
              className="cursor-pointer text-gray-900 hover:text-blue-500 transform hover:scale-105  card-zoom-image ">
              <div className="flex justify-center mb-4 shadow-xl">
                <img
                  src="https://images.ctfassets.net/95kuvdv8zn1v/36KGXBtiMA29YpPzTXqc1x/60aa2392e417f1f8ced7f98f54bf820b/Cruise_2nd-Floor_0404.jpg?fm=webp"
                  className="w-full h-full"
                  alt="sdf"
                  draggable="false"
                />
              </div>
              <div className="flex space-x-2">
                <p className="text-lg lg:text-xl font-medium">{item}</p>
                <svg className="" width="11" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M1 2H17V18"
                    strokeWidth="3"
                    stroke="currentColor"></path>
                  <line
                    x1="15.9606"
                    y1="3.06066"
                    x2="1.55018"
                    y2="17.471"
                    strokeWidth="3"
                    strokeMiterlimit="2.61313"
                    stroke="currentColor"></line>
                </svg>
              </div>

              {/* <UndrawPolaroid className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-full lg:h-full" /> */}

              <div className="text-blue-500 hover:text-blue-400  mt-2  flex space-x-2">
                <p className="text-xl  font-medium"></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
