import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-[#202c33] p-4 py-3">
      <div className="flex justify-between w-full space-x-5 text-[#6c7b85] text-2xl">
        <BsEmojiSmileFill className="my-auto cursor-pointer" />
        <BiLinkAlt className="my-auto cursor-pointer" />
        <div className="w-full">
          <input
            className="w-full outline-none bg-[#2a3942] p-1 px-4 text-md"
            type="text"
          />
        </div>
        <MdKeyboardVoice className="my-auto cursor-pointer" />
      </div>
    </div>
  );
}
