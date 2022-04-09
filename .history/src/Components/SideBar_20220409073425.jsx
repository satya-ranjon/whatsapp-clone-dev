import React from "react";
import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideBarUseList from "./SideBarUseList";

export default function SideBar() {
  return (
    <div className="w-72 border-r-[1px] border-b-gray-700">
      <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
        <div>
          <FaUserAlt className="rounded-full w-8 h-8" />
          {/* <img
            className="rounded-full w-8 h-8 "
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          /> */}
        </div>
        <div className="flex justify-between space-x-5 cursor-pointer my-auto">
          <MdToll />
          <MdMessage />
          <MdMoreVert />
        </div>
      </div>
      <SideBarUseList />
    </div>
  );
}
