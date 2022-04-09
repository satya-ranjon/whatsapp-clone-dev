import React from "react";
import { FaUserAlt } from "react-icons/fa";

const array = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

export default function SideBarUseList() {
  return (
    <div className="bg-[#111b21] overflow-y-scroll scroll-my-1 h-[94.1vh] scrollbar scrollbar-thumb-gray-400 scrollbar-thin text-gray-200">
      {array.map((i, index) => (
        <p key={index} className="px-4 py-3 flex justify-start ">
          <div>
            <FaUserAlt className="w-8 h-8 rounded-full" />
          </div>
          <p className="flex flex-col">
            <p>Brish</p>
            <p className="text-sm">New one message</p>
          </p>
        </p>
      ))}
    </div>
  );
}
