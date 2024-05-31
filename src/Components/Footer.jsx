import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <button onClick={scrollToTop} className="border-2 m-5 p-2 bg-slate-600">
        Back to Top
      </button>
    </>
  );
}
