import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Skill from "./Skill";

export default function () {
  const onButtonClick = () => {
    const pdfUrl = "Rupesh Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rupesh Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="p-5">
        <h1 className="text-3xl underline  decoration-blue-500">About me</h1>

        <div>2nd Year CSE Student</div>
        <div>at Vellore Institute of Technology, Chennai</div>
        <div className="flex space-x-4 pt-3">
          <a href="https://www.linkedin.com/in/whyrupesh/">
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com/whyrupesh">
            <FaInstagramSquare className="w-10 h-10" />
          </a>
          <a href="https://github.com/whyrupesh">
            <FaGithub className="w-10 h-10" />
          </a>
        </div>

        <button className="border-2 p-2 mt-3" onClick={onButtonClick}>
          Download CV
        </button>

        <Skill />
      </div>
    </>
  );
}
