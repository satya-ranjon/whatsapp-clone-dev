import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const array = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

export default function SideBarUseList() {
  return (
    <div className="bg-[#111b21] overflow-y-scroll scroll-my-1 h-[94.1vh] scrollbar scrollbar-thumb-gray-400 scrollbar-thin text-gray-200 duration-500 transition-all">
      {array.map((i, index) => (
        <div
          key={index}
          className="px-4 py-3 pb-0 flex justify-start hover:bg-[#2a3942] cursor-pointer duration-500 transition-all relative"
        >
          <div className="my-auto">
            <FaUserAlt className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex flex-col my-auto w-full ml-3 border-b-[1px] border-b-gray-800 pb-2">
            <p>Brish</p>
            <p className="text-sm">New one message one message</p>
          </div>
          <div className=" absolute px-4 bg-[#111b21]">
            <BsChevronDown />
          </div>
        </div>
      ))}
    </div>
  );
}
