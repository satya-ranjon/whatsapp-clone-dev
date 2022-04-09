import React from "react";
import { MdToll, MdMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-80">
      <div className="flex justify-between font-semibold text-xl px-5 py-3 bg-[#202c33]">
        <div className="rounded-full">
          <FaUserAlt />
        </div>
        <div className="flex justify-between space-x-5 ">
          <MdToll />
          <BiMessageDetail />
          <MdMoreVert />
        </div>
      </div>
    </div>
  );
}
