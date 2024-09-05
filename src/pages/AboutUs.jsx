// src/pages/AboutUs.jsx

import React from "react";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";
function AboutUs() {
  return <div className="max-w-7xl mx-auto pt-20 px-6">
    <About />
    <Team />
    <Footer />
  </div>;
}

export default AboutUs;
