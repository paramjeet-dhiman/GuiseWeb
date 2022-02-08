import { HeroHeader } from "../components/HeroHeader/HeroHeader";

export const PrivacyPolicy = () => {
  return (
    <div className="">
      <HeroHeader title="Privacy Policy" />
      <section className="py-10 lg:py-20  container ">
        <div className="space-y-5 lg:space-y-10 ">
          <div className="space-y-5 text-lg md:text-xl">
            <div className="space-y-5 text-xl ">
              <p>
                {" "}
                At Guise AI we believe in privacy. Your data is your data,
                period.
              </p>
              <p>
                {" "}
                We do not collect your "personal data" when you visit our
                website.
              </p>
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
