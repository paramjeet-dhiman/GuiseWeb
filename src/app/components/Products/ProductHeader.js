export const ProductHeader = ({ img, title, bio }) => {
  return (
    <section
      className="w-full mt-16  "
      style={{
        height: "28rem",
        background: `url(${img}) center center / cover no-repeat`,
      }}>
      <div className="flex  items-center justify-center w-full h-full bg-black bg-opacity-80">
        <div className="text-center container max-w-screen-lg">
          <h1 className="text-3xl font-bold  text-white uppercase md:text-5xl ">
            {title}
          </h1>
          <p className="text-bookmark-white mt-5 lg:mt-7 text-base md:text-xl">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
};
