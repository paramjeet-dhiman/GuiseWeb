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
    <div className="select-none">
      {/*================= Hero Section ===================*/}

      <section className="flex items-center justify-center h-screen  bg-white">
        <div className=" mt-10 lg:mt-20  px-10 lg:px-20 xl:px-20  grid lg:grid-cols-12 gap-10 lg:gap-10  ">
          <div className="col-span-full  lg:col-span-6 flex flex-col justify-center  w-full ">
            <div className="text-center  lg:text-left w-full">
              <h1 className="text-4xl lg:text-left tracking-wide lg:tracking-wide  font-bold  uppercase lg:text-5xl  xl:text-6xl">
                AI at the edge
              </h1>
              <p className=" mt-2 lg:mt-5 lg:text-left text-lg  sm:max-w-xl mx-auto lg:mx-0    lg:max-w-lg lg:text-xl">
                Guise AI at the Edge leverages local compute to extract
                meaningful data, delivering better insights for enterprises.
              </p>
            </div>
          </div>
          <div className="col-span-full flex items-center justify-center lg:col-span-6 ">
            <img
              src={BGTech}
              className="object-cover bg-cover bg-center sm:h-96 sm:w-wl lg:w-wl lg:h-hl rounded-lg shadow-xl  filter drop-shadow-2xl   "
              alt="sdf"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/*========================== Background Image with text ==========================*/}
      {/* <section className="lg:py-10">
        <div className=" lg:mt-20  px-10   md:px-20  lg:px-40  grid lg:grid-cols-12 gap-10 lg:gap-20  ">
          <div className="col-span-full lg:col-span-6  order-2 lg:order-1">
            <img
              className="object-cover bg-cover bg-center w-full h-full  rounded-lg shadow-xl  filter drop-shadow-2xl   "
              src={BGTech4}
              alt="sdf"
              draggable="false"
              loading="lazy"
            />
          </div>

          <div className="pb-10 col-span-full lg:col-span-6 flex flex-col justify-center w-full  order-1 lg:order-2">
            <div className="text-center lg:text-left w-full ">
              <h1 className="text-3xl font-bold uppercase  lg:tracking-tight lg:text-4xl">
                Target Data Where It Lives
              </h1>
              <div className="mt-2 lg:mt-5 text-center lg:text-justify text-base lg:text-xl  space-y-5 ">
                <p className="sm:max-w-lg sm:mx-auto lg:mx-0">
                  The need to overcome latency and bandwidth issues combined
                  with massive volumes of data is changing the topology of
                  distributed enterprises. Computing data at the edge is rapidly
                  growing, but how do you properly harness your untapped data?  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ============================= 6 SOLUTIONS CARDS ========================== */}
      <section className="bg-bookmark-blue h-full py-10 lg:py-20  ">
        <div className="px-10 lg:px-5">
          <div className="text-white flex  flex-col justify-center space-y-7 lg:space-y-14 items-center">
            <div className="flex justify-center flex-col items-center ">
              <h2 className="text-3xl lg:text-4xl xl:text-6xl text-center font-semibold lg:leading-tight">
                What we do?
              </h2>
              <p className="mt-4 lg:mt-8 text-gray-400 text-center lg:w-8/12 text-lg lg:text-xl ">
                Through the Edge approach we make AI easier to use with low
                latency and at less bandwidth, while still maintaining expert
                levels of accuracy, speed, and privacy. Our hardware-agnostic
                solutions allow you to scale up with the existing
                infrastructure.
              </p>
            </div>

            <Link
              to="/products"
              className="text-gray-100 px-4 rounded-sm py-2 md:py-2  text-lg uppercase font-semibold border-2 border-gray-100 hover:bg-gray-100  transform hover:scale-105 hoverTransition   hover:text-black ">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 h-full py-10  ">
        <div className="px-10 lg:px-20">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl text-center font-semibold lg:leading-tight">
              Seamlessly integrate with our
              <span className="text-core-guise"> Edge APIs </span>
            </h2>
          </div>
        </div>
      </section>

      <section className=" py-10 lg:py-20 overflow-hidden">
        <h1 className="text-3xl lg:text-4xl text-center  font-semibold lg:leading-tight">
          Run industry-specific models at the Edge for all your use cases
        </h1>
        <div className="">
          <AutoPlaySlide data={marqueeData} />
        </div>
      </section>

      <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="flex px-10 lg:px-8 space-y-10   flex-col justify-center items-center">
          <h2 className="text-2xl  text-center lg:text-4xl   font-semibold lg:leading-tight">
            Get started with{" "}
            <span className="text-core-guise  ">Guise AI </span> at the Edge
          </h2>
          <Link to="/demo" className="">
            <div className="text-black px-4 rounded-sm py-2  text-lg uppercase  font-semibold border-2 border-black hover:bg-black  transform hover:scale-105 hoverTransition   hover:text-white ">
              Book A DEMO
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
