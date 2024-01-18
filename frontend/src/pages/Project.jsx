import React from "react";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const Project = () => {
  return (
    <div
      id="project"
      className="w-full flex flex-col items-center justify-center text-center   md:pl-[250px] py-[40px] md:pr-[40px] text-gray-600 "
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <h1
        className=" border w-full text-lg md:text-2xl font-semibold text-cyan-700 py-3 px-8"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        Top Recent Projects
      </h1>
      <p className=" text-gray-500 font-semibold">
        👉 including programming Languages, Frameworks, Databases, Front-end and
        Back-end tools and APIs
      </p>
      {/* <IoCaretBack className=" text-3xl absolute left-0 md:left-[250px] top-[350px] text-blue-400 cursor-pointer" />
      <IoCaretForward className=" text-3xl absolute right-[20px] top-[350px] text-blue-400 cursor-pointer" /> */}
      <div className=" w-full flex overflow-x-auto space-x-[100px] my-[50px] px-[30px] ">
        <div className="min-w-[250px] h-[350px] border border-red-500"></div>
        <div className="min-w-[250px] h-[350px] border border-red-500"></div>
        <div className="min-w-[250px] h-[350px] border border-red-500"></div>
        <div className="min-w-[250px] h-[350px] border border-red-500"></div>
        <div className="min-w-[250px] h-[350px] border border-red-500"></div>
      </div>
    </div>
  );
};

export default Project;
