import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ isOpen, handleOpen, closeMobileMenu }) => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
      if (show && ref2.current && !ref2.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle, show]);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleMouseLeave = () => {
    setToggle(false);
    setShow(false);
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="z-50 bg-white fixed top-0 left-0 right-0 shadow-md  select-none py-2 text-gray-900">
      <div className=" mx-auto px-4  md:px-10 ">
        <div className="flex justify-between items-center">
          <div>
            {/* Logo */}
            <div className="flex items-center  px-2 hover:text-gray-600 ">
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "lime" : "",
                })}
                to="/"
                onClick={closeMobileMenu}>
                <svg
                  className="cursor-pointer h-5 lg:h-6 "
                  viewBox="0 0 5749 947"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="5748.99" height="947" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1">
                      <use
                        xlinkHref="#image0_122:2"
                        transform="translate(-0.000776963) scale(0.000695041 0.00421941)"
                      />
                    </pattern>
                    <image
                      id="image0_122:2"
                      width="1441"
                      height="237"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="hidden lg:flex  items-center space-x-8 ">
            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2  text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/solutions">
                Solutions
              </NavLink>
            </div> */}

            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/team">
                Team
              </NavLink>
            </div> */}

            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2  text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/product-review">
                Review
              </NavLink>
            </div> */}

            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2  text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/products">
                Products
              </NavLink>
            </div>

            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/technology">
                Technology
              </NavLink>
            </div>
            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/casestudy">
                Case Study
              </NavLink>
            </div> */}

            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/research">
                Resources
              </NavLink>
            </div> */}

            <div className="relative" ref={ref2}>
              <div
                onClick={handleShow}
                onMouseOver={() => {
                  handleShow();
                  setToggle(false);
                }}
                // onMouseEnter={handleToggle}
                className="flex items-center  px-2 cursor-pointer  tracking-wide py-3 transition-all duration-1000 text-lg font-medium hover:text-gray-600 ">
                Resources
                {!show ? (
                  <svg
                    className="w-7 h-7 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                )}
              </div>

              {show ? (
                <div
                  onMouseLeave={handleMouseLeave}
                  className="absolute right-0 py-3 mt-3 space-y-5 bg-white flex flex-col justify-center  rounded-md shadow-xl  w-48  transform hover:scale-105  transition-all duration-300  origin-top-right ">
                  <div>
                    <NavLink
                      onClick={handleShow}
                      to="/404"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      Blogs
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      onClick={handleShow}
                      to="/videos"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      Videos
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      onClick={handleShow}
                      to="/404"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      Research
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      onClick={handleShow}
                      to="/404"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      White Papers
                    </NavLink>
                  </div>
                </div>
              ) : null}
            </div>
            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/partners">
                Partners
              </NavLink>
            </div> */}

            {/* <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "px-2 text-social-facebook border-b-4 text-lg border-social-facebook  tracking-wide font-bold py-5 transition-all duration-300"
                    : "px-2 cursor-pointer  tracking-wide py-5 text-lg font-medium hover:text-gray-600 "
                }
                to="/partners">
                Partners
              </NavLink>
            </div> */}

            {/*    <div @click.away="open = false" className="relative" x-data="{ open: false }">
        <button @click="open = !open" className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>Dropdown</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :className="{'rotate-180': open, 'rotate-0': !open}" className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
            <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
            <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
          </div>
        </div>
      </div>   */}

            <div className="relative" ref={ref}>
              <div
                onClick={handleToggle}
                onMouseOver={() => {
                  handleToggle();
                  setShow(false);
                }}
                // onMouseEnter={handleToggle}
                className="flex items-center  px-2 cursor-pointer  tracking-wide py-3 transition-all duration-1000 text-lg font-medium hover:text-gray-600 ">
                Company
                {!toggle ? (
                  <svg
                    className="w-7 h-7 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                )}
              </div>

              {toggle ? (
                <div
                  onMouseLeave={handleMouseLeave}
                  className="absolute right-0 py-3 mt-3 space-y-5 bg-white flex flex-col justify-center  rounded-md shadow-xl  w-48  transform hover:scale-105  transition-all duration-300  origin-top-right ">
                  <div>
                    <NavLink
                      onClick={handleToggle}
                      to="/careers"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      Careers
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      onClick={handleToggle}
                      to="/about"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      About Us
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      onClick={handleToggle}
                      to="/contact"
                      className="block px-4 py-2 mt-2 text-lg font-medium bg-transparent hover:bg-gray-200  dark-mode:bg-transparent md:mt-0 hover:text-gray-900 text-center  ">
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-gray-900 border-2 border-gray-900  text-white text-lg font-semibold  rounded"
                    : "btn btn-black border-0 text-lg font-semibold ring-1 ring-core-black rounded"
                }
                to="/demo">
                Book a Demo
              </NavLink>
            </div>
          </div>

          {/* <div className="hidden lg:flex  items-center  ">
            <div>

            </div>
          </div> */}

          {/****************** Mobile View Buttons ********************/}
          <div className="lg:hidden flex items-center  ">
            {!isOpen ? (
              <button
                className="mobile-menu-button transform text-gray-900  transition-all duration-500 hover:scale-125 "
                onClick={handleOpen}>
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="mobile-menu-button text-gray-900  transform transition-all duration-500 hover:scale-125"
                onClick={handleOpen}>
                <svg
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
