import React, { useState } from "react";
import { HeroHeader } from "../HeroHeader/HeroHeader";

const faqs = [
  {
    question: `How does Guise AI leverage Continuous Learning?`,
    answer: `Guise AI is the premier provider of Continuous Learning AI solutions on the edge. Our technology is built from the ground up using our proprietary Continuous Learning AI which powers the most adaptive, accurate, and efficient machine vision models in the industry. Clients who require an accurate, cost-efficient, and secure solution turn to Guise AI to continuously extract patterns and predict from real-time and dynamically changing data to create the greatest impact on your customers.`,
  },

  {
    question: `Why is shifting AI to the edge cost-effective for my organization?`,
    answer: `With our constant research and breakthroughs at Guise AI, we are able to push the limit of AI on edge and provide a solution that can run on extremely low cost compute modules such as the Raspberry Pi. You can now run AI applications on edge devices without the need to purchase sophisticated and expensive hardware through these independent edge devices that are several times cheaper. The edge-based compute devices paired with our application act as small, low cost and easy to install independent modules with a one time configuration.`,
  },
  {
    question: ` How do I contact Guise AI for a solution or demo?`,
    answer: `Please visit our Contact Us or Book a Demo page to get in touch with us from the website itself. Additionally, you can visit our social links and reach out to us there as well.`,
  },
  {
    question: `Will the edge approach meet my organization's privacy and security needs?`,
    answer: `Guise AI Vision Kit at the edge delivers feedback rapidly and locally within the system. Localized processing is more efficient, less expensive, and it increases the level of security in terms of data privacy while maintaining GDPR compliance.    `,
  },
  {
    question: `I have invested in a distributed surveillance/video camera/signage system. Is it possible to use Guise AI to upgrade this system to enable AI based analytics?`,
    answer: `Guise AI turns the connected camera into a smart camera to boost statistical analysis and help develop more robust systems. Our algorithms generate meaningful insights from data streams to help you create the greatest impact on your customers and improve operations. Our applications are extremely modular in nature and extend support to many already existing setups. With the help of cost-effective edge based devices, we are able to augment pre-installed devices such as CCTV/USB cameras. Installation in various locations are extremely easy and discrete.`,
  },
  {
    question: `How do you preserve accuracy for AI detections on the edge?`,
    answer: `Research at Guise AI is focused on pushing AI to the edge. With several state-of-the-art optimization techniques, we are able to reduce application size by making much more lightweight and robust AI models that are smarter and more efficient. For more information, please visit our technology page.`,
  },

  {
    question: `What is the difference between AI on the edge VS AI on the cloud?`,
    answer: `AI on the cloud involves renting out expensive cloud based resources to run AI applications as a centralized data processing unit. For this kind of AI products, raw and bandwidth heavy data such as Video Streams need to be stored/accessed on the cloud for processing. Since most use cases involve CCTV/USB cameras installed at various edge based locations, the heavy video stream data needs to be sent to the centralized cloud processing unit over a public network. This kind of solution incurs heavy costs in renting out cloud resources and internet charges for streaming heavy video data. Furthermore, streaming data from edge sources to cloud services happens over public network, hence maintaining security for this kind of data becomes an additional necessity. With edge based AI solutions, raw data need not be collected, stored or streamed on public network and services. With Guise AI’s local processing, you can now convert heavy bandwidth data such as video streams into light weight and processed data in the form of JSONs. These JSONs are several times smaller in size, and easier to deliver over a public network securely. Localized processing also means the devices need not be connected to the internet at all times, i.e., processing can continue in places with weak and unstable network through the day, and the processed data can be collected periodically in short intervals either manually or with a strong internet connection.`,
  },
];

export function FAQ() {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question already active then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="select-none">
      <HeroHeader
        img={
          "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title="Frequently Asked Questions?"
      />
      <section className="py-10 lg:py-20">
        <div className="grid grid-cols-1 px-10 lg:px-0 container mx-auto gap-y-5">
          {faqs.map((item, index) => (
            <div key={index}>
              <div
                className={`filter drop-shadow-xl px-5 lg:px-10 py-4  shadow    rounded-md border ${
                  clicked === index ? " shadow-xl bg-white" : "hover:bg-gray-50"
                }`}
                onClick={() => toggle(index)}>
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
                    <p className="pt-5  text-justify text-base lg:text-lg ">
                      {item.answer}
                    </p>
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
