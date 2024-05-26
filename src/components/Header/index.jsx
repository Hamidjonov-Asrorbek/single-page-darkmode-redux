import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dark from "/src/images/dark.svg";
import light from "/src/images/light.svg";
import "./style.css";

function Header() {
  const darkmode = useSelector((state) => state.darkmode);
  const dispatch = useDispatch();

  function setDarkMode() {
    if (!darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    dispatch({ type: "CHANGE_MODE" });
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
        <button className="header-btn" onClick={setDarkMode}>
          {darkmode ? (
            <>
              <img src={light} className="light_icon" alt="light_icon" />
              <p className="dark__text">LightMode</p>
            </>
          ) : (
            <>
              <img src={dark} className="dark_icon" alt="dark_icon" />
              <p className="dark__text">DarkMode</p>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
