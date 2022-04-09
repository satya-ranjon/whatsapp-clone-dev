import React from "react";
import { MdToll, MdMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
          <FaUserAlt />
        </div>
        <div className="">
          <MdToll />
          <BiMessageDetail />
          <MdMoreVert />
        </div>
      </div>
    </div>
  );
}
