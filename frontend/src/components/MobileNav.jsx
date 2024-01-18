import React, { useState } from "react";
import { FaOutdent } from "react-icons/fa";
import {
  FcAbout,
  FcBiotech,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false); //initially close
  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="sticky z-10 top-0 left-0 flex items-center space-x-2 px-2 py-4  md:hidden bg-gray-950 text-white  ">
      {toggle ? (
        <FaOutdent
          type="button"
          onClick={handleToggle}
          className="text-4xl cursor-pointer"
        />
      ) : (
        <GiHamburgerMenu
          type="button"
          onClick={handleToggle}
          className="text-4xl cursor-pointer"
        />
      )}
      <h1 className="text-2xl font-bold text-orange-400">My Portfolio App</h1>
      {toggle && (
        <div className="fixed flex flex-col top-16 left-[-10px] w-[225px] py-[25px] pl-[25px]  bg-gray-900 space-y-4">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <div
              onClick={handleToggle}
              className=" flex text-sm space-x-1 justify-start items-center cursor-pointer "
            >
              <FcHome />
              <h1 className="hover:text-orange-500">Home</h1>
            </div>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div
              onClick={handleToggle}
              className=" flex text-md space-x-2 justify-start items-center cursor-pointer"
            >
              <FcAbout />
              <h1 className="hover:text-orange-500">About</h1>
            </div>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
            <div
              onClick={handleToggle}
              className=" flex text-md space-x-2 justify-start items-center cursor-pointer"
            >
              <FcPortraitMode />
              <h1 className="hover:text-orange-500">Work Experience</h1>
            </div>
          </Link>
          <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
            <div
              onClick={handleToggle}
              className=" flex text-md space-x-2 justify-start items-center cursor-pointer"
            >
              <FcBiotech />
              <h1 className="hover:text-orange-500">Tech Stack</h1>
            </div>
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div
              onClick={handleToggle}
              className=" flex text-md space-x-2 justify-start items-center cursor-pointer"
            >
              <FcReadingEbook />
              <h1 className="hover:text-orange-500">Education</h1>
            </div>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div
              onClick={handleToggle}
              className=" flex text-md space-x-2 justify-start items-center cursor-pointer"
            >
              <FcVideoProjector />
              <h1 className="hover:text-orange-500">Projects</h1>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
