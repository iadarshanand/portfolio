import React from "react";
import {
  FcAbout,
  FcBiotech,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="w-full my-3">
            <img
              src="https://res.cloudinary.com/dsibd3mda/image/upload/v1703950248/sbghjphuzxc0u63rfnqg.jpg"
              alt="profile pics"
              className="w-[120px] h-[120px] rounded-full mx-auto"
            />
          </div>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer ">
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
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcAbout />
              <h1 className="hover:text-orange-500">About</h1>
            </div>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcPortraitMode />
              <h1 className="hover:text-orange-500">Work Experience</h1>
            </div>
          </Link>
          <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
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
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
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
            <div className=" flex text-md space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcVideoProjector />
              <h1 className="hover:text-orange-500">Projects</h1>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcHome title="Home" />
            </div>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcAbout title="About" />
            </div>
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcPortraitMode title="Work Experience" />
            </div>
          </Link>

          <Link to="tech" spy={true} smooth={true} offset={-100} duration={100}>
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcBiotech title="Tech Stack" />
            </div>
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcReadingEbook title="Education" />
            </div>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div className=" flex text-2xl space-x-2 justify-start items-center my-3 ml-6 cursor-pointer">
              <FcVideoProjector title="Projects" />
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Menu;
