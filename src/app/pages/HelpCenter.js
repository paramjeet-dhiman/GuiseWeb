import React from "react";

export const HelpCenter = () => {
  return (
    <div className="py-14 lg:py-20 px-10 lg:px-0 container text-core-black">
      <section className="py-10">
        <div className="space-y-5 lg:space-y-10 ">
          <h1 className="font-semibold text-3xl lg:text-5xl ">
            Welcome to the Guise AI
          </h1>
          <div className="space-y-5 text-lg md:text-xl">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              eveniet odit adipisci eaque obcaecati eos, suscipit veritatis quod
              animi tempore. Tempore ad eaque dicta, accusamus officiis tenetur
              enim quia nihil!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              eveniet odit adipisci eaque obcaecati eos, suscipit veritatis quod
              animi tempore. Tempore ad eaque dicta, accusamus officiis tenetur
              enim quia nihil!
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h1 className="font-semibold text-3xl lg:text-5xl">Community</h1>
        <div className="space-y-10 lg:space-y-16">
          <div className="mt-4 lg:mt-10">
            <h4 className="text-3xl font-medium">Help and Support</h4>
            <hr className="mt-4" />
            <div className="mt-4 lg:mt-6  text-lg md:text-xl">
              <ul className="pl-7 list-disc space-y-2">
                <li>Chat with our community on Telegram</li>
                <li>
                  Join the Guise AI Discord for developer discussion and support
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <h4 className="text-3xl font-medium">Updates</h4>
            <hr className="mt-4" />
            <div className="mt-4 lg:mt-6  text-lg md:text-xl">
              <ul className="pl-7 list-disc space-y-2">
                <li>
                  Follow us on Twitter, YouTube, LinkedIn for project updates
                </li>
                <li>Read our blog content on Medium</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h4 className="text-3xl font-medium">Feedback</h4>
            <hr className="mt-4" />
            <div className="mt-4 lg:mt-6  text-lg md:text-xl">
              <h1>
                If you have any feedback for us please take a moment to submit
                some information to us via this link
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
