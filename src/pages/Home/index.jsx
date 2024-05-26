import React from 'react'
import hero_img from '/src/images/hero-img.png';
import "./style.css";


function Home() {
  return (
    <section className="hero">
    <div className="container hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          ...Your one stop shop for <span>digital identity</span>,
          <span>verification</span> &
          <span>cutting edge technology</span> solutions
        </h1>
        <a href="#" className="btn hero-btn"
          >Book a Session
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path fill="currentColor" d="M0 0h24v24H0z" />
                </mask>
                <g mask="url(#a)">
                  <path
                    d="m12 16 4-4-4-4-1.4 1.4 1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Z"
                    fill="currentColor"
                  />
                </g></svg>
        </a>
      </div>
      <img src={hero_img} alt="hero img" />
    </div>
  </section>
  )
}

export default Home