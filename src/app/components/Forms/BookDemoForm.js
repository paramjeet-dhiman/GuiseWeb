import { useState, useRef } from "react";
import { sendForm } from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const BookDemoForm = () => {
  const formData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Airport Ground Operations",
    findus: "Facebook",
  };
  const [data, setData] = useState(formData);
  const [sending, setSending] = useState(false);

  const form = useRef();

  const { name, company, email, phone, product, findus } = data;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      sendForm(
        "service_cz0zrl2",
        "template_4tw6vvy",
        form.current,
        "user_fDYUY29OPKkusPwKGheJL"
      );

      const response = await fetch(
        "https://v1.nocodeapi.com/paramjeet/google_sheets/rKeFbUSviwLcQTcg?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              name,
              company,
              email,
              phone,
              product,
              findus,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        findus: "",
      });
      setSending(false);
    } catch (err) {
      // console.log(err)
      setSending(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="">
      <div className="flex flex-col flex-auto lg:flex-row -mx-3 ">
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor="name"
            className="text-sm text-gray-700 font-semibold px-1">
            Full Name
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <svg
                className="w-6 h-6 text-core-black text-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              required
              value={name}
              name="name"
              onChange={handleInput}
              className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
              placeholder="John Smith"
            />
          </div>
        </div>
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor="company"
            className="text-sm text-gray-700 font-semibold px-1">
            Company
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <svg
                className="w-6 h-6 text-core-black text-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              required
              value={company}
              name="company"
              onChange={handleInput}
              className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
              placeholder="Company Website"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label
            htmlFor="email"
            className="text-sm text-gray-700 font-semibold px-1">
            Email
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <svg
                className="w-6 h-6 text-core-black text-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleInput}
              required
              className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
              placeholder="johnsmith@example.com"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-auto lg:flex-row -mx-3">
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor="phone"
            className="text-sm text-gray-700 font-semibold px-1">
            Phone
          </label>
          <div className="flex">
            {/* <div className="w-10  focus:border-gray-900 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"> */}
            {/* <svg
                className="w-6 h-6 text-core-black text-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg> */}
            {/* </div> */}

            <PhoneInput
              inputProps={{
                required: true,
                autoFocus: false,
                name: "phone",
              }}
              country="in"
              // containerStyle={{
              //   padding: "0.6rem 0.3rem",
              //   borderRadius: `0.5rem`,
              //   "&:focus": {
              //     border: `2px solid red`,
              //   },
              // }}
              // containerClass="border-2  border-gray-200 outline-none focus:border-gray-900 hover:border-gray-900"
              inputStyle={{
                width: "100%",
                fontSize: "1rem",
                borderWidth: "2px",
                // borderColor: "#e5e7eb",
                // border: `2px solid #e5e7eb`,
                padding: "1.7rem 2.5rem",
              }}
              // searchClass="border-2  border-gray-200 outline-none focus:border-gray-900 hover:border-gray-900"
              searchStyle={{
                border: "0",
                outline: "none",
              }}
              buttonStyle={{
                borderRadius: "0px",
                padding: "0",
                backgroundColor: "transparent",
                border: "0",
              }}
              placeholder="Contact Number"
              autoFormat
              value={phone}
              onChange={(value) => {
                setData({ ...data, phone: value });
              }}
              // className="w-full -ml-10 pr-3 py-4 rounded-lg focus:border-gray-900"
              // className="w-full border-0 rounded-lg  outline-none focus:border-gray-900"
            />

            {/* <input
              type="number"
              value={phone}
              name="phone"
              onChange={handleInput}
              min="12"
              required
              className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
              placeholder="Contact Number"
            /> */}
          </div>
        </div>
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor="product"
            className="text-sm text-gray-700 font-semibold px-1">
            Select Products
          </label>

          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-0 m-auto mr-3 text-bookmark-blue dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>

            <select
              // value="1"
              value={product}
              name="product"
              required
              onChange={handleInput}
              className="select w-full rounded-lg border-2 text-core-black border-gray-200 outline-none focus:border-gray-900  bg-white  pl-4 py-4 appearance-none flex items-center ">
              <option defaultValue disabled>
                Select Product you're looking for
              </option>
              <option value="Airport Ground Operations">
                Airport Ground Operations
              </option>
              <option value="Digital Signage">Digital Signage</option>
              <option value="Traffic Management">Traffic Management</option>
              <option value="Intelligent Audio">Intelligent Audio</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-12">
          <label
            htmlFor="findus"
            className="text-sm text-gray-700 font-semibold px-1">
            How do you hear about us?
          </label>
          <div className="flex">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 m-auto mr-3 text-bookmark-blue dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
              </svg>

              <select
                // value={"1"}
                required
                value={findus}
                name="findus"
                onChange={handleInput}
                className="select w-full rounded-lg border-2 text-core-black border-gray-200 outline-none focus:border-gray-900  bg-white  pl-4 py-4 appearance-none flex items-center">
                <option defaultValue disabled>
                  How do you hear about us?
                </option>
                <option value="Facebook">Facebook</option>
                <option value="Linkedin">LinkedIn</option>
                <option value="Twitter">Twitter</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-full mb-5">
          <button className="btn btn-black border-2 rounded-sm border-core-black hover:bg-core-black hover:text-gray-100   transform hover:scale-105 hoverTransition  xl:text-xl  md:inline font-semibold">
            {sending ? (
              <div className="flex items-center justify-center  ">
                <svg
                  role="status"
                  className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                Sending...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
