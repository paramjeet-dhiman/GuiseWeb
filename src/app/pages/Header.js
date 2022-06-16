import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const MobileNavItems = [
  { title: "Products", link: "/products" },
  { title: "Research", link: "/resources/research" },
  { title: "Careers", link: "/company/careers" },
  { title: "About Us", link: "/company/about" },
  { title: "Contact Us", link: "/company/contact" },
  { title: "Book a Demo", link: "/demo" },
];
export const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen(!isOpen);
  const closeMobileMenu = () => setisOpen(false);

  return (
    <header className=" ">
      <Navbar
        isOpen={isOpen}
        handleOpen={handleOpen}
        closeMobileMenu={closeMobileMenu}
      />

      <div className="relative lg:hidden">
        {isOpen ? (
          <nav className="bg-white z-40  flex items-center fixed top-0 left-0 right-0 h-screen  text-core-black">
            <div className="w-full container">
              {MobileNavItems.map((item, i) => (
                <Link
                  to={item.link}
                  className="cursor-pointer  hover:text-social-facebook "
                  key={i}
                  onClick={closeMobileMenu}>
                  <div className="flex border-b border-gray-400 py-5 justify-between items-center px-10  transition-all ease-in-out duration-300">
                    <span className="text-xl font-normal">{item.title}</span>
                    <svg className="w-4 h-4 " viewBox="0 0 19 19" fill="none">
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
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
};
