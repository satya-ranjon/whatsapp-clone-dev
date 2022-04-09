import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <div className="w-full h-screen bg-[#0a1014]">
      <div className="w-full bg-[#008069d2] h-52"></div>
      <div className="flex justify-center text-gray-50">
        <div className="flex justify-center">
          <FcGoogle />
          <p>Khokon</p>
        </div>
      </div>
    </div>
  );
}
