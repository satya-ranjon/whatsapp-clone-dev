import React from "react";
import { MdToll, MdMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-80">
      <div className="flex justify-between font-semibold text-xl">
        <div className="">
          <FaUserAlt />
        </div>
        <div className="flex justify-between ">
          <MdToll />
          <BiMessageDetail />
          <MdMoreVert />
        </div>
      </div>
    </div>
  );
}
