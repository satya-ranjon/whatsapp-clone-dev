import React from "react";
import { MdToll, MdMoreVert } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <></>
        <>
          <MdToll />
          <BiMessageDetail />
          <MdMoreVert />
        </>
      </div>
    </div>
  );
}
