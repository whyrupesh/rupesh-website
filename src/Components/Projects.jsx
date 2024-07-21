import React from "react";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <>
      <div className="text-3xl pt-5 pl-5 underline  decoration-blue-500">
        Projects
      </div>

      <div className="flex flex-col items-center">
        <ProjectCards
          url={"https://github.com/whyrupesh/SecondHand-website"}
          img={"/static/images/secondhand.jpeg"}
          name={"SecondHand"}
          description={"Buy and Sell Old Products."}
        />

        <ProjectCards
          url={"https://qr-code-generator-whyrupesh.vercel.app/"}
          img={"/static/images/qr.png"}
          name={"QR Code Generator"}
          description={"Generate a QR code of any URL/Text."}
        />

        <ProjectCards
          url={"https://whyrupesh.tech/"}
          img={"/static/images/whyrupesh.png"}
          name={"whyrupesh"}
          description={"Personal Website"}
        />
      </div>
    </>
  );
}
