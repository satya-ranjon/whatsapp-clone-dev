import React from "react";
import { MdToll, MdMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <>
          <FaUserAlt />
        </>
        <>
          <MdToll />
          <BiMessageDetail />
          <MdMoreVert />
        </>
      </div>
    </div>
  );
}
