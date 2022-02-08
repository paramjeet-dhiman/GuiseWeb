import { HeroHeader } from "../components/HeroHeader/HeroHeader";
import { BookDemoForm } from "../components/Forms/BookDemoForm";
import HeaderIMG from "../../assets/images/HeaderBookDemo.jpg";
export const BookADemo = () => {
  return (
    <div className="bg-white h-full select-none">
      <HeroHeader img={HeaderIMG} title="Request a DEMO" />

      <section className="bg-white py-10 md:mt-10  ">
        <div className=" container text-center text-core-black max-w-screen-lg ">
          <h1 className="text-2xl w-full lg:text-4xl font-semibold text-center ">
            Watch our products in action & see how they can help your
            organization
          </h1>
          <p className="  mt-5 lg:mt-7 text-base md:text-lg lg:text-xl">
            Just answer a few simple questions so we can personalize the right
            experience for you.
          </p>
        </div>
      </section>

      <section className=" py-10  container max-w-screen-xl">
        <div className="rounded-lg shadow-lg border  border-gray-100 p-4 md:p-10">
          <div className="space-y-5 mb-10">
            <h1 className="text-xl lg:text-3xl font-semibold text-core-black">
              Let's Schedule a Demo
            </h1>
            <p className="text-gray-700 font-medium text-base lg:text-lg  lg:text-left sm:w-3/4 lg:w-5/6 mt-4 lg:mt-2 ">
              Tell us a few things about yourself and we'll show you a lot more
              about us.
            </p>
          </div>

          <BookDemoForm />
        </div>
      </section>
    </div>
  );
};
