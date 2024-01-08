import React from "react";
import "./componet1.css";
export const Componet1 = () => {
  return (
    <div className="type-bubble">
      <div className="bubble-container">
        <div className="nav-links">
          <div className="nav-link">
            <div className="nav-label">Start</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">Drugs</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">Studies</div>
          </div>
        </div>
        <div className="nav-links">
          <div className="nav-link">
            <div className="nav-label">Details</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">Breakthroughs</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">Reach Us</div>
          </div>
        </div>
        <div className="brand">
          <img className="icon" alt="Icon" src="icon.svg" />
          <div className="brand-name">CardioGluco Drugs</div>
        </div>
      </div>
    </div>
  );
};
