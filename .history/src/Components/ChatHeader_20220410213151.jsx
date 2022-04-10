import React from "react";
import { MdMoreVert } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export default function ChatHeader({ chatuser }) {
  return (
    <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
      <div>
        {" "}
        {chatuser ? (
          <img
            className="rounded-full w-8 h-8 "
            src={chatuser.photoURL}
            alt=""
          />
        ) : (
          <FaUserAlt className="rounded-full w-8 h-8" />
        )}
      </div>
      <div className="flex justify-between space-x-5 cursor-pointer my-auto">
        <AiOutlineSearch />
        <MdMoreVert />
      </div>
    </div>
  );
}
