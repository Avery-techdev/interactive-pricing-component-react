import React, { useState } from "react";

import "./Slider.css";

class Slider extends React.Component {

  state = {
    priceInputValue: "0", // initial input value
    priceInput: {         // slider values
      0: ["10 K"],
      1: ["50 K"],
      2: ["100 K"],
      3: ["500 K"],
      4: ["1 M"],
    },
    priceOutput: {        // output values
      plan1: {
        0: ["8.00"],
        1: ["12.00"],
        2: ["16.00"],
        3: ["24.00"],
        4: ["36.00"],
      }
    }
  };

  slider = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
  }

  handlePricingSlide = e => {
    this.setState({ priceInputValue: e.target.value });
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

 

  render() {
  return (
    <div className="Slider">
      <div className="row">
        <div className="grey-text d-inline text-start col-6">
          <div ref={this.sliderValue} className="pricing-slider-value">
              {this.getPricingData(this.state.priceInput)}
          </div> PAGEVIEWS
        </div>
        <div className="col-6">
          <div className="dollar d-inline p-0">
            ${this.getPricingData(this.state.priceOutput.plan1, 0)}
          </div>
          <div className="d-inline grey-text per-month">
            /month   
          </div>
        </div>
      </div>
      <input 
        type="range" 
        ref={this.slider} 
        defaultValue={this.state.priceInputValue}
        onChange={this.handlePricingSlide}
      />
      <div className="billing-text">
        <span className="text-spacing">
          Monthly Billing
        </span>
        <input type="checkbox" className="switch" onChange={this.handleSwitch} />
        <span className="text-spacing">
          Yearly Billing
        </span>
        <span className="discount">
          25% discount
        </span>
      </div>
    </div>
    
  );
  };
}

export default Slider;