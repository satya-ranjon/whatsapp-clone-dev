import React from "react";
import { Outlet } from "react-router";
import SideBar from "../Components/SideBar";

export default function PrivateRoutes() {
  return (
    <div className="lg:p-5 lg:px-44 bg-[#0a1014] flex">
      <SideBar />
      <Outlet />
    </div>
  );
}
