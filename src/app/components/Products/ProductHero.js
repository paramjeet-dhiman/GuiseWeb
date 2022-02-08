export const ProductHero = ({ img, title, bio }) => {
  return (
    <section className="flex flex-col lg:flex-row  py-10 bg-bookmark-smoke lg:py-20  ">
      <div className="grid grid-cols-12  items-center lg:gap-10 container">
        <div className=" w-full col-span-full lg:col-span-6  md:m-0 md:order-2 ">
          <div className="">
            <img
              className="object-cover w-full h-full bg-cover bg-center rounded-lg shadow-xl filter drop-shadow-2xl  "
              src={img}
              alt=""
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex flex-col col-span-full mt-10 md:mt-0 lg:col-span-6 text-core-black">
          <h2 className="text-2xl text-left lg:text-4xl font-semibold ">
            {title}
          </h2>
          <div className=" mt-5 lg:mt-7 text-base md:text-lg lg:text-xl  lg:max-w-xl">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
