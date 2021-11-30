import React from "react";

export const Bookmark = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1 text-2xl uppercase font-black">Bookmark</div>
          <ul className="hidden lg:flex flex-1 justify-end items-center gap-12 text-blue-500 uppercase text-xs">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer ">Features</li>
            <li className="cursor-pointer ">Pricing</li>
            <button className="bg-red-400 text-white rounded-md px-7 py-3 uppercase">
              Login
            </button>
          </ul>

          {/* Mobile Button */}
          <div className="flex lg:hidden flex-1 justify-end">
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-indigo-500 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              A simple bookmark manager
            </h2>
            <p className="text-gray-500 text-lg text-center lg:text-left mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, ab atque saepe tempora velit sunt distinctio minus,
              libero molestias tenetur mollitia fugit neque voluptatem rerum
              perspiciatis laborum, ut temporibus assumenda!
            </p>

            <div className="flex justify-center flex-wrap gap-6">
              <button className="btn btn-purple hover:bg-gray-100 hover:text-black">
                Get it on Chrome
              </button>
              <button className="btn btn-white hover:bg-purple-500 hover:text-white">
                Get it on Firefox
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-40">
            <img
              src=""
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              alt=""
            />
          </div>
        </div>
        {/* rounded rectangle */}
        <div className="hidden lg:block overflow-hidden bg-indigo-500 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 mt-20 lg:mt-60">
        {/* heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-purple-500"> Features</h1>
          <p className="text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vitae natus molestias fugiat sint ut consectetur rerum? Tempora
            nostrum nemo facere natus sit voluptate dicta laudantium! Rem quis
            sequi vel!
          </p>
        </div>

        {/* Feature #1 */}

        <div className=" relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src=""
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-indigo-500">
                Bookmark in one click
              </h1>
              <p className="text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis quasi impedit adipisci
                corporis, asperiores qui? Alias consequuntur, repellendus sit
                aliquid at atque tempore nemo id commodi odio!
              </p>
              <button className="btn btn-purple hover:bg-gray-100 hover:text-black">
                More info
              </button>
            </div>
            {/* rounded rectangle */}
            <div className="hidden lg:block overflow-hidden bg-indigo-500 rounded-r-full absolute h-80 w-2/4  lg:-bottom-24 lg:-left-36"></div>
          </div>
        </div>

        {/* Feature #2 */}

        <div className=" relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src=""
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-indigo-500">
                Bookmark in one click
              </h1>
              <p className="text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis quasi impedit adipisci
                corporis, asperiores qui? Alias consequuntur, repellendus sit
                aliquid at atque tempore nemo id commodi odio!
              </p>
              <button className="btn btn-purple hover:bg-gray-100 hover:text-black">
                More info
              </button>
            </div>
            {/* rounded rectangle */}
            <div className="hidden lg:block overflow-hidden bg-indigo-500 rounded-l-full absolute h-80 w-2/4  lg:-bottom-24 lg:-right-36"></div>
          </div>
        </div>

        {/* Feature #3*/}

        <div className=" relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* image */}
            <div className="flex flex-1 justify-center z-40 mb-10 lg:mb-0">
              <img
                src=""
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                alt=""
              />
            </div>
            {/* content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-indigo-500">
                Bookmark in one click
              </h1>
              <p className="text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, maxime? Aperiam perspiciatis quasi impedit adipisci
                corporis, asperiores qui? Alias consequuntur, repellendus sit
                aliquid at atque tempore nemo id commodi odio!
              </p>
              <button className="btn btn-purple hover:bg-gray-100 hover:text-black">
                More info
              </button>
            </div>
            {/* rounded rectangle */}
            <div className="hidden lg:block overflow-hidden bg-indigo-500 rounded-r-full absolute h-80 w-2/4  lg:-bottom-24 lg:-left-36"></div>
          </div>
        </div>
      </section>

      {/* Download Section */}

      <section className="py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-purple-500">
            Download the Extension
          </h1>
          <p className="text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vitae natus molestias fugiat sint ut consectetur rerum? Tempora
            nostrum nemo facere natus sit voluptate dicta laudantium! Rem quis
            sequi vel!
          </p>
        </div>
        {/* cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* Card1 */}
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <img src="" alt="" />
              <h3 className="mt-5 mb-2 text-blue-500 text-lg">Add to Chrome</h3>
              <p className="mb-2 text-gray-500 font-light ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-gray-500" />
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple hover:bg-white hover:text-black">
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card2*/}
          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className="p-6 flex flex-col items-center">
              <img src="" alt="" />
              <h3 className="mt-5 mb-2 text-blue-500 text-lg">Add to Chrome</h3>
              <p className="mb-2 text-gray-500 font-light ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-gray-500" />
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple hover:bg-white hover:text-black">
                Add & Install Extension
              </button>
            </div>
          </div>
          {/* Card3 */}
          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="p-6 flex flex-col items-center">
              <img src="" alt="" />
              <h3 className="mt-5 mb-2 text-blue-500 text-lg">Add to Chrome</h3>
              <p className="mb-2 text-gray-500 font-light ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <hr className="border-b border-gray-500" />
            <div className="flex p-6">
              <button className="flex-1 btn btn-purple hover:bg-white hover:text-black">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========== FAQ=================== */}

      <section className="bg-bookmark-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-purple-500">FAQ</h1>
            <p className="text-center text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque vitae natus molestias fugiat sint ut consectetur rerum?
            </p>
          </div>
          {/* FAQ Items */}

          <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
            <div className="flex items-center border-b py-4">
              <span className="flex-1">What is a bookmark?</span>
              <svg
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">How can i request a new browser?</span>
              <svg
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">Is there a mobile app?</span>
              <svg
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center border-b py-4">
              <span className="flex-1">
                What about other chromium browsers?
              </span>
              <svg
                className="w-6 h-6 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <button className="mt-12 flex self-center btn btn-purple hover:bg-white hover:text-black">
              More info
            </button>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="bg-indigo-500 text-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="font-light uppercase text-center mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h1 className="text-3xl text-center">
              Stay up-to-date with what we're doing
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <input
                type="text"
                placeholder="Enter you email address"
                className="text-gray-900 focus:outline-none flex-1 px-2 py-3 rounded-md "
              />
              <button className=" flex self-center btn bg-red-500 hover:bg-white hover:text-black">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <h1>BookMark</h1>
            <ul className="flex text-white uppercase gap-12 text-xs">
              <li>Features</li>
              <li>Features</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12 md:mt-0">
            <li>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
};
