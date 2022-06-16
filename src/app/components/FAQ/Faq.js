import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroHeader } from "../HeroHeader/HeroHeader";
import FaqImgHeader from "../../../assets/images/FAQIMGHeader.jpg";
const faqs = [
  {
    question: `What are the advantages of AI at the Edge?`,
    answer: `Guise AI delivers high quality AI solutions which are capable of running on cost-effective edge devices. Furthermore, with our edge based solutions, we are able to process high bandwidth data locally without having to transfer data over the internet, hence maintaining privacy of the data as well.`,
  },
  {
    question: `Can Guise AI run on low cost compute modules?`,
    answer: `Yes. With our constant research and breakthroughs at Guise AI, we are able to push the limit of AI to the Edge and provide a solution that can run on extremely low cost compute modules.`,
  },
  {
    question: `Will the Edge approach meet my organization's privacy and security needs?`,
    answer: `Guise AI at the Edge delivers feedback rapidly and locally within the system. Localized processing is more efficient, less expensive, and it increases the level of security in terms of data privacy.`,
  },
  {
    question: `Is Guise AI hardware-agnostic?`,
    answer: `Yes. With our constant research and breakthroughs at Guise AI, we are able to push the limit of AI to the Edge and provide a solution that can run on any hardware both CPU/GPU.`,
  },
  {
    question: ` How does Guise AI integrate with our Edge environment?`,
    answer: `The customer seamlessly integrates with Guise AI Edge APIs`,
  },
  {
    question: `Why is shifting AI to the Edge cost-effective for my organization?`,
    answer: `With our constant research and breakthroughs at Guise AI, we are able to push the limit of AI to the Edge and provide a solution that can run on extremely low cost compute modules. You can now run AI applications on Edge devices without the need to purchase sophisticated and expensive hardware through these independent Edge devices that are several times cheaper. The Edge-based compute devices paired with Guise AI software act as small, low cost and easy to install independent modules with a one time configuration.`,
  },

  {
    question: `How do you preserve accuracy for AI detections on the Edge?`,
    answer: `With several state-of-the-art optimization techniques, we are able to reduce the application's size by making much more lightweight and robust AI models that replicate cloud based accuracies on the edge. We are able to customize the models to efficiently utilize resources on any given hardware, in turn providing the best accuracy. For more information, please stay tuned to see our latest news on the resources section.`,
  },

  {
    question: ` How do I contact Guise AI for a solution or demo?`,
    answer: (
      <div className="text-base lg:text-lg">
        Please visit our{" "}
        <Link
          to="/company/contact"
          className="text-core-guise hover:underline font-semibold">
          Contact Us
        </Link>{" "}
        or{" "}
        <Link
          to="/demo"
          className="text-core-guise hover:underline font-semibold">
          Book a Demo
        </Link>{" "}
        page to get in touch with us from the website itself. Additionally, you
        can visit our social links and reach out to us there as well.
      </div>
    ),
  },
];

export function FAQ() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question already active then close it
      return setClicked(false);
    }
    setClicked(index);
  };
  return (
    <div className="select-none">
      <HeroHeader img={FaqImgHeader} title="Frequently Asked Questions?" />
      <section className="py-10 lg:py-20">
        <div className="grid grid-cols-1 container gap-y-5">
          {faqs.map((item, index) => (
            <div key={index}>
              <div
                className={`filter drop-shadow-xl px-5 lg:px-10 py-4  shadow    rounded-md border ${
                  clicked === index ? " shadow-xl bg-white" : "hover:bg-gray-50"
                }`}
                role="button"
                tabIndex="0"
                onClick={() => toggle(index)}
                onKeyPress={() => toggle(index)}>
                <div className="flex justify-between items-center">
                  <h2
                    className={`text-lg lg:text-xl font-medium ${
                      clicked === index ? "text-black font-bold lg:text-xl" : ""
                    }`}>
                    {item.question}
                  </h2>
                  <span>
                    {clicked === index ? (
                      <svg
                        className="h-6 w-6 lg:w-8 lg:h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 lg:w-8 lg:h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <div className={`${clicked === index ? "" : ""}`}>
                    <div className="mt-5 text-base md:text-lg lg:text-xl text-core-black  ">
                      {item.answer}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
