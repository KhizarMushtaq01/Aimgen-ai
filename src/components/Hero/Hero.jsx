import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="main-content">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="content">
            <span className="white">AI-Powered</span>
            <div className="white">
              <span className="gradient2">Creativity</span> at Your
            </div>

            <span className="white">Fingertips</span>
            <div className="input1">
              <input
                placeholder="Example Prompt"
                type="text"
                className="input2"
              />
              <button type="submit" className="generate">
                Generate Now
              </button>
            </div>
            <div className="list">
              <ul>
                <li>
                  <img className="arrow" src="/icons/arrow.png" alt="" />
                  Category One
                </li>
                <li>
                  <img className="arrow" src="/icons/arrow.png" alt="" />
                  Category Two
                </li>
                <li>
                  <img className="arrow" src="/icons/arrow.png" alt="" />
                  Our Category
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
