import { DemoComponent } from "../DemoComponent";
import { AdvantageSection } from "../sections/AdvantageSection";
import Tab from "../TabSlider/TabSlider";
import BGTM from "../../../assets/images/BGTM.jpg";
import TMAdv from "../../../assets/images/TMBenefits.jpg";
import TMHeadBrief from "../../../assets/images/TMHeadbrief.jpg";
import TMTabLP from "../../../assets/images/TM-TabLP.jpg";
import TMTabViolations from "../../../assets/images/TM-TabViolations.jpeg";
import TMTabManage from "../../../assets/images/TM-TabManagement.jpg";
import TMTabClassification from "../../../assets/images/TM-TabClassification.jpg";
import { ProductHeader } from "./ProductHeader";
import { ProductHero } from "./ProductHero";
import { SectionsHeader } from "./SectionsHeader";

export const TMOverview = () => {
  let data = {
    label: "Traffic Management",
    subText: `Revolutionize vehicle and crowd management with real-time accurate analytics for better planning and design of city routes. Smart Cities rise from smart analytics`,
    bio: ` Guise Intelligent traffic provides solutions for accurate and comprehensive analyses of city traffic by comprehending visual data through edge based AI assistance. The ability to plan a more efficient and safe traffic management system leads to a smarter city.`,
    bgImg: BGTM,
    image1: TMHeadBrief,
  };

  const tabContent = [
    {
      title: "License Plate Recognition",
      content: `Track and record vehicles through license plates automatically.`,
      list: [
        { title: "License plate detection" },
        { title: "License plate character recognition" },
      ],
      img: TMTabLP,
    },
    {
      title: "Violation",
      content: `Maintain road safety with real time alerts though automated AI assisted detections.`,
      list: [
        { title: "Illegal parking detection" },
        { title: "Speed violation detection" },
        { title: "Red light violation detection" },
        { title: "Stop line violation detection" },
        { title: "Wrong lane driving" },
        { title: "Helmet detection" },
        { title: "Triple seater detection" },
      ],
      img: TMTabViolations,
    },
    {
      title: "Traffic Management",
      content: `Manage traffic at key junctions and areas by monitoring people and vehicles.`,
      list: [{ title: "Vehicle count" }, { title: "Pedestrian detection" }],
      img: TMTabManage,
    },
    {
      title: "Classification",
      content: `Categorize vehicles with advanced analysis with the help of AI.`,
      list: [{ title: "Vehicle type" }, { title: "Logo detection" }],
      img: TMTabClassification,
    },
  ];

  const advantages = [
    { title: `Enhance traffic flow and safety monitoring` },
    {
      title: `Accurately identify violations as they occur (speeding, red-light violations, triple riders)`,
    },
    {
      title: `Traffic and pedestrian density metrics to generate better city plans`,
    },
    { title: `Streamlined number plate recognition` },
    { title: `Seamlessly integrate with existing platforms` },
  ];

  const images = [
    TMAdv,
    // `https://images.unsplash.com/photo-1596188431116-f858853f2be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    // `https://images.unsplash.com/photo-1580742744464-d67b9e35ddff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVoaWNsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    // `https://images.unsplash.com/photo-1511814104612-47a8f022914b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    // `https://images.pexels.com/photos/3289479/pexels-photo-3289479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  ];

  return (
    <div className="bg-white h-full  ">
      <ProductHeader img={data.bgImg} title={data.label} bio={data.subText} />

      <ProductHero img={data.image1} title={data.label} bio={data.bio} />

      <section className="bg-white py-10 lg:py-20">
        <SectionsHeader />

        <section className="flex flex-col lg:flex-row  py-10 bg-white ">
          <div className="text-core-black w-full h-full">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </section>
      </section>

      <AdvantageSection advantages={advantages} images={images} order={1} />

      <DemoComponent />
    </div>
  );
};
