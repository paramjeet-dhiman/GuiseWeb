import BGJoin from "../../assets/images/AboutJoin.jpg";
import BGCareers from "../../assets/images/BGcareers.jpg";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";

export const Carrers = () => {
  return (
    <div className="">
      <HeroHeader img={BGCareers} title={"Careers"} />

      <section className="bg-bookmark-white py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center  container  gap-y-10">
          <div className="w-full lg:w-1/2  order-2 lg:order-1">
            <h1 className="text-core-black font-semibold text-3xl lg:text-4xl lg:w-5/6 lg:leading-tight ">
              Are you ready to share your expertise?
            </h1>
            <p className="text-core-black  mt-5 lg:mt-7 text-base md:text-lg lg:text-xl   lg:w-5/6">
              We're always looking for talented, creative and passionate people
              to join our team. If you're interested in opportunities at our
              company, we'd love to hear from you.
            </p>

            <div>
              <a
                href="https://www.linkedin.com/company/guise-ai/jobs/"
                target="_blank"
                rel="noreferrer noopener">
                <button className="btn rounded-sm px-4  py-2  text-lg  bg-blue-500 hover:bg-blue-600 text-white font-semibold transform hover:scale-105 hoverTransition  mt-8">
                  Job openings
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              className="object-cover w-full h-full bg-cover bg-center  rounded-lg shadow-xl  filter drop-shadow-2xl  "
              src={BGJoin}
              alt=""
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="container px-10 lg:px-0">
          <div className="  text-sm md:text-2xl font-light space-y-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, eum
              dignissimos, obcaecati placeat in consectetur, accusamus error
              nesciunt delectus harum repellat deleniti rerum doloribus
              voluptatum ex ipsa! Asperiores, consequuntur dolor!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae error similique nobis reprehenderit voluptas nam
              tempora, sit esse quam, velit perspiciatis aspernatur. Itaque, at
              et? Officiis voluptates cum maxime omnis.
            </p>
          </div>
        </div>
      </section>
 */}
      {/* <section className="bg-bookmark-blue py-10 lg:py-20 mt-10 lg:mt-10 ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-12 lg:px-2 py-20 ">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:font-bold text-center text-white">
            We're here to support the whole you
          </h1>
          <div className="text-gray-400 font-medium text-sm lg:text-base pl-2 lg:text-center sm:w-3/4  container  text-center  lg:w-11/12 mt-2 md:mt-4">
            Guise AI offers benefits that ensure you and your family feel
            supported, safe, and healthy—whether working onsite or working from
            home.
          </div>
        </div>

        <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-5  text-gray-200">
          <div className="w-full ">
            <div className="relative flex flex-col h-full p-8 space-y-10 ">
              <div className="flex items-center mb-2 text-base  space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p>Flexible vacation</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p>Paid holidays</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"></path>
                  </svg>
                </span>
                <p>Community volunteering programs</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e"
                    viewBox="0 0 24 24">
                    <path
                      d="M0 0h24v24H0V0zm13.97 21.49c-.63.23-1.29.4-1.97.51.68-.12 1.33-.29 1.97-.51zM12 22c-.68-.12-1.33-.29-1.97-.51.64.22 1.29.39 1.97.51z"
                      fill="none"
                    />
                    <path d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z" />
                    <path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z" />
                  </svg>
                </span>

                <p>Monthly wellness stipend</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e"
                    viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                  </svg>
                </span>
                <p>On-site gym in SF HQ</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5-1.978-1.187-7.084-3.937-9.132-8.5h4.698l.934-1.556 3 5L13.566 13H17v-2h-4.566l-.934 1.556-3-5L6.434 11H2.21C2.074 10.363 2 9.696 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                  </svg>
                </span>
                <p>Medical, dental & vision coverage</p>
              </div>{" "}
            </div>
          </div>

          <div className="w-full ">
            <div className="relative flex flex-col h-full p-8 space-y-10  ">
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2z" />
                    <path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759" />
                    <circle cx="12" cy="16" r="2" />
                    <path d="M10 10h4" />
                  </svg>
                </span>
                <p>Paid parental leave</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z" />
                  </svg>
                </span>
                <p>401k matching program</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                  </svg>
                </span>
                <p>Healthy meals & snacks for onsite employees</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <rect fill="none" height="24" width="24" />
                    <path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z M18,11.09c0,4-2.55,7.7-6,8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z" />
                  </svg>
                </span>
                <p>Mental health support</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <circle cx="8.5" cy="14.5" r="1.5"></circle>
                    <circle cx="15.5" cy="14.5" r="1.5"></circle>
                    <path d="M18.87 3.34A3.55 3.55 0 0 0 16.38 2H7.62a3.47 3.47 0 0 0-2.5 1.35A4.32 4.32 0 0 0 4 6v12a1 1 0 0 0 1 1h2l-2 3h2.32L8 21h8l.68 1H19l-2-3h2a1 1 0 0 0 1-1V6a4.15 4.15 0 0 0-1.13-2.66zM7.62 4h8.72a1.77 1.77 0 0 1 1 .66 3.25 3.25 0 0 1 .25.34H6.39a2.3 2.3 0 0 1 .25-.35A1.65 1.65 0 0 1 7.62 4zM6 8V7h12v3H6zm12 9H6v-5h12z"></path>
                  </svg>
                </span>
                <p>Commuter benefits for onsite employees</p>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="relative flex flex-col h-full p-8 space-y-10 ">
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="14.5" cy="10.5" r="1.25" />
                    <circle cx="9.5" cy="10.5" r="1.25" />
                    <path d="M22.94 11.34c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66 0 .23.02.45.06.66.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17.04-.21.06-.43.06-.66 0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zm-7 3c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3z" />
                  </svg>
                </span>
                <p>Fertility & family expansion benefits</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="#f4511e"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <p>Monthly social events</p>
              </div>
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <p>Quarterly offsites & working retreats</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15.002 12.9a5 5 0 1 0 -3.902 -3.9"></path>
                    <path d="M15.002 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"></path>
                  </svg>
                </span>
                <p>Professional development programs</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <p>Guise AI Community Groups</p>
              </div>{" "}
              <div className="flex items-center mb-2 text-base space-x-4   font-medium tracking-wide text-gray-200">
                <span className="inline-flex items-center justify-center flex-shrink-0  text-gray-200 rounded-full bg-blue-1300">
                  <svg
                    className="w-8 h-8 text-bookmark-orange"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                    <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                    <line x1="10" y1="14" x2="14" y2="14"></line>
                    <line x1="12" y1="12" x2="12" y2="16"></line>
                  </svg>
                </span>
                <p>AD+D and life insurance</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-white py-10 lg:py-28 ">
        <div className="sm:w-3/4 container lg:w-full mx-auto px-12  ">
          <h1 className="text-xl w-full lg:text-5xl font-medium text-center text-bookmark-blue mb-4">
            Different, together
          </h1>
          <p className="text-center text-sm md:text-lg font-medium text-gray-700 mb-4">
            We value who you are. It’s why we encourage Cruisers to connect and
            build a sense of belonging. From Cruise Community Groups (Asian &
            Pacific Islanders, Chai-paani, Cruisers of the African Diaspora,
            Empowering Women of Cruise, Families at Cruise, Latinx, LGBTQruise,
            Middle Easterners @ Cruise, and Veterans) to Cruise Clubs
            (Yackademia, Sustainability, Cyclists, and more), there’s
            opportunity for community at every turn.
          </p>
        </div>

        <div className="pt-10 container ">
          <Carousel />
        </div>
      </section> */}

      {/* <section className="bg-bookmark-white py-10 lg:py-20 ">
        <div className="sm:w-3/4 container lg:w-4/12 mx-auto px-12  ">
          <h1 className="text-xl w-full lg:text-5xl font-bold text-center text-bookmark-blue mb-4">
            Now is the perfect time to join Guise AI
          </h1>
        </div>

        <div className="py-20 container ">
          <div className="grid grid-cols-2  gap-y-16 gap-16 px-10 lg:px-0 ">
            <div className="">
              <h3 className="text-xl w-full lg:text-3xl font-medium text-bookmark-blue mb-4">
                We’re integrated
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  By teaming up with General Motors, Honda, and Microsoft, we
                  have an ecosystem of hardware, software, and manufacturing
                  excellence that is unprecedented in our industry. We employ
                  their world-class leadership in car design, manufacturing, AI,
                  and cloud computing, so we can focus on what we do best:
                  designing the software and hardware unique to self-driving.
                </p>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl w-full lg:text-3xl font-medium text-bookmark-blue mb-4">
                We’re funded
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  GM, Honda, Microsoft, SoftBank, T. Rowe Price, and Walmart
                  have invested billions in Cruise. Their backing demonstrates
                  confidence in our progress, team, and vision and makes us one
                  of the leading autonomous vehicle organizations in the
                  industry. Our deep resources greatly accelerate our
                  development.
                </p>
              </div>
            </div>

            <div className="">
              <h3 className="text-xl w-full lg:text-3xl font-medium text-bookmark-blue mb-4">
                We’re independent
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  As a majority-owned subsidiary of GM, Cruise operates
                  autonomously, just like our vehicles. We have our own
                  governance, board of directors, investors, and equity. Our
                  independence allows us to not just work on the bleeding-edge
                  of technology, but also define it.
                </p>
              </div>
            </div>

            <div className="">
              <h3 className="text-xl w-full lg:text-3xl font-medium text-bookmark-blue mb-4">
                We’re growing
              </h3>
              <div className="text-sm md:text-lg font-medium text-gray-700 mb-4">
                <p>
                  You won’t just own your work here; you’ll have the potential
                  to own equity in Cruise, too. The value of Cruise equity has
                  increased at a compound annual growth rate of more than 100%
                  since GM’s first investment in Cruise. We are competing in a
                  market that is projected to expand to $557 billion by 2026,
                  which gives our company valuation room to grow. We’re just
                  beginning our journey—come join us.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
