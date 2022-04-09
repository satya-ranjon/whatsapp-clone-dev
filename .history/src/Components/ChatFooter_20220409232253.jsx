import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-[#202c33] p-4">
      <div className="flex justify-between w-full space-x-5 text-2xl">
        <BsEmojiSmileFill className="my-auto cursor-pointer" />
        <BiLinkAlt className="my-auto cursor-pointer" />
        <div className="w-full">
          <input className="w-full outline-none bg-[#2a3942] p-2" type="text" />
        </div>
        <MdKeyboardVoice className="my-auto cursor-pointer" />
      </div>
    </div>
  );
}
