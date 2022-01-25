import React from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";

export const PrivacyPolicy = () => {
  return (
    <div className="">
      <HeroHeader
        img={
          "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        title="Privacy Policy"
      />
      <section className="py-10 lg:py-20 px-10 lg:px-0 container ">
        <div className="space-y-5 lg:space-y-10 ">
          <div className="space-y-5 text-lg md:text-xl">
            <h4 className="font-semibold  text-3xl">
              At Guise AI we believe in privacy. Your data is your data, period.
            </h4>
            <h4 className="font-semibold text-2xl">
              We do not collect your "personal data" when you visit our website.
            </h4>
            <div className="space-y-5 text-xl ">
              <p>
                Why do we not collect your "personal data" when you browse our
                website? We feel the best way to protect you and your data is to
                not collect it in the first place.
              </p>
              <p>
                In addition, we do not contract with any third party providers
                who collect your data from our website. We are in the software
                business, not the "selling your data from our website to third
                parties" business.
              </p>
              <p>
                If you have any questions you can reach out to us at
                <b className="italic text-core-guise hover:underline">
                  <a href="Privacy@guise.ai"> privacy@guise.ai </a>
                </b>
                any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
