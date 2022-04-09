import React from "react";
import { Navigate, Outlet } from "react-router";
import SideBar from "../Components/SideBar";
import { useAuth } from "../Context/AuthProvider";

export default function PrivateRoutes() {
  const { currentUser } = useAuth();
  return currentUser ? (
    <div className="lg:p-5 lg:px-44 bg-[#0a1014] flex">
      <SideBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
