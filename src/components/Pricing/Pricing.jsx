import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="combine4">
          <div className="perfect">
            Choose Your<span className="gradient-pricing">Perfect </span>
            Plan
          </div>
          <div className="perfectpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ea laboriosam, dicta mollitia beatae cumque quis nobis consectetur
            rem expedita libero iusto exercitationem fugit optio excepturi
            doloremque. Deleniti tempora tenetur iusto culpa laborum. Iure,
            eligendi porro commodi minima nostrum mollitia!
          </div>
        </div>
        <div className="pricingboxes">
          <div className="pricingbox">
            <div className="package">Basic Package</div>
            <div className="gradient4">$19/Month</div>
            <div className="packagepara">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              quis, commodi, deleniti laudantium rem optio adipisci inventore
              porro nihil earum sapiente eligendi est nostrum, voluptates
              aliquam magnam? Aut, rem assumenda!
            </div>
            <button className="contact">Contact Now</button>
          </div>
          <div className="pricingbox">
            <div className="package">Popular Package</div>
            <div className="gradient4">$30/Month</div>
            <div className="packagepara">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              error debitis dignissimos architecto doloremque numquam sed,
              labore quia! Quaerat rem aut id velit vero tempora obcaecati ipsum
              voluptatum! Officia, nihil.
            </div>
            <button className="contact">Contact Now</button>
          </div>
          <div className="pricingbox">
            <div className="package">Premeium Package</div>
            <div className="gradient4">$50/Month</div>
            <div className="packagepara">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              delectus animi nam quam. Sed ipsam reiciendis nostrum cum aliquid
              sit beatae. Placeat velit cumque molestiae, eaque obcaecati
              repellat incidunt est?
            </div>
            <button className="contact">Contact Now</button>
          </div>
        </div>
        <div className="custompricing">
          <div className="custom">Need a Custom Pricing Plan?</div>
          <button className="contact1">Contact Now</button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
