import React from "react";
import "./How.css";
const How = () => {
  return (
    <>
      <div className="How">
        <div className="combine3">
        <div className="BTNs">
          <button className="BTN1">Section One</button>
          <button className="BTN">Section Two</button>
          <button className="BTN">Section Three</button>
          <button className="BTN">Section Four</button>
          <button className="BTN">Section Five</button>
        </div>
        <div className="concept">
          <div>From Concept to</div>
          <div>
            <span className="gradient-how">Completion</span> in Minutes
          </div>
          <p className="conceptpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            officia vel blanditiis facere voluptate quisquam aut porro ducimus
            error nulla quos, vitae, neque esse deleniti adipisci inventore
            cumque sint. Sunt vero expedita eos minus ipsa? Aspernatur laborum
            repellendus saepe architecto.
          </p>
          <button className="next">Next Tips</button>
        </div>
        </div>
        <div>
          <div className="ratingbox">
            <div className="rating-item">
              <div className="fontweight-how">12 +</div>
              <div>Year Experience</div>
            </div>
            <div className="rating-item">
              <div className="fontweight-how">300</div>
              <div>Partners</div>
            </div>
            <div className="rating-item">
              <div className="fontweight-how">19.2 K</div>
              <div>Project Done</div>
            </div>
            <div className="rating-item">
              <div className="fontweight-how">280 +</div>
              <div>Testimonial Positive</div>
            </div>
            <div className="rating-item">
              <div className="fontweight-how">4.8</div>
              <div>Rating Work</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
