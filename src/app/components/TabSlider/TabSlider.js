import React, { useEffect } from "react";
import { useState } from "react";

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
    <div className="w-full ">
      <ul className="flex lg:flex-row flex-col  lg:justify-center lg:space-x-10 lg:items-center   mb-10">
        {tabsData.map(({ tab }, idx) => (
          <li className=" cursor-pointer py-2" key={idx}>
            <div
              className={` ${
                idx === activeTab
                  ? " text-gray-50 border-blue-500 font-semibold bg-blue-500"
                  : "border-gray-400"
              } border-2  border-transparent rounded shadow-md  whitespace-nowrap cursor-base py-2  px-4 text-xl lg:text-xl font-normal`}
              onClick={() => setActiveTab(idx)}>
              {tab}
            </div>
          </li>
        ))}
      </ul>

      <div className="gap-10 lg:gap-20   grid grid-cols-1 lg:grid-cols-2  h-full  w-full  py-10 bg-bookmark-white px-5 shadow-md">
        <div className="order-2 lg:order-1 lg:px-20 flex flex-col justify-center ">
          <h2 className="text-3xl lg:text-5xl font-medium mb-4 ">
            {tabsData[activeTab] && tabsData[activeTab].children.title}
          </h2>
          <p className="font-light w-5/6 text-sm lg:text-lg">
            {tabsData[activeTab] && tabsData[activeTab].children.content}
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={tabsData[activeTab] && tabsData[activeTab].children.img}
            className="w-full h-full"
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
