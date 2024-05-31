import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

export default function Skill() {
  return (
    <>
      <div className="mt-5 text-2xl">Skills</div>
      <div className=" flex flex-wrap">
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg m-2">
          <IoLogoJavascript />
          <div>JavaScript</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg	m-2">
          <FaReact />
          <div>React</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg	m-2">
          <TbBrandCpp />
          <div>C++</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg	m-2">
          <FaPython />
          <div>Python</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg	m-2">
          <FaHtml5 />
          <div>HTML</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg m-2	">
          <FaCss3Alt />
          <div>CSS</div>
        </div>
        <div className="border-2 flex items-center space-x-2 w-fit p-2 rounded-lg m-2	">
          <RiTailwindCssFill />
          <div>Tailwind CSS</div>
        </div>
      </div>
    </>
  );
}
