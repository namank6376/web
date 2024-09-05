import React from "react";
import Problem from "../components/Problem";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Workflow from "../components/Workflow";
import HeroSection from "../components/HeroSection"
import Pricing from "../components/Pricing";

const Idea = () => {
  return (
    
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <SocialLinks />
      <Footer />
      </div>
    
  );
};

export default Idea;
