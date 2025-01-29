import React from "react";
import "./FAQ.css";
import Data from "./Data";
import { useState } from "react";
const FAQ = () => {
  const [Selected, setSelected] = useState(null);
  const [Multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === Selected ? null : getCurrentId);
    console.log(getCurrentId);
    console.log(Selected);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...Multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    console.log(findIndexOfCurrentId);
  };

  return (
    <>
      <div className="Faq">
        <div className="combinefaq">
          <div className="faq2">
            <div className="get">Get the</div>
            <div className="get">
              <span className="Gradient-faq">Informationss </span> You
            </div>
            <div className="get">Need</div>
            <p className="faqpara">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              doloribus illum nobis! Cupiditate deserunt at aliquam facilis.
              Quos quis distinctio repellendus excepturi similique. Harum
              commodi sit quas inventore hic? Sequi.
            </p>
            <button className="next2">Next Tips</button>
          </div>

          <div className="wrapper">
            <div className="accordion">
              {Data && Data.length > 0 ? (
                Data.map((dataitem) => {
                  return (
                    <div className="item" key={dataitem.id}>
                      <div
                        className="question"
                        onClick={() => handleSingleSelection(dataitem.id)}
                      >
                        <h3>{dataitem.title}</h3>
                        <span>+</span>
                      </div>
                      {Selected === dataitem.id ? (
                        <div className="ans">{dataitem.description}</div>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div>No data found!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
