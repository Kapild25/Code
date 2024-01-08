import React from "react";
import "./component3.css";
export const Componet3 = () => {
  return (
    <div className="type-gallery-with">
      <div className="content">
        <div className="heading-container">
          <div className="heading">Trailblazing Drug Designs</div>
          <p className="subheading">
            A fresh tide of heart and diabetic remedies.
          </p>
        </div>
        <div className="media-layouts">
          <div className="showcase-item">
            <img
              className="image-aisplash"
              alt="Image aisplash"
              src="imagelibrary.svg"
            />
            <div className="item-info">
              <div className="label">HeartHeal Drug</div>
              <img
                className="arrow-right"
                alt="Arrow right"
                src="ArrowRight.svg"
              />
            </div>
          </div>
          <div className="showcase-item">
            <img
              className="image-aisplash"
              alt="Image aisplash"
              src="image2.svg"
            />
            <div className="item-info">
              <div className="label">BalanceSugar Capsules</div>
              <img className="arrow-right" alt="Arrow right" src="ArrowRight.svg" />
            </div>
          </div>
          <div className="showcase-item">
            <img
              className="image-aisplash"
              alt="Image aisplash"
              src="image3.svg"
            />
            <div className="item-info">
              <div className="label">PulseCalm Pills</div>
              <img
                className="arrow-right"
                alt="Arrow right"
                src="ArrowRight.svg"
              />
            </div>
          </div>
          <div className="showcase-item">
            <img
              className="image-aisplash"
              alt="Image aisplash"
              src="image4.svg"
            />
            <div className="item-info">
              <div className="label">ControlGluco Tablets</div>
              <img
                className="arrow-right"
                alt="Arrow right"
                src="ArrowRight.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
