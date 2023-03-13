import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const LandingPageLayout = ({ children }: any) => {
  return (
    <div className="bg-white">
      <Navbar /> 
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
