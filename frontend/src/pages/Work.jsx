import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
const Work = () => {
  return (
    <div
      id="work"
      className="w-full text-center  md:pl-[250px] py-[40px] md:pr-[40px] text-gray-600 "
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <h1
        className=" border w-full text-xl md:text-2xl font-semibold text-cyan-700 py-3 px-8"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        Work Experience
      </h1>

      <div className="mt-[30px]">
        <VerticalTimeline lineColor={"orange"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "gray" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Sept(2021) - Oct((2022)"
            iconStyle={{ background: "lightGreen", color: "white" }}
            icon={<FaSchool />}
          >
            <div className="flex justify-center items-center space-x-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLYPtszUafso0fw7NRHD96JDK82gzFGR4ecA1BFP_HQ&s"
                alt="CBLogo"
                className="w-[100px] h-[100px]"
              />
              <div>
                <h2>Teaching Assistant & Problems Setter</h2>
                <h3 className="vertical-timeline-element-title">(C++/DSA)</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Coding Blocks, Noida
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "gray" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Nov(2022) - June(2023)"
            iconStyle={{ background: "lightGreen", color: "white" }}
            icon={<IoSchool />}
          >
            <div className="flex justify-center items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLYPtszUafso0fw7NRHD96JDK82gzFGR4ecA1BFP_HQ&s"
                alt="CBLogo"
                className="w-[100px] h-[100px]"
              />
              <div>
                <h2>DSA Mentor</h2>
                <h3 className="vertical-timeline-element-title">(C++/DSA)</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Coding Blocks, Noida
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "gray" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jul(2023) - Nov(2023)"
            iconStyle={{ background: "lightGreen", color: "white" }}
            icon={<IoSchool />}
          >
            <div className="flex justify-center items-center space-x-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="FLLogo"
                className="w-[100px] h-[100px]"
              />
              <div>
                <h2>Software Engineer</h2>
                <h3 className="vertical-timeline-element-title">
                  Flecks Labs, Hyderabad
                </h3>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Work;
