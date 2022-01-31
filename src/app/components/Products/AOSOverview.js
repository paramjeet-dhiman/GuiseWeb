import Tab from "../TabSlider/TabSlider";
import { DemoComponent } from "../DemoComponent";
import { AdvantageSection } from "../sections/AdvantageSection";
import BGAOS from "../../../assets/images/BGAOS.jpg";
import AOSOps from "../../../assets/images/AosOps.jpg";
import AOSSafety from "../../../assets/images/AosSafety.jpg";
import AOSAsset from "../../../assets/images/AosAsset.jpg";
import AOSAdv from "../../../assets/images/AosBenefits.jpg";
import AOSHeadBrief from "../../../assets/images/AosHeadBrief.jpg";
import { ProductHeader } from "./ProductHeader";
import { ProductHero } from "./ProductHero";
import { SectionsHeader } from "./SectionsHeader";

export const AOSOverview = () => {
  let data = {
    bgImg: BGAOS,
    label: "Airport Ground Operations",
    subText: `The ability of Airports, Airlines, and Aviation Authorities to implement high-impact strategies is critical in order to increase customer satisfaction and operational efficiency`,
    bio: `Guise AI is transforming the airport experience. Our algorithms generate meaningful insights from camera streams to optimize airport ground operations and enhance the customer experience - reduce turnaround time at the gate and increase tarmac safety.`,
    image1: AOSHeadBrief,
  };

  const tabContent = [
    {
      title: "Operations",
      content: `Record the following operational events and track them automatically with the Guise AI airport ground operations suite.`,
      list: [
        { title: "Airline detection" },
        { title: "Aircraft gate arrival time" },
        { title: "Aircraft gate departure time" },
        { title: "Cargo status" },
        { title: "Cargo door status" },
        { title: "Jet bridge status" },
        { title: "Jet bridge connected time" },
        { title: "Jet bridge disconnected time" },
      ],
      img: AOSOps,
    },
    {
      title: "Safety Monitoring",
      content: `Maintain safety standards and minimize violations with constant surveillance and alerts.`,
      list: [
        { title: "Safety cone detection" },
        { title: "Wheel chock detection" },
        { title: "Pushback truck detection" },
        { title: "Safety jacket/vest detection" },
        { title: "Violation alerts" },
      ],

      img: AOSSafety,
    },
    {
      title: "Asset Management",
      content: `Manage airport ground vehicles efficiently by tracking type and durations of assigned units to every airplane.`,
      list: [
        { title: "Fleet detection" },
        { title: "Fleet count" },
        { title: "Fleet classification" },
      ],
      img: AOSAsset,
    },
  ];

  const images = [
    AOSAdv,
    // `https://images.unsplash.com/photo-1566319280755-c66cbcf93061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    // `https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    // `https://images.unsplash.com/photo-1585585828599-461a0419b788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80`,
    // `https://images.pexels.com/photos/1928064/pexels-photo-1928064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
  ];

  const advantages = [
    { title: `Optimize ground operations efficiency` },
    {
      title: `Reduce turnaround time`,
    },
    {
      title: `Improve customer experience`,
    },
    { title: `Mitigate risks and increase tarmac safety` },
    { title: `Maximize asset utilization` },
    { title: `Accurate data for better planning` },
    { title: `Increased transparency and record keeping for safety audits` },
  ];

  return (
    <div className="bg-white h-full select-none ">
      <ProductHeader img={data.bgImg} title={data.label} bio={data.subText} />

      <ProductHero img={data.image1} title={data.label} bio={data.bio} />

      <section className="bg-white  py-10 lg:py-20">
        <SectionsHeader />
        <section className="flex flex-col lg:flex-row px-10 py-10 bg-white lg:px-20  ">
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
