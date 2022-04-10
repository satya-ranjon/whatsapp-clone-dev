import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export default function UserProfile({ name, email, photoURL }) {
  return (
    <div className="px-4 py-3 pb-0 flex justify-start hover:bg-[#2a394294] cursor-pointer duration-500 transition-all relative hoverbtn overflow-hidden">
      <div className="my-auto">
        {/* <FaUserAlt className="w-8 h-8 rounded-full" /> */}
        <img className="w-8 h-8 rounded-full" src={photoURL} alt="" />
      </div>
      <div className="flex flex-col my-auto w-full ml-3 border-b-[1px] border-b-gray-800 pb-2">
        <p>{name}</p>
        <p className="text-sm">{email} </p>
      </div>

      <div className=" absolute px-5 bg-[#2a3942a8] bottom-2 text-xl hoverEf">
        <BsChevronDown />
      </div>
    </div>
  );
}