import { useEffect, useState } from "react";

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
      className="right-2 fixed   z-10 cursor-pointer "
      onClick={scrollToTop}
      onKeyPress={scrollToTop}
      tabIndex="0"
      role="button"
      style={{ display: visible ? "inline" : "none" }}>
      <div className=" fixed shadow-md lg:p-2 bottom-20 bg-white right-5  lg:right-10 animate-bounce  hidden md:flex items-center justify-center   hover:bg-blue-500 text-gray-400  hover:text-white my-auto  rounded-full  hover:shadow-xl hoverTransition">
        <svg
          className="w-10 h-10 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
