import React from "react";
import { Outlet } from "react-router";

export default function PrivateRoutes() {
  return (
    <div className="lg:p-5 lg:px-44 bg-[#0a1014] flex">
      <Outlet />
    </div>
  );
}
