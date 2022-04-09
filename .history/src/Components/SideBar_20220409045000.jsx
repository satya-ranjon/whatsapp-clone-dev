import React from "react";
import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-80">
      <div className="flex justify-between font-semibold text-xl px-5 py-3 bg-[#202c33] text-gray-200">
        <div className="rounded-full">
          <FaUserAlt />
        </div>
        <div className="flex justify-between space-x-5 cursor-pointer ">
          <MdToll />
          <MdMessage />
          <MdMoreVert />
        </div>
      </div>
    </div>
  );
}
