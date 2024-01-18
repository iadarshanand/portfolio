import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full flex flex-col md:flex-row items-center justify-center md:pl-[250px] py-[40px] pr-[40px] text-gray-600 "
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <img
          src="https://res.cloudinary.com/dsibd3mda/image/upload/v1703950248/sbghjphuzxc0u63rfnqg.jpg"
          alt="profile pics"
          className=" w-[80%] md:w-[40%] h-[50vh] rounded-xl border border-gray-500 "
        />
        <div className=" text-center w-full ml-4 space-y-3">
          <h1 className="mt-[10px] text-2xl font-semibold underline">
            About Me
          </h1>
          <h1 className="text-[.6rem] md:text-[.6rem] lg:text-[.8rem] xl:text-[1rem] text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repellendus quas hic ea numquam officia neque quasi porro
            temporibus, tenetur sed velit, itaque placeat nulla minima ipsam.
            Iste, eum distinctio. Illum accusamus placeat alias cum corrupti,
            facilis itaque adipisci omnis excepturi facere, sapiente nisi
            quisquam non quia nostrum laborum explicabo est ipsam sunt
            doloremque nemo. Vitae eum deleniti laborum voluptatibus pariatur
            natus quidem maxime tempora, neque ullam minus. Cum adipisci vel
            quos, harum officia, illo, quod porro deleniti totam praesentium nam
            in voluptatibus eveniet alias? Quidem, aperiam temporibus.
            Temporibus rem, sequi quasi minima ratione ipsa esse? Cum tempora
            accusamus quis?
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
