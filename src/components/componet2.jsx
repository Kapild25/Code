import React from "react";
import "./commponet2.css";

export const Componet2 = () => {
  return (
    <div className="type-horizontal">
      <div className="wrapper">
        <div className="copy-component">
          <div className="heading-text">
            <p className="heading">Transforming Heart and Diabetes Care</p>
            <p className="subheading">
              Cutting-edge answers for cardiac and sugar-related issues.
            </p>
          </div>
          <div className="CTA-button">
            <div className="text-container">
              <button className="CTA">Discover Our Medicines</button>
            </div>
          </div>
        </div>
        <img
          className="image-container"
          alt="Image container"
          src="image.svg"
        />
      </div>
    </div>
  );
};
