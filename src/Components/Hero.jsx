import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Section5 />
    </div>
  );
}

export default Hero;
