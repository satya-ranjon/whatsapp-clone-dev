import React from "react";
import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="w-72">
      <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
        <div className="rounded-full w-10 h-10">
          {/* <FaUserAlt /> */}
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          />
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
