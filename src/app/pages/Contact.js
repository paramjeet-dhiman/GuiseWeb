import { useRef, useState } from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { sendForm } from "@emailjs/browser";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const { name, email, message } = data;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      sendForm(
        "service_cz0zrl2",
        "template_c64sz48",
        form.current,
        "user_fDYUY29OPKkusPwKGheJL"
      );

      const response = await fetch(
        "https://v1.nocodeapi.com/paramjeet/google_sheets/OtWWiwylwJgBsqDe?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        message: "",
      });
      setSending(false);
    } catch (err) {
      // console.log(err)
      setSending(false);
    }
  };

  return (
    <div>
      <HeroHeader
        img={`https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
        title="Contact Us"
      />

      {/* <section className="bg-white py-10 lg:py-20  ">
        <div className="sm:w-3/4 lg:w-6/12 mx-auto px-12 lg:px-2 ">
          <h4 className="text-center uppercase text-sm font-semibold md:text-lg text-social-instagram mb-4">
            Get In Touch
          </h4>

          <p className="text-gray-600 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Lets get this conversation started. Tell us a bit about yourself,
            and we'll get in touch as soon as we can.
          </p>
        </div>
      </section> */}

      <section className="bg-white py-20 pb-28 ">
        <h1 className="text-4xl uppercase mb-10  lg:text-4xl font-bold text-center">
          Get In Touch
        </h1>
        <div className="grid  w-full  gap-20">
          {/* <div className="flex items-center px-5 lg:px-0 col-auto md:col-span-5  text-gray-800">
            <div className="w-full ">
              <div className="grid gap-8">
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className=" shadow-lg  flex items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-blue-100 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Address
                      </div>
                      <div className="font-medium text-lg">
                        XXX XXXX, Floor 4 San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className="flex shadow-lg  items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-green-100 text-green-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Phone
                      </div>
                      <div className="font-medium text-lg">+45 77 99 77 99</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3 shadow-lg ">
                  <div className="flex flex-row items-center justify-center bg-white border border-gray-100 shadow-sm rounded p-16">
                    <div className="flex shadow-lg items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-red-100 text-red-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm font-semibold  text-gray-500">
                        Mail
                      </div>
                      <div className="font-medium text-lg">mail@guise.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className=" col-span-full ">
            <div className="container max-w-screen-xl">
              <div className="flex flex-wrap justify-center  ">
                <div className="w-full  ">
                  <div className="relative bg-white rounded-md  border border-gray-100  flex flex-col min-w-0 shadow-lg filter drop-shadow-lg ">
                    <div className="flex-auto p-5 lg:p-10 ">
                      {/* <h4 className="text-2xl font-semibold">
                        Want to work with us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                        Complete this form and we will get back to you
                      </p> */}
                      <form ref={form} onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3 ">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="full-name">
                            Full Name
                          </label>
                          <input
                            id="full-name"
                            type="text"
                            value={name}
                            name="name"
                            onChange={handleInput}
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            name="email"
                            onChange={handleInput}
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase  mb-2 text-sm text-gray-600 font-semibold px-1"
                            htmlFor="message">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows="4"
                            cols="80"
                            value={message}
                            name="message"
                            onChange={handleInput}
                            required
                            className="px-3 py-4  placeholder-gray-300 text-gray-800 bg-white border-2 border-gray-200 outline-none font-medium text-sm lg:text-lg focus:border-gray-600 rounded-lg   shadow focus:outline-none w-full"
                            placeholder="Type a message..."></textarea>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="btn btn-black   active:bg-gray-600 xl:text-lg font-medium uppercase px-6 py-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit">
                            {sending ? (
                              <div className="flex items-center justify-center  ">
                                <svg
                                  role="status"
                                  className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                                Sending...
                              </div>
                            ) : (
                              "Send Message"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-32 relative block ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Build something
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                inventore incidunt deleniti, voluptates, eligendi iure doloribus
                asperiores quaerat in ne
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>{" "}
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p className="mt-2 mb-4 text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                sint excepturi perspiciatis est impedit!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-white">
        <div className="flex items-center justify-between">
          <div className=" w-full md:w-7/12 mb-32 md:m-0 md:order-2">
            <div className="flex justify-center relative">
              <img
                className="relative z-10 rounded-md self-start"
                src="https://nexo.io/media/pages/about-us/cc0d84e3f5-1631610879/nexcareers.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col w-full md:w-5/12 md:pr-64 relative">
            <h2 className="text-xl md:text-5xl mb-16">Careers </h2>
            <h3 className="b-headline mb-16">
              We are looking for exceptionally talented people to join our team{" "}
            </h3>
            <div className="s-text2 m-clip text-gray-500">
              <p>
                Imagine yourself contributing to the development of one of the
                most dynamic blockchain-based FinTech companies in the world,
                redefining how financial services are conducted. This innovative
                company is Nexo.
              </p>{" "}
            </div>
            <a
              className="b-button b-button--m b-button--icon-r b-button--indigo mt-32"
              href="https://nexo.breezy.hr"
              target="_blank"
              rel="noopener noreferer">
              View all openings{" "}
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};
