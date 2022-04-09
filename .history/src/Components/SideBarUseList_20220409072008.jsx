import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsChevronDown, BsArrowLeft } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const array = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

export default function SideBarUseList() {
  const [toogle, setToogle] = useState(true);

  return (
    <>
      <div className="bg-[#111b21] flex justify-center p-3">
        <div
          className="pl-14 rounded-md w-full bg-[#202c33] relative"
          onClick={() => setToogle(true)}
          onMouseOut={() => setToogle(false)}
        >
          <input
            type="text"
            id="search"
            className="bg-[#202c33]  p-1 outline-none text-gray-300  "
          />
          <label
            htmlFor="search"
            className="absolute left-3 bottom-2 text-gray-300 my-auto"
          >
            {(toogle && (
              <BsArrowLeft className="text-green-400 font-semibold" />
            )) || <AiOutlineSearch />}
          </label>
        </div>
      </div>
      <div className="bg-[#111b21] overflow-y-scroll scroll-my-1 h-[88vh] scrollbar scrollbar-thumb-gray-400 scrollbar-thin text-gray-200 duration-500 transition-all">
        {array.map((i, index) => (
          <div
            key={index}
            className="px-4 py-3 pb-0 flex justify-start hover:bg-[#2a394294] cursor-pointer duration-500 transition-all relative hoverbtn overflow-hidden"
          >
            <div className="my-auto">
              <FaUserAlt className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex flex-col my-auto w-full ml-3 border-b-[1px] border-b-gray-800 pb-2">
              <p>Brish</p>
              <p className="text-sm">New one message one message</p>
            </div>

            <div className=" absolute px-5 bg-[#2a3942a8] bottom-2 text-xl hoverEf">
              <BsChevronDown />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
