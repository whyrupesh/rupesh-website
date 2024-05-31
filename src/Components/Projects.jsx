import React from "react";

export default function Projects() {
  return (
    <>
      <div className="text-3xl pt-5 pl-5 underline  decoration-blue-500">
        Projects
      </div>

      <div className="flex flex-col items-center">
        <a href="https://github.com/whyrupesh/SecondHand-website">
          <div className="border-2 w-3/4 m-5">
            <div className="p-5">
              <img src="resources/secondhand.jpeg" alt="" />
              <div className="pt-2">
                <div className="text-2xl">SecondHand</div>
                <div>Buy and Sell Old Products.</div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/whyrupesh/">
          <div className="border-2 w-3/4 m-5">
            <div className="p-5">
              <img className="border-2" src="resources/site.png" alt="" />
              <div className="pt-2">
                <div className="text-2xl">whyrupesh</div>
                <div>Personal Website</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
