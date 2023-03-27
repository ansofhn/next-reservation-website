import Dashboard from "@/components/CMS/Dashboard";
import CMSLayout from "@/layouts/CMSLayout";
import React from "react";

const index = () => {
  return (
    <div className="bg-white">
      <CMSLayout>
        <Dashboard />
      </CMSLayout>
    </div>
  );
};

export default index;
