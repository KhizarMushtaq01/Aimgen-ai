import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "../Form/Form";

const Navbar = () => {
  const [hideForm, setHideForm] = useState(false);
  const [showHideNavbar, setShowHideNavbar] = useState(false);
  const ShowSignUpForm = () => {
    setHideForm(!hideForm);
  };

  const toggleNavbar = () => {
    setShowHideNavbar(!showHideNavbar);
  };
  console.log(showHideNavbar);
  return (
    <>
      {hideForm ? <SignUpForm /> : null}
      <header>
        <div onClick={toggleNavbar} className="burger">
          <div className="burgerbar"></div>
          <div className="burgerbar"></div>
          <div className="burgerbar"></div>
        </div>
        <nav className={`container ${showHideNavbar ? "active" : ""}`}>
          <div className="main">
            <div className="logo">
              <svg
                className="aimgensvg"
                width="22"
                height="22"
                viewBox="0 0 37 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2917 3.33333H10V0H24.625L21.2917 3.33333ZM14.625 10H5V6.66667H17.9583L14.625 10ZM7.95833 16.6667H0V13.3333H11.2917L7.95833 16.6667ZM22.6667 20L18.3333 15.6667L10 24L14.3333 28.3333L22.6667 20ZM20.7083 13.2917L25.0417 17.625L33.3333 9.33333L29 5L20.7083 13.2917ZM17.2083 12.125L26.2083 21.125L16.6667 30.6667C16 31.3333 15.2222 31.6667 14.3333 31.6667C13.4444 31.6667 12.6667 31.3333 12 30.6667L11.9167 30.5833L10.8333 31.6667H2.5L7.75 26.4167L7.66667 26.3333C7 25.6667 6.66667 24.8889 6.66667 24C6.66667 23.1111 7 22.3333 7.66667 21.6667L17.2083 12.125ZM17.2083 12.125L26.6667 2.66667C27.3333 2 28.1111 1.66667 29 1.66667C29.8889 1.66667 30.6667 2 31.3333 2.66667L35.6667 7C36.3333 7.66667 36.6667 8.44444 36.6667 9.33333C36.6667 10.2222 36.3333 11 35.6667 11.6667L26.2083 21.125L17.2083 12.125Z"
                  fill="url(#paint0_linear_2_39)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_39"
                    x1="26.4632"
                    y1="1.37222"
                    x2="1.58504"
                    y2="15.7158"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2957" />
                    <stop offset="1" stop-color="#FF7357" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="aimgen">Aimgen.ai</span>
            </div>
            <div className="links">
              <ul className="nav-items-container">
                <li>
                  <NavLink
                    to={"/Home"}
                    className={({ isActive }) => (isActive ? "gradient" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Features"}
                    className={({ isActive }) => (isActive ? "gradient" : "")}
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/HowitWorks"}
                    className={({ isActive }) => (isActive ? "gradient" : "")}
                  >
                    How it Works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Pricing"}
                    className={({ isActive }) => (isActive ? "gradient" : "")}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/FAQ"}
                    className={({ isActive }) => (isActive ? "gradient" : "")}
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="start">
              <button onClick={ShowSignUpForm}>Get Started</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
