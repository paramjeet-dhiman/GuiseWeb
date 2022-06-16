import { Link } from "react-router-dom";

export const DemoComponent = () => {
  return (
    <section className="bg-bookmark-blue py-20 lg:py-36 ">
      <div className="container px-10 lg:px-0">
        <h4 className="text-2xl lg:text-5xl text-white uppercase font-bold text-center">
          See what <span className="text-core-guise">Guise AI</span> can do for
          you
        </h4>
        <div className="flex justify-center items-center mt-5 lg:mt-14 ">
          <Link to="/demo">
            <div className="text-white px-6 rounded-sm py-2 md:py-3  text-lg lg:text-xl uppercase  font-semibold border-2 border-white hover:bg-white  hover:scale-105 hoverTransition  hover:text-black ">
              Book A DEMO
            </div>
            {/* <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
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
            </svg> */}
          </Link>
        </div>
      </div>
    </section>
  );
};
