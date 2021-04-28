import React from "react";
import Pricing from "./Pricing";
import './App.css';

export default function App() {
  return (
    <div className="App Container">
      <div className="header">
      <h2>
        Simple, traffic-based pricing
      </h2>
      <p className="grey-text">
        Sign-up for our 30-day trial. No credit card required.
      </p>
      <Pricing />
      </div>
      <footer>
       Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8" rel="noreferrer" target="_blank"  >Frontend Mentor</a> <br /> <a href="https://github.com/Avery-techdev/interactive-pricing-component-react" target="_blank" >coded</a> by Annabell Hauschild
      </footer>
    </div>
  );
}
