import React from "react";
import Hero from "./Hero";
import About from "./About";

const StickySection = () => {
  return (
    <div className="relative">
      <div className="h-screen sticky top-0">
        <Hero />
      </div>
      <div className="h-screen">
        <About />
      </div>
    </div>
  );
};

export default StickySection;
