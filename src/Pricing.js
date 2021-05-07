import React from "react";

import "./Pricing.css";

export default function Pricing () {
  return (
    <div className="Pricing shadow">
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
        <div className="row">
          <div className="warranty col-6">
            <p>
              Unlimited websites
            </p>
            <p>
              100% data ownership
            </p>
            <p>
            Email reports
            </p>
          </div>
            <div className="col-6">
              <button  className="btn btn-start">
                Start my trial 
              </button>
              
            </div>
  
      
        </div>
      
    </div>
  )
}