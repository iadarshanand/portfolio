import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
const Education = () => {
  return (
    <div
      id="education"
      className="w-full text-center  md:pl-[250px] py-[40px] md:pr-[40px] text-gray-600 "
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <h1
        className=" border w-full text-lg md:text-2xl font-semibold text-cyan-700 py-3 px-8"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        Education
      </h1>

      <div className="mt-[30px]">
        <VerticalTimeline lineColor={"orange"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "gray" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - 2018"
            iconStyle={{ background: "lightGreen", color: "white" }}
            icon={<FaSchool />}
          >
            <div className="flex justify-center items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/8/82/Jawahar_Navodaya_Vidyalaya_logo.png"
                alt="SchoolLogo"
                className="w-[70px] h-[80px]"
              />
              <div>
                <h3 className="vertical-timeline-element-title">
                  Jawahar Navodaya Vidyalaya
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Siwan, Bihar
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "gray" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2019 - 2023"
            iconStyle={{ background: "lightGreen", color: "white" }}
            icon={<IoSchool />}
          >
            <div className="flex justify-center items-center space-x-4">
              <img
                src="https://vendotic.com/public/uploads/small/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png"
                alt="CollegeLogo"
                className="w-[70px] h-[80px]"
              />
              <div>
                <h3 className="vertical-timeline-element-title">
                  Jamia Millia Islamia
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  New Delhi
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
