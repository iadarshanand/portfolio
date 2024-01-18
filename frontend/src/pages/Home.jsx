import React from "react";
import Typewriter from "typewriter-effect";
import MobileNav from "../components/MobileNav";

const Home = () => {
  return (
    <>
      <MobileNav />
      <div
        id="home"
        className="w-full  md:pl-[250px] pt-[60px] pb-[30px] px-[20px] bg-gray-950 text-white"
      >
        <h1 className="text-lg lg:text-xl">Hi I'm a</h1>
        <h1 className=" text-orange-400 text-xl lg:text-2xl">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "Competitive Programmer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="flex space-x-3 mt-5">
          <a
            className="px-4 md:px-8 py-1 bg-blue-700 rounded-xl font-semibold"
            href="https://api.whatsapp.com/send?phone=9304623436"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a className="px-4 py-1 bg-orange-600 rounded-xl font-semibold">
            My Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
