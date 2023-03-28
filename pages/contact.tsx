import Contact from "@/components/Contact";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import React from "react";

const contact = () => {
  return (
    <div className="bg-white">
      <LandingPageLayout>
        <Contact />
      </LandingPageLayout>
    </div>
  );
};

export default contact;
