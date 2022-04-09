import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Login() {
  return (
    <div className="w-full h-screen bg-[#0a1014]">
      <div className="w-full bg-[#008069d2] h-52">
        <p>
          <IoLogoWhatsapp /> Whatsapp Clone
        </p>
      </div>
      <div className="flex justify-center text-gray-100 font-semibold">
        <div className="flex justify-between bg-[#222e35] p-3 space-x-3 mt-60 rounded-md cursor-pointer hover:bg-[#222e35b2]">
          <FcGoogle className="my-auto" />
          <p>Registration</p>
        </div>
      </div>
    </div>
  );
}
