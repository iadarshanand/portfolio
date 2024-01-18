import React from "react";
import { BsFiletypeHtml } from "react-icons/bs";

const TechStack = () => {
  const boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

  return (
    <div
      id="tech"
      className="w-full flex flex-col items-center justify-center text-center md:pl-[250px] py-[40px] md:pr-[40px] text-gray-600 "
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <h1
        className=" border w-full text-lg md:text-2xl font-semibold text-cyan-700 py-3 px-8"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        Technologies Stack
      </h1>
      <p className=" text-gray-500 md:font-semibold font-medium text-sm p-2 text-start">
        👉 including programming Languages, Frameworks, Databases, Front-end and
        Back-end tools and APIs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-[50px]">
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2 flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>HTML</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>CSS</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>BootStraps</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>JavaScript</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>JQuery</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>Tailwind CSS</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>React</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>NodeJs</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>ExpressJs</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>MongoDB</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>SQL</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>Git/Github</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>C/C++</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>PostMan</span>
        </button>
        <button
          className="w-[250px] sm:w-[180px] p-2 border border-gray-200 m-1 md:m-2  flex justify-center items-center space-x-3 hover:bg-green-400 rounded-lg transition-all duration-700"
          style={{ boxShadow: boxShadow }}
        >
          <BsFiletypeHtml className=" text-xl" />
          <span>Cocos</span>
        </button>
      </div>
    </div>
  );
};

export default TechStack;
