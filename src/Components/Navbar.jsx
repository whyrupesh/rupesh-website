import React from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex justify-between p-5 items-center	">
      <h1 className="font-semibold w-4/5 text-2xl">whyrupesh</h1>
      <div className="menu-icon hidden" onClick={handleShowNavbar}>
        <FaBars className="h-6 w-6" />
      </div>
      <nav className="">
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="flex list-none	justify-between	space-x-10">
            <li>
              <Link to="/" onClick={handleShowNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" onClick={handleShowNavbar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={handleShowNavbar}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
