import { DemoComponent } from "../DemoComponent";
import Tab from "../TabSlider/TabSlider";
import { AdvantageSection } from "../sections/AdvantageSection";
import ImageDriveThru from "../../../assets/images/DS_drive_thru.jpg";
import ImageInsideBank from "../../../assets/images/DS_inside_bank.jpg";
import ImageDemographics from "../../../assets/images/DS_demographics.jpg";
import DSHeadBrief from "../../../assets/images/DSHeadBrief.jpg";
import BGDS from "../../../assets/images/BGDS.jpg";
import DSAdv from "../../../assets/images/DSBenefits.jpg";
import DSTabFootfalImg from "../../../assets/images/DS-footfal.jpg";
import DSTabApparelImg from "../../../assets/images/DSApparel.jpg";
import DSTabSafetyImg from "../../../assets/images/DS-Safety.jpg";
import { ProductHeader } from "./ProductHeader";
import { ProductHero } from "./ProductHero";
import { SectionsHeader } from "./SectionsHeader";

export const DSOverview = () => {
  let data = {
    label: "Digital Signage",
    subText: `Guise AI generates meaningful insights from camera streams to help you create the greatest impact on your customers`,
    bio: `We help you make informed decisions and understand how your customers interact with your products and services. Gain deeper insights into how your brand engages with its customers with a cutting edge approach that uses untapped data resources.`,
    bgImg: BGDS,
    image1: DSHeadBrief,
  };

  const tabContent = [
    {
      title: "Footfall",
      content: `Quantify the interaction of your retail outlets with the customers with constant supervision.`,
      list: [{ title: "People count" }, { title: "Crowd count" }],
      img: DSTabFootfalImg,
    },
    {
      title: "Demographics",
      content: `Understand your customers better and target the right audience with AI assisted detections.`,
      list: [{ title: "Age" }, { title: "Gender" }],
      img: ImageDemographics,
    },
    {
      title: "Apparel",
      content: `Update with customers trends and fashion statements, and access such untapped information for smarter decisions.`,
      list: [
        { title: "Apparel type detection" },
        { title: "Apparel color" },
        { title: "Logo detection" },
      ],
      img: DSTabApparelImg,
    },
    {
      title: "Drive-through",
      content: `Extend your supervision with metrics on vehicles as well, with Guise AI's automated monitoring.`,
      list: [
        { title: "Vehicle detection" },
        { title: "Vehicle count" },
        { title: "Vehicle wait time" },
        { title: "Vehicle logo detection" },
      ],
      img: ImageDriveThru,
    },
    {
      title: "Engagement",
      content: `Detect, log and manage crowded areas with the help of constant supervision provide by Guise AI.`,
      list: [{ title: "Dwell time" }, { title: "Wait time" }],
      img: ImageInsideBank,
    },
    {
      title: "Safety",
      content: `Ensure safe norms among your customers.`,
      list: [
        { title: "Mask detection" },
        { title: "PPE kit detection" },
        { title: "Social distancing" },
      ],

      img: DSTabSafetyImg,
    },
  ];

  const images = [
    DSAdv,
    // `https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80`,
    // `https://images.pexels.com/photos/4480984/pexels-photo-4480984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
    // `https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    // `https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80`,
  ];

  const advantages = [
    { title: `Make informed decisions to improve customer experience` },
    {
      title: `Accurate demographics to understand who are your customers`,
    },
    {
      title: `Connect with your customers`,
    },
    { title: `Uncover trends through accumulating the best metrics` },
    { title: `Unlock revenue opportunities` },
    { title: `Choose the right playlist to engage customers` },
  ];

  return (
    <div className="bg-white h-full ">
      <ProductHeader img={data.bgImg} title={data.label} bio={data.subText} />

      <ProductHero img={data.image1} title={data.label} bio={data.bio} />

      <section className="bg-white py-10 lg:py-20">
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
