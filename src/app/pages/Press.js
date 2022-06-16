// import { useState } from "react";
import { HeroHeader } from "../components/HeroHeader/HeroHeader";
// import { Pagination } from "../components/Pagination/Pagination";
import { data } from "../PressData";
export const Press = () => {
  // const [showPerPage] = useState(6);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerPage,
  // });

  // const onPaginationChange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };

  return (
    <div>
      <HeroHeader
        title="Press & News"
        img={`https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
      />

      <div className="mx-auto  py-20">
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 container gap-10">
          {/* {data.slice(pagination.start, pagination.end).map((item, index) => ( */}
          {data.map((item, index) => (
            <div className="p-5" key={index}>
              <div className=" bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200  md:shadow-xl  mb-6 ">
                <div className="relative h-80">
                  <img
                    src={item.imgLink}
                    alt="uploaded cover"
                    className="w-full h-full  rounded-lg rounded-b-none"
                  />
                </div>

                <div className="py-1">
                  <div className="p-4 ">
                    <h2 className="truncate font-bold mb-2 md:mt-4 text-2xl text-gray-800 tracking-normal">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                      {item.time}
                    </p>

                    <p className="break-words text-sm text-gray-800 mt-4 ">
                      {item.bio}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-2 md:p-4  ">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={item.link}>
                      <div className="flex items-center">
                        <div className="text-sm  ">
                          {item.img}
                          {/* <p className="text-gray-800 font-medium leading-none">
                            {item.webName}
                          </p> */}
                        </div>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={item.link}
                      className="border-2 border-transparent hover:border-blue-500  text-blue-500  rounded px-4 py-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={20}
          /> */}
      </div>
    </div>
  );
};
