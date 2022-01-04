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
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
  {
    question: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    answer: ` Perferendis odio nihil pariatur cum velit vitae id, rem tempore cumque quasi culpa ad delectus. Voluptatem iure, laboriosam odio quas rerum accusantium.`,
  },
];

export function FAQ() {
  return (
    <div className="py-14 lg:py-20 px-10 lg:px-0  text-core-black">
      <section className="py-10 lg:py-20">
        <h2 className="text-2xl lg:text-4xl  font-semibold text-center text-bookmark-blue">
          Frequently Asked Questions ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-44 mx-4 mt-5 lg:mt-16">
          {faqs.map((item) => (
            <div className="text-gray-700 dark:text-gray-50 bg-gray-100 hover:bg-gray-200 hoverTransition dark:bg-gray-700 rounded-md p-4">
              <h2 className="text-base lg:text-xl font-semibold">
                {item.question}
              </h2>
              <p className="text-sm lg:text-lg mt-4 font-light leading-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
