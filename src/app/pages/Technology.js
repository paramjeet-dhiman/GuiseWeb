import React from "react";
import { Link } from "react-router-dom";
import { StayUpToDate } from "./StayUpToDate";

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
                src={`https://images.pexels.com/photos/461082/pexels-photo-461082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
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
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
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
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
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
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
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
                  src={`https://www.tibco.com/blog/wp-content/uploads/2021/02/TIBCO_MDMKnowledgeIsPower-scaled-e1613067324649-800x420.jpg`}
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

      <StayUpToDate />
    </div>
  );
};
