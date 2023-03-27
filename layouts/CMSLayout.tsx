import NavbarCMS from "@/components/CMS/NavbarCMS";
import React from "react";

const CMSLayout = ({ children }: any) => {
  return (
    <div>
      <NavbarCMS />
      {children}
    </div>
  );
};

export default CMSLayout;
