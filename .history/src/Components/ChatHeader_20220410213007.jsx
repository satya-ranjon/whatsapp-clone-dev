import React from "react";
import { MdMoreVert } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export default function ChatHeader({ image }) {
  return (
    <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
      <div>
        {/* <FaUserAlt className="rounded-full w-8 h-8" /> */}
        <img className="rounded-full w-8 h-8 " src={image} alt="" />
      </div>
      <div className="flex justify-between space-x-5 cursor-pointer my-auto">
        <AiOutlineSearch />
        <MdMoreVert />
      </div>
    </div>
  );
}
