/* This example requires Tailwind CSS v2.0+ */
// export function Faq() {
//   return (
//     <div className="bg-white testing">
//       <div className="mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-44">
//         <div className="lg:grid lg:grid-cols-3 lg:gap-20">
//           <div className="testing">
//             <h2 className="text-3xl font-extrabold text-gray-900">
//               Frequently asked questions
//             </h2>
//             <p className="mt-4 text-lg text-gray-500">
//               Can't find the answer you're looking for? Reach out to our
//               <a
//                 href="/"
//                 className="font-medium text-indigo-600 hover:text-indigo-500">
//                 customer support
//               </a>
//               team.
//             </p>
//           </div>
//           <div className="mt-12 lg:mt-0 lg:col-span-2 testing">
//             <dl className="space-y-12">
//               {faqs.map((faq) => (
//                 <div key={faq.question}>
//                   <dt className="text-lg leading-6 font-medium text-gray-900">
//                     {faq.question}
//                   </dt>
//                   <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { HeroHeader } from "../HeroHeader/HeroHeader";

// const faqs = [
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
//   {
//     question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
//     answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
//   },
// ];

// function FAQ({
//   children,
//   defaultOpen = [0, 1],
//   open: openFromProps,
//   onToggle: onToggleFromProps = () => {},
// }) {
//   const isControlled = () => (openFromProps ? true : false);
//   const [open, setIsOpen] = useState(defaultOpen);
//   const getOpen = () => (isControlled() ? openFromProps : open);
//   const isOpen = (index) => {
//     return getOpen().includes(index) ? true : false;
//   };

//   const onToggle = (index) => {
//     if (isControlled()) {
//       onToggleFromProps(index);
//     } else {
//       if (getOpen().includes(index)) {
//         setIsOpen(getOpen().filter((item) => item !== index));
//       } else {
//         setIsOpen([...getOpen(), index]);
//       }

//       onToggleFromProps(index);
//     }
//   };

//   return (
//     <dl>
//       {React.Children.map(children, (child, index) => {
//         return React.cloneElement(child, {
//           isOpen: isOpen(index),
//           onToggle: () => onToggle(index),
//         });
//       })}
//     </dl>
//   );
// }

// function Question({ children, isOpen, answerId, onToggle }) {
//   return (
//     <dt>
//       <button
//         className="FAQ__question"
//         aria-expanded={isOpen}
//         aria-controls={answerId}
//         onClick={onToggle}>
//         {children(isOpen, onToggle)}
//       </button>
//     </dt>
//   );
// }

// function Answer({ children, id, isOpen }) {
//   const mergedClassname = classNames("FAQ__answer", {
//     "FAQ__answer--hidden": !isOpen,
//   });
//   return (
//     <dd>
//       <p className={mergedClassname} id={id}>
//         {children}
//       </p>
//     </dd>
//   );
// }

// function QAItem({ children, isOpen, onToggle }) {
//   return React.Children.map(children, (child, index) => {
//     return React.cloneElement(child, {
//       isOpen: isOpen,
//       onToggle: onToggle,
//     });
//   });
// }

// FAQ.QAItem = QAItem;
// FAQ.Question = Question;
// FAQ.Answer = Answer;

// export default FAQ;

const faqs = [
  {
    question: `How does Guise AI leverage Continuous Learning?`,
    answer: `Guise AI is the premier provider of Continuous Learning AI solutions on the edge. Our technology is built from the ground up using our proprietary Continuous Learning AI which powers the most adaptive, accurate, and efficient machine vision models in the industry. Clients who require an accurate, cost-efficient, and secure solution turn to Guise AI to continuously extract patterns and predict from real-time and dynamically changing data to create the greatest impact on your customers.`,
  },

  {
    question: `How is shifting AI to the edge cost-effective for my organization?`,
    answer: `With our constant research and breakthroughs at Guise AI, we are able to push the limit of AI on edge and provide a solution that can run on extremely low cost compute modules such as the Raspberry Pi. You can now run AI applications on edge devices without the need to purchase sophisticated and expensive hardware. These independent edge devices are several times cheaper than any sophisticated hardware. The edge-based compute devices paired with our application act as small, low cost and easy to install independent modules with a one time configuration.`,
  },
  {
    question: `How do I approach Guise AI for a solution?`,
    answer: `Please visit our Contact Us or Book a Demo page to get in touch with us from the website itself. Additionally, you can visit our social links and reach out to us there as well. (maybe provide some links here?)`,
  },
  {
    question: `Will the edge approach meet my organization's privacy and security needs?`,
    answer: `Guise AI Vision Kit at the edge delivers feedback rapidly and locally within the system. Localized processing is more efficient, less expensive, and it increases the level of security in terms of data privacy while maintaining GDPR compliance.    `,
  },
  {
    question: `I have spent money setting up a distributed surveillance/video camera/signage system. Is it possible to use Guise AI to upgrade this system to be able to use AI based analytics?`,
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
  return (
    <div className="select-none">
      <HeroHeader
        img={
          "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title="Frequently Asked Questions?"
      />
      <section className="py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-4 mt-5 lg:mt-16">
          {faqs.map((item) => (
            <div className="bg-white filter drop-shadow-xl hover:bg-gray-100 shadow  rounded-md p-4">
              <h2 className="text-lg lg:text-xl font-semibold">
                {item.question}
              </h2>
              <p className=" mt-4 leading-6 text-center lg:text-justify text-base lg:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
