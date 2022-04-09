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
          <div className="my-auto">
            <FaUserAlt className="w-8 h-8 rounded-full" />
          </div>
          <p className="flex flex-col my-auto w-full ml-3 border-b-[1px] border-b-gray-600 pb-02">
            <p>Brish</p>
            <p className="text-sm">New one message</p>
          </p>
        </p>
      ))}
    </div>
  );
}
