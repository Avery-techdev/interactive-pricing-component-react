import React from "react";

import "./Slider.css";

export default function Slider() {
  return (
    <div className="Slider">
      <div className="grey-text d-inline text-start" >
       100K PAGEVIEWS
      </div>
      <div className="dollar d-inline p-0">
        $16.00
      </div>
      <div className="d-inline grey-text per-month">
        /month   
      </div>
      <input type="range"/>
      <div className="billing-text">
        <span className="text-spacing">
          Monthly Billing
        </span>
        <input type="checkbox" className="switch" />
        <span className="text-spacing">
          Yearly Billing
        </span>
        <span className="discount">
          25% discount
        </span>
      </div>
    </div>
    
  );
}