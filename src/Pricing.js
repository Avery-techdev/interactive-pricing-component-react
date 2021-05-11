import React from "react";
import Slider from "./Slider";

import "./Pricing.css";

export default function Pricing () {
  return (
    <div className="Pricing shadow">
      <Slider />
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