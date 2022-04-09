import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Whatsapp from "../Assets/whatsapp.png";
import one from "../Assets/one.png";
import two from "../Assets/two.png";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router";

export default function Login() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(currentUser);
    if (currentUser) navigate("/");
  }, []);

  const { googlesign } = useAuth();
  if (currentUser) navigate("/");
  return (
    <div className="w-full h-screen bg-[#0a1014]">
      <div className=" bg-[#008069d2] h-52 flex justify-center">
        <div className="flex justify-between space-x-3 my-auto text-xl font-semibold text-gray-100">
          <img src={Whatsapp} className="w-8 h-8" alt="whatapp" />
          <p>Whatsapp Clone</p>
        </div>
      </div>
      <div className="flex justify-center text-gray-100 font-semibold">
        <div
          className="flex justify-between bg-[#222e35] p-3 space-x-3 mt-60 rounded-md cursor-pointer hover:bg-[#222e35b2] z-10"
          onClick={() => googlesign()}
        >
          <FcGoogle className="my-auto" />
          <p>Registration</p>
        </div>
        <div className="absolute bottom-0 left-0  w-90">
          <img src={one} alt="" />
        </div>
        <div className=" absolute bottom-0 right-0  w-52 sm:w-96 ">
          <img src={two} alt="" />
        </div>
      </div>
    </div>
  );
}
