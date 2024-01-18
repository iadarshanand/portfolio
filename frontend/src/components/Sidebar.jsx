import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menu from "./Menu";
const Sidebar = () => {
  const [toggle, setToggle] = useState("true"); //initial expanded
  const width = toggle ? "w-[210px]" : "w-[100px]";
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        className={`hidden md:block ${width} h-screen bg-gray-900 fixed left-0 top-0 text-white text-start pt-[80px]`}
      >
        {toggle ? (
          <MdKeyboardDoubleArrowLeft
            className=" md:text-5xl text-orange-500 absolute right-[25px] top-[20px] cursor-pointer"
            type="btn"
            onClick={handleToggle}
          />
        ) : (
          <MdKeyboardDoubleArrowRight
            className=" md:text-3xl text-orange-500 absolute right-[15px] top-[10px] cursor-pointer"
            type="btn"
            onClick={handleToggle}
          />
        )}
        <Menu toggle={toggle} />
      </div>
    </>
  );
};

export default Sidebar;
