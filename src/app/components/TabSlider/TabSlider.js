import React, { useEffect } from "react";
import { useState } from "react";
import { Tick } from "../Ticks/Tick";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);
  return (
    <div className="w-full  ">
      <ul className="flex lg:flex-row flex-col  lg:justify-center lg:space-x-7 lg:items-center   mb-10">
        {tabsData.map(({ tab }, idx) => (
          <li className=" cursor-pointer py-2" key={idx}>
            <div
              className={` 
              ${
                idx === activeTab
                  ? " text-gray-50 border-blue-500 shadow-2xl font-bold bg-blue-500"
                  : "border-gray-100 text-gray-700"
              } border-2  border-transparent rounded font-semibold shadow-lg hover:shadow-2xl  transition-all ease-linear duration-300 whitespace-nowrap cursor-base py-2  px-4 text-base lg:text-lg `}
              onClick={() => setActiveTab(idx)}>
              {tab}
            </div>
          </li>
        ))}
      </ul>

      <div className="gap-10 lg:gap-20 hoverTransition  grid grid-cols-1 lg:grid-cols-2   h-full  w-full  py-10 bg-white px-5 rounded-lg shadow-xl">
        <div className="order-2 lg:order-1 lg:px-10 flex flex-col mt-5 ">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4 lg:w-5/6 w-full ">
            {tabsData[activeTab] && tabsData[activeTab].children.title}
          </h2>

          <p className="text-justify text-core-black  md:text-justify  text-base lg:text-xl w-full">
            {tabsData[activeTab] && tabsData[activeTab].children.content}
          </p>
          <div className="mt-6 lg:mt-10 space-y-5 flex justify-center flex-col">
            {tabsData[activeTab] &&
              tabsData[activeTab].children.list.map((item, index) => (
                <div className="flex items-center space-x-2 " key={index}>
                  <div className="flex-shrink-0 flex items-center">
                    <Tick />
                  </div>
                  <div className="font-medium text-lg lg:text-xl text-gray-700">
                    {item.title}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 ">
          <img
            src={tabsData[activeTab] && tabsData[activeTab].children.img}
            className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl"
            alt="sdf"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
