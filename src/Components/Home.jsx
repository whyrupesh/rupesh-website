import React from "react";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="ml-8">
        <div className="text-2xl">Hi there!</div>
        <div className="flex align-center items-center">
          <div className="text-2xl">
            This is <span className=" text-blue-500">Rupesh.</span>{" "}
          </div>
        </div>

        <div className="text-2xl">
          Sometimes I<span id="changingText"></span>
        </div>
      </div>

      <img src="whyrupesh.png" alt="" />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
