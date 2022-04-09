import React from "react";
import { FcGoogle } from "react-icons/fc";
import Whatsapp from "../Assets/whatsapp.png";
export default function Login() {
  return (
    <div className="w-full h-screen bg-[#0a1014]">
      <div className=" bg-[#008069d2] h-52 flex justify-center">
        <div className="flex justify-between space-x-3 my-auto text-xl font-semibold text-gray-100">
          <img src={Whatsapp} className="w-8 h-8" alt="whatapp" />
          <p>Whatsapp Clone</p>
        </div>
      </div>
      <div className="flex justify-center text-gray-100 font-semibold">
        <div className="flex justify-between bg-[#222e35] p-3 space-x-3 mt-60 rounded-md cursor-pointer hover:bg-[#222e35b2]">
          <FcGoogle className="my-auto" />
          <p>Registration</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
