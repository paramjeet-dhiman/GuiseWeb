import React, { useEffect, useState } from "react";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return function cleanup() {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className=" hidden right-2 fixed md:right-10 lg:right-20 bottom-24 z-10 cursor-pointer "
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}>
      <div className="flex items-center justify-center   hover:bg-blue-500 text-gray-300  hover:text-white my-auto  rounded-full  hover:shadow-xl hoverTransition">
        <svg
          className="h-6 w-6 md:w-10 md:h-10 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
