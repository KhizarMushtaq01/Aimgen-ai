import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  return (
    <>
      <div className="main1">
        <div className="partner">300+ partners in Aimgen.ai</div>
        <div className="banner">
          <ul className="partnerlist">
            <li>Ipsum</li>
            <li>Google</li>
            <li>Microsoft</li>
            <li>LogoIpsum</li>
            <li>Getslick</li>
            <li>Qantas</li>
            <li>OpenAi</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
