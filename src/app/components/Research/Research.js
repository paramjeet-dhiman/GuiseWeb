import { HeroHeader } from "../HeroHeader/HeroHeader";
import { ResearchData } from "./ResearchData";

export const Research = () => {
  return (
    <div className="bg-white">
      <HeroHeader
        img={
          "https://images.pexels.com/photos/3109168/pexels-photo-3109168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        title="Research"
      />

      {ResearchData.map((item, index) => (
        <section
          className=" bg-white py-10 lg:py-10 mt-10 container  w-full "
          key={index}>
          <a href={item.link} target="_blank" rel="noreferrer noopener">
            <h4 className="text-xl lg:text-2xl  font-semibold  lg:leading-tight hover:underline   hover:text-blue-500 ">
              {item.title}
            </h4>
          </a>
          <p className=" mt-2 lg:mt-4 text-justify text-lg xl:text-xl">
            {item.description}

            <span className="italic font-semibold text-core-guise hover:underline">
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                {" "}
                Read more
              </a>
            </span>
          </p>
        </section>
      ))}
    </div>
  );
};
