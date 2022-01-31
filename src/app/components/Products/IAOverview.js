import { DemoComponent } from "../DemoComponent";
import { AdvantageSection } from "../sections/AdvantageSection";
import Tab from "../TabSlider/TabSlider";
import BGIA from "../../../assets/images/BGIA.jpg";
import IAAdv from "../../../assets/images/IABenefits.jpg";
import IATABIMG from "../../../assets/images/IATabNCancel.jpg";
import IATABNOISEIMG from "../../../assets/images/IATabNoise.jpg";
import IAHeadBrief from "../../../assets/images/IAHeadBrief.jpg";
import { ProductHeader } from "./ProductHeader";
import { ProductHero } from "./ProductHero";
import { SectionsHeader } from "./SectionsHeader";

export const IAOverview = () => {
  let data = {
    label: "Intelligent Audio",
    subText: `Experience the next level of noise cancellation with the new Guise AI assisted intelligent audio with improved audio filtration and customizable noise cancellation`,
    bio: `Guise AI with its intelligent sound is bringing the next generation of audio processing with its smart and efficient noise detection and cancellation software. Unlike hardware based noise cancellations, with the new AI assisted filters, you can choose the noise you would like to detect or cancel from a broad range of options.`,
    bgImg: BGIA,
    image1: IAHeadBrief,
  };

  const tabContent = [
    {
      title: "Noise Detection",
      content: `Analyze audio sources and detect individual traces of noise for real time alerts such as fire alarms.`,
      list: [
        { title: "Fire alarm" },
        { title: "Glass break" },
        { title: "Gunshot" },
        { title: "Yelling/Screaming" },
      ],
      img: IATABNOISEIMG,
    },
    {
      title: "Noise Cancellation",
      content: `Filter noise and unwanted background audio from the source and experience clean audio.`,
      list: [
        { title: "Air conditioner" },
        { title: "Car horn" },
        { title: "Children playing" },
        { title: "Dog bark" },
        { title: "Drilling" },
        { title: "Engine idling" },
        { title: "Gun shot" },
        { title: "Jackhammer" },
        { title: "Siren" },
        { title: "Street music" },
      ],
      img: IATABIMG,
    },
  ];

  const images = [IAAdv];

  const advantages = [
    {
      title: `State-of-the-art software for next level noise cancellation and detection`,
    },
    { title: `Enhance the quality of your audio` },
    { title: `Seamless integration with existing hardware` },
    { title: `Provide the most captivating audio experience for listeners` },
    {
      title: `Allow critical noises through such as emergency alarms or breaking glass`,
    },
    {
      title: `Achieve studio level quality without having to compromise your audio`,
    },
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
