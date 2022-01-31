import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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

  const form = useRef();

  const { name, company, email, phone, product, findus } = data;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
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
    } catch (err) {
      // console.log(err)
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="flex flex-col flex-auto lg:flex-row -mx-3">
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor=""
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
            htmlFor=""
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
              placeholder="Company Name"
            />
          </div>
        </div>
      </div>
      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <label
            htmlFor=""
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
            htmlFor=""
            className="text-sm text-gray-700 font-semibold px-1">
            Phone
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input
              type="number"
              value={phone}
              name="phone"
              onChange={handleInput}
              required
              className="w-full -ml-10 pl-10 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-900"
              placeholder="Contact Number"
            />
          </div>
        </div>
        <div className="lg:w-1/2 px-3 mb-5">
          <label
            htmlFor=""
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
            htmlFor=""
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
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
