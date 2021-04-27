import React from "react";

import "./Pricing.css";

export default function Pricing () {
  return (
    <div className="Pricing shadow">
      <div class="grey-text d-inline text-start" >
       100K PAGEVIEWS
      </div>
      <div class="dollar d-inline p-0">
        $16.00
      </div>
      <div class="d-inline grey-text per-month">
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
  )
}