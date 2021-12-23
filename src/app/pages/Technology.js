import React from "react";
import { Link } from "react-router-dom";

export const Technology = () => {
  return (
    <div className="pt-10 h-full ">
      {/* ========================== HERO Section ====================  */}
      <section className=" md:pt-20 lg:pt-0 relative h-screen grid place-content-center bg-bookmark-blue  ">
        <div className="lg:px-28 flex flex-col-reverse lg:flex-row items-center  lg:mt-20">
          <div className="flex space-y-10 lg:space-y-0 lg:flex-row flex-col ">
            <div className="px-10 flex items-center text-center lg:text-left w-full md:px-16 lg:w-1/2">
              <div className="w-full ">
                {/* <p className="font-medium text-sm lg:text-lg text-social-instagram mb-2">
                  Technology
                </p> */}
                <h2 className="text-5xl font-semibold upper text-gray-100 mb-4 md:text-7xl  lg:w-3/4">
                  Transforming AI for the edge
                </h2>

                <p className="text-gray-400 lg:w-3/4 text-sm md:text-lg text-center lg:text-left mb-6">
                  Our goal is to push AI to the edge, making it easy for you to
                  leverage AI and its full potential to boost your business. We
                  employ state-of-the-art tech to make AI accessible and
                  affordable, gone are the days when sophisticated hardware was
                  required to incorporate an AI solution.
                </p>
                <div className="flex justify-center lg:justify-start flex-wrap gap-6 py-5">
                  <Link to="/demo">
                    <button className="btn border text-white text-sm md:text-xl font-semibold shadow-md hover:shadow-xl transform hover:scale-105  hover:bg-core-black transition-all ease-in-out duration-500">
                      Book a Demo
                    </button>
                  </Link>
                  {/* <button
                    className="btn bg-gray-300 text-gray-900 text-sm md:text-lg font-semibold rounded hover:bg-gray-400"
                    href="#">
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>

            <div className=" lg:w-1/2  ">
              <img
                src={`https://media.istockphoto.com/photos/virtual-intelligence-and-network-security-picture-id1304572643?k=20&m=1304572643&s=612x612&w=0&h=HZwEWHBU1Pou7FUBIDY-yvWenP36oPyDZetXfMXYWAY=`}
                className="w-full h-full"
                alt="sdf"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BUILD PROCESS ========================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40  gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center  space-y-10 lg:space-y-0">
            <div className="w-96 h-96   text-core-black  shadow-2xl flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-5xl font-black uppercase">
                Build
              </h2>
            </div>
            <div>
              <svg className="h-12" viewBox="0 0 2107 712">
                <path
                  d="M2095.01 331.8L1717.21 3.89999C1714.31 1.39999 1710.61 0 1706.71 0H1618.21C1610.81 0 1607.41 9.2 1613.01 14L1963.21 318H1670.61H1378.01C1373.61 318 0.501953 318 0.501953 318V394C0.499374 394 1373.61 394 1378.01 394H1963.11L1612.91 698C1607.31 702.9 1610.71 712 1618.11 712H1709.61C1711.51 712 1713.41 711.3 1714.81 710L2095.01 380.2C2098.47 377.19 2101.25 373.472 2103.15 369.297C2105.05 365.122 2106.03 360.588 2106.03 356C2106.03 351.412 2105.05 346.878 2103.15 342.703C2101.25 338.528 2098.47 334.81 2095.01 331.8Z"
                  fill="#24282f"
                />
              </svg>
            </div>
            <div className=" w-96 h-96   text-core-black  shadow-2xl flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-5xl font-black uppercase">
                Optimize
              </h2>
            </div>
            <div>
              <svg className="h-12" viewBox="0 0 2107 712">
                <path
                  d="M2095.01 331.8L1717.21 3.89999C1714.31 1.39999 1710.61 0 1706.71 0H1618.21C1610.81 0 1607.41 9.2 1613.01 14L1963.21 318H1670.61H1378.01C1373.61 318 0.501953 318 0.501953 318V394C0.499374 394 1373.61 394 1378.01 394H1963.11L1612.91 698C1607.31 702.9 1610.71 712 1618.11 712H1709.61C1711.51 712 1713.41 711.3 1714.81 710L2095.01 380.2C2098.47 377.19 2101.25 373.472 2103.15 369.297C2105.05 365.122 2106.03 360.588 2106.03 356C2106.03 351.412 2105.05 346.878 2103.15 342.703C2101.25 338.528 2098.47 334.81 2095.01 331.8Z"
                  fill="#24282f"
                />
              </svg>
            </div>
            <div className="w-96 h-96   text-core-black  shadow-2xl flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-5xl font-black uppercase">
                Deploy
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== Continuous Learning ======================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Continuous Learning
          </h1>
          <p className="text-gray-800 font-normal  text-lg lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            With our own home-grown algorithms, we are able to make smarter AI
            applications that learn, adapt and improve over time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.eweek.com/wp-content/uploads/2020/10/Continous.dev_.15x10.jpg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Intelligent training and deployment
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Build with CL
                  </h2>
                  <p className="font-light">
                    Using CL, we are able to improve training time by several
                    measures, leading to faster and intelligent build cycles.
                  </p>
                </div>

                <div className="lg:pl-2 ">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Deploy with CL
                  </h2>
                  <p className="font-light">
                    Continuous learning helps applications retain knowledge over
                    time, thereby helping it self-learn and adapt to the
                    incoming data. AI applications today suffer from loss of
                    potential over time and need to be revised and retrained
                    over a period of time owing to the change in trend of real
                    life data. With CL we are able to increase the time
                    intervals between these re-training periods by a significant
                    amount.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Intelligent
              </h2>
              <p className="mb-8  font-medium text-gray-400">Build processes</p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-7xl font-black">10x</h2>
              <p className="mb-8 font-medium text-gray-400">
                Increase in retraining intervals
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Self Adapting
              </h2>
              <p className="mb-8  font-medium text-gray-400">Applications</p>
            </div>
          </div>
        </div>

        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              An innovative approach to mimic human learning
            </h1>
            <p className="text-gray-800 font-medium  text-lg lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Our home-grown continuous learning algorithm with the help of a
              self-adapting clustering technology is able to automatically
              adjust classification boundaries with incoming real-time data.
              With this, you no longer need to worry about a drop in accuracy
              due to a shift in distribution of data that occurs daily in the
              real world.
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== Knowledge Distillation ======================== */}

      <section className="bg-bookmark-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Knowledge Distillation
          </h1>
          <p className="text-gray-800 font-medium  text-lg lg:text-xl lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            A guided approach to training lightweight AI applications for the
            edge, that perform several times better than self learning.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://miro.medium.com/max/1000/1*QDHyTQTgjvsvdL7poeSDhA.jpeg`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Efficient learning
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2> */}
                  <p className="font-light">
                    Traditional AI applications store an ensemble of models,
                    making them heavy and difficult to operate on general
                    purpose devices due to the lack of computational resources.
                    Whereas lightweight models suffer from exploration and short
                    term memory loss over the vast data sets that are required
                    to have a production quality application. Larder models have
                    a larger explorative capability due to the larger memory
                    retention, but this can lead to storing irrelevant
                    information as well that does not contribute to the outcome.
                  </p>
                </div>

                <div className="lg:pl-2 ">
                  {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2> */}
                  <p className="font-light">
                    Knowledge distillation employs the use of a guiding
                    heavyweight model (the teacher) to help train a lighter
                    model (student). In this manner, the heavy lifting is done
                    by the teacher model, hence creating a far more intelligent
                    student model that does not suffer from short term memory
                    loss but also retains relevant information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Guided
              </h2>
              <p className="mb-8  font-medium text-gray-400">learning</p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-7xl font-black">10x</h2>
              <p className="mb-8 font-medium text-gray-400">
                reduced memory footprint
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Balanced
              </h2>
              <p className="mb-8  font-medium text-gray-400">
                Accuracy and Speed
              </p>
            </div>
          </div>
        </div>
        <section className=" py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              A Guided Approach to Learning
            </h1>
            <p className="text-gray-800 font-medium  text-lg lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              With the help of a teacher model that has a relatively larger
              exploration capacity and increased memory retention capabilities,
              the student model is able to learn better, and consume far larger
              data for learning. With this approach, we are able to generate
              applications that can run with significantly smaller memory
              footprint and comparable accuracies.
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== Neural Architecture Search ======================== */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Neural Architecture Search
          </h1>
          <p className="text-gray-800 font-medium text-lg  lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Automated assistance in picking out the best approach to handle the
            problem at hand. With NAS we are able to develop, experiment and
            finalize the best solution in significantly lesser time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://miro.medium.com/max/14676/1*gGBUBuRiwJvmINzQSeOl1w.png`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                AI Assisted development
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2> */}
                  <p className="font-light">
                    Experimentation and testing to find the best architecture
                    have traditionally been the method employed by ML and AI
                    developers to solve a problem. This method however had a
                    significant turn around time to find the best architecture.
                    With the introduction of NAS, the best fitting solutions are
                    easier to find, making development and updates significantly
                    faster.
                  </p>
                </div>

                <div className="lg:pl-2 ">
                  {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2> */}
                  <p className="font-light">
                    NAS has assisted our engineers to develop solutions from a
                    far smaller search space, leading to faster experimentation
                    and better solutions. With such technology at hand, our
                    applications are updated and tested much more quickly,
                    leading to data points that help us develop customized and
                    better solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Quicker
              </h2>
              <p className="mb-8  font-medium text-gray-400">
                experimentation and development
              </p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-7xl font-black">10x</h2>
              <p className="mb-8 font-medium text-gray-400">faster updates</p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">AI</h2>
              <p className="mb-8  font-medium text-gray-400">
                Assisted Development
              </p>
            </div>
          </div>
        </div>
        <section className="bg-white py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              A Quicker Approach to building solutions
            </h1>
            <p className="text-gray-800 font-medium  text-lg lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Exploration of newer architectures and solutions for various
              platforms become increasingly fast. Hyperparameter tuning helps
              arrive at production grade solutions a lot faster.
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* ======================== hyper dimensional computing ======================== */}

      <section className="bg-bookmark-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            Hyper Dimensional Computing
          </h1>
          <p className="text-gray-800 font-medium  text-lg   lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`data:image/png;base64,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`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati fugit architecto, veritatis ipsa corporis,
                    excepturi illo iure molestias ut voluptate sit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Intelligent
              </h2>
              <p className="mb-8  font-medium text-gray-400">Build processes</p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-7xl font-black">10x</h2>
              <p className="mb-8 font-medium text-gray-400">
                Increase in retraining intervals
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Self Adapting
              </h2>
              <p className="mb-8  font-medium text-gray-400">Applications</p>
            </div>
          </div>
        </div>
        <section className=" py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              How it Works?
            </h1>
            <p className="text-gray-800 font-medium  text-lg lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-4  mb-4 lg:mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container py-10">
            <img
              className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1556%2F1*tTEDSbllMhT0o2NKOIcjog.png&f=1&nofb=1`}
              alt="San Francisco skyline"
            />
          </div>
        </section>
      </section>

      {/* =================================== AI On Edge============================ */}

      <section className="bg-white py-20 lg:mt-10">
        <div className="sm:w-3/4 container lg:w-6/12 mx-auto px-12 ">
          {/* <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Technology
          </h4> */}
          <h1 className="text-3xl w-full lg:text-5xl font-bold text-center text-bookmark-blue">
            AI On The Edge
          </h1>
          <p className="text-gray-800 font-medium text-lg   lg:text-xl  lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Quibusdam excepturi numquam voluptatem alias adipisci magnam
            temporibus similique? Ipsam fugiat natus corrupti fuga facilis?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  mt-10 lg:py-20 lg:px-40 gap-10 ">
          <div className=" flex flex-col lg:flex-row items-center  justify-between  gap-10">
            <div className=" w-full px-10 lg:px-0 lg:w-6/12 md:m-0">
              <div className="flex justify-center relative">
                <img
                  className="shadow-xl w-full h-full"
                  src={`https://www.rcrwireless.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-03-at-9.12.39-AM.png`}
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-10 lg:px-0 lg:pl-20 lg:w-6/12 ">
              <h2 className="text-3xl lg:text-5xl font-medium mb-5 lg:mb-5">
                Lorem ipsum dolor sit amet
              </h2>

              <div className="text-lg lg:text-xl space-y-5 text-gray-500">
                <div className="lg:pl-2 lg:mb-10">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    See how many people are coming to your site and watch your
                    business grow!
                  </p>
                </div>

                <div className="lg:pl-2 ">
                  <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Lorem ipsum
                  </h2>
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque nostrum facere, quia nesciunt debitis quis sint
                    aperiam obcaecati fugit architecto, veritatis ipsa corporis,
                    excepturi illo iure molestias ut voluptate sit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-0 py-10  lg:mt-0  lg:py-20 lg:px-40 gap-10  ">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between items-center lg:px-36 space-y-10 lg:space-y-0">
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Intelligent
              </h2>
              <p className="mb-8  font-medium text-gray-400">Build processes</p>
            </div>
            <div className=" w-96 h-96 lg:w-96 lg:h-96   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-1 text-3xl lg:text-7xl font-black">10x</h2>
              <p className="mb-8 font-medium text-gray-400">
                Increase in retraining intervals
              </p>
            </div>
            <div className="w-96 h-96 lg:w-80 lg:h-80   text-core-black hoverTransition shadow-2xl transform lg:scale-110 lg:hover:scale-105 flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-3xl lg:text-4xl font-semibold">
                Self Adapting
              </h2>
              <p className="mb-8  font-medium text-gray-400">Applications</p>
            </div>
          </div>
        </div>

        <section className=" py-10  lg:py-20  ">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 mb-5 ">
            <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-bookmark-blue">
              Deployment Devices
            </h1>
            <p className="text-gray-800 font-medium text-lg lg:text-xl pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti inventore amet atque. Quod culpa aspernatur
              ratione quaerat sit necessitatibus obcaecati modi tempore voluptas
            </p>
          </div>

          <div className="container px-10 space-y-5  lg:space-y-0 lg:px-0 w-full  lg:grid grid-cols-1  items-center md:grid-cols-2 lg:grid-cols-4 gap-16 py-10 ">
            {[
              `https://miro.medium.com/max/336/1*glD7bNJG3SlO0_xNmSGPcQ.png`,
              `https://download.logo.wine/logo/Nvidia/Nvidia-Logo.wine.png`,
              `https://techstory.in/wp-content/uploads/2018/09/Intel.png`,
              `https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN.png`,
            ].map((item) => (
              <div
                key={item}
                className="flex  justify-center hoverTransition transform hover:scale-105 text-gray-900 bg-bookmark-offWhite  border shadow-xl rounded-full w-52 h-52 p-10">
                <img
                  src={item}
                  className="w-full h-full  "
                  alt="sdf"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* ======================== Carrers ======================== */}

      <section className="flex flex-col lg:flex-row px-10 py-10 bg-bookmark-smoke lg:py-20 lg:px-40 gap-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" w-full lg:w-7/12 mb-10 md:m-0 md:order-2">
            <div className="flex justify-center relative">
              <img
                className="relative z-10 rounded-md self-start w-full h-full"
                src="https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                draggable={false}
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-4/12">
            <h2 className="text-3xl lg:text-5xl font-medium mb-4">Careers </h2>
            <h3 className="text-lg lg:text-3xl text-gray-700 mb-6">
              We are looking for exceptionally talented people to join our team
            </h3>
            <div className="text-lg lg:text-xl  text-gray-500">
              <p>
                Imagine yourself contributing to the development of one of the
                most dynamic FinTech companies in the world.This innovative
                company is Guise.
              </p>{" "}
            </div>
            <Link to="/careers/jobs">
              <button
                className="btn-small text-lg lg:text-xl bg-gray-900 hover:bg-gray-700 text-white font-semibold  mt-8"
                target="_blank"
                rel="noopener noreferer">
                View all openings
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
