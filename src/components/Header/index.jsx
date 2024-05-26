import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { darkMode } from "../../context/context";
import dark from "/src/images/dark.svg";
import light from "/src/images/light.svg";
import "./style.css";

function Header() {
  const {
    state: { darkmode },
    ChangeMode,
  } = useContext(darkMode);
  function setDarkMode() {
    if (!darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    ChangeMode();
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-nav">
          <Link to="/" className="logo">
            LOGO
          </Link>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services">Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/partners">Our partners</NavLink>
            </li>
          </ul>
        </div>
        <btn className="header-btn" onClick={() => setDarkMode()}>
          {darkmode ? (
            <>
              <img src={light} className="ligth_icon" alt="light_icon" />
              <p className="dark__text">LightMode</p>{" "}
            </>
          ) : (
            <>
              <img src={dark} className="dark_icon" alt="dark_icon" />
              <p className="dark__text">DarkMode</p>{" "}
            </>
          )}
        </btn>
      </div>
    </header>
  );
}

export default Header;
