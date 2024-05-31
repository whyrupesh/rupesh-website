import React from "react";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="home-container ml-8 flex flex-col	md:flex-row  md:items-center	">
        <div className="w-auto">
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

        <img
          className="md:w-2/5 md:ml-auto"
          src="/static/images/whyrupesh.png"
          alt="rupesh-img"
        />
      </div>

      <About />
      <Projects />
      <Footer />
    </>
  );
}
