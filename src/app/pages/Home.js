import BGTech from "../../assets/images/BGTech.jpg";
import { Link } from "react-router-dom";
import { AutoPlaySlide } from "../components/Marquee/AutoPlaySlide";
import pe_slide_img from "../../assets/images/pengage_slide.jpg";
import lpr_slide_img from "../../assets/images/lpr_slide.jpg";
import traffic_slide_img from "../../assets/images/traffic_analysis_slide.jpg";
import trafficViolations_slide_img from "../../assets/images/traffic_violations_slide.jpg";
import noiseCancel_slide_img from "../../assets/images/noise_cancel_slide.jpg";
import noisedetect_slide_img from "../../assets/images/noise_detect_slide.jpg";
import logodetect_slide_img from "../../assets/images/logo_detect_slide.jpg";
import colordetect_slide_img from "../../assets/images/color_detect_slide.jpg";

export function Home() {
  const marqueeData = [
    {
      title: "Demographic Analysis",
      bio: "With Age and Gender",
      img: `https://images.unsplash.com/photo-1545603343-8356d34ed7bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxkaXZlcnNpdHklMjBhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: "Person Engagement",
      bio: "With dwell and wait times",
      img: pe_slide_img,
    },
    {
      title: "Footfall Analysis",
      bio: "With people count",
      img: `https://images.unsplash.com/photo-1522669830117-58a450cc6077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzeSUyMHN0cmVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: "Safety Compliance",
      bio: "With HardHat, and Safety Jacket",
      img: `https://images.unsplash.com/photo-1547447175-a68d11e30d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=517&q=80`,
    },
    {
      title: "License Plate Recognition",
      // bio: "With automatic license plate recognition",
      img: lpr_slide_img,
    },
    {
      title: "Traffic Analysis",
      bio: "With vehicle count and pedestrian detection",
      img: traffic_slide_img,
    },

    {
      title: "Traffic Violations",
      bio: "With Illegal parking, Speed violation, Red light violation, Wrong lane, and Stop Line violation detection",
      img: trafficViolations_slide_img,
    },

    {
      title: "Noise Cancellation",
      bio: "With AI powered noise detection and filtration",
      img: noiseCancel_slide_img,
    },
    {
      title: "Noise Detection",
      bio: "With AI powered noise detection and filtration",
      img: noisedetect_slide_img,
    },

    {
      title: "Logo Detection",
      // bio: "With AI powered noise detection and filtration",
      img: logodetect_slide_img,
    },
    {
      title: "Color Detection",
      // bio: "With AI powered noise detection and filtration",
      img: colordetect_slide_img,
    },
  ];

  return (
    <div className="select-none ">
      <main className="mt-10 md:mt-16 ">
        {/*================= Hero Section ===================*/}
        <div className="container py-20">
          <div className="grid md:grid-cols-2 items-center pt-10 sm:pt-0 justify-center gap-20">
            <div className="">
              <div className="text-center  md:mt-0  md:text-left w-full">
                <h1 className="text-4xl sm:text-3xl md:text-4xl uppercase lg:text-5xl xl:text-6xl  text-gray-800 font-bold leading-7 md:leading-10">
                  AI at the edge
                </h1>
                <p className="md:text-left mt-5 lg:mt-7  text-core-black  text-base sm:text-lg lg:max-w-lg lg:text-xl">
                  Guise AI at the Edge leverages local compute to extract
                  meaningful data, delivering better insights for enterprises.
                </p>
              </div>
            </div>
            <div className="">
              <img
                src={BGTech}
                className="md:h-hl md:w-wl lg:w-full object-cover lg:h-hxl rounded-lg shadow-xl  filter drop-shadow-2xl"
                alt="hero landing page img"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* <div className="bg-white container mx-auto testing min-h-full  grid lg:grid-cols-12 container py-[6rem]">
          <div className="col-span-full lg:col-span-6">
            <div className="text-center  md:mt-0  lg:text-left w-full">
              <h1 className="text-3xl sm:text-3xl md:text-4xl uppercase lg:text-5xl xl:text-6xl  text-gray-800 font-bold leading-7 md:leading-10">
                AI at the edge
              </h1>
              <p className="lg:text-left mt-5 lg:mt-7  text-core-black  text-base sm:text-lg lg:max-w-lg lg:text-xl">
                Guise AI at the Edge leverages local compute to extract
                meaningful data, delivering better insights for enterprises.
              </p>
            </div>
          </div>
          <div className="col-span-full flex  flex-1  flex-grow items-center pb-10 sm:pb-0 justify-center lg:col-span-6 ">
            <img
              src={BGTech}
              className=" bg-cover bg-center w-full  h-full  rounded-lg shadow-xl  filter drop-shadow-2xl   "
              alt="sdf"
              draggable="false"
            />
          </div>
        </div>
 */}
        {/* ============================= What we do? ========================== */}
        <section className="bg-bookmark-blue py-10 lg:py-20 ">
          <div className="   lg:px-5 container ">
            <div className="text-white flex  flex-col justify-center space-y-7 lg:space-y-14 items-center">
              <div className="flex justify-center flex-col items-center ">
                <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold lg:leading-tight">
                  What we do?
                </h2>
                <p className="mt-5 lg:mt-7   text-gray-400 text-center max-w-screen-lg text-lg lg:text-xl ">
                  Guise AI at the Edge is built to make AI easier to use with
                  low latency and at less bandwidth, while still maintaining
                  expert levels of accuracy, speed, and privacy. Our
                  hardware-agnostic solutions allow you to scale up with the
                  existing infrastructure.
                </p>
              </div>

              <Link
                to="/products"
                className="text-gray-100 px-4 rounded-sm py-2 md:py-2  text-lg uppercase font-semibold border-2 border-gray-100 hover:bg-gray-100  transform hover:scale-105 hoverTransition   hover:text-black "
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 h-full py-10  ">
          <div className="container">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl text-center font-semibold lg:leading-tight">
                Seamlessly integrate with our
                <span className="text-core-guise"> Edge APIs </span>
              </h2>
            </div>
          </div>
        </section>

        <section className=" py-10 container lg:py-20 overflow-hidden">
          <h1 className="text-3xl lg:text-4xl text-center  font-semibold lg:leading-tight">
            Run industry-specific models at the Edge for all your use cases
          </h1>
          <div className="">
            <AutoPlaySlide data={marqueeData} />
          </div>
        </section>

        <section className="bg-bookmark-blue py-10 lg:py-28">
          <div className="flex container space-y-12   flex-col justify-center items-center">
            <h2 className="text-2xl  text-center lg:text-4xl text-white  font-semibold lg:leading-tight">
              Get started with{" "}
              <span className="text-core-guise  ">Guise AI </span> at the Edge
            </h2>
            <Link to="/demo" className="">
              <div className="text-gray-100 px-4 rounded-sm py-2  text-lg uppercase  font-semibold border-2 border-gray-100 hover:bg-gray-100  transform hover:scale-105 hoverTransition   hover:text-black ">
                Book A DEMO
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
