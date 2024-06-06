import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <button onClick={scrollToTop} className="border-2 m-5 p-2 bg-slate-600">
        Back to Top
      </button>
      <div className="flex items-center justify-center mb-5">
        <p>Made with 💖 by @whyrupesh</p>
      </div>
    </>
  );
}
