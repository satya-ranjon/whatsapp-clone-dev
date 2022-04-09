import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-[#202c33] p-3">
      <div className="flex justify-between w-full">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="w-full px-4">
          <input className="w-full outline-none bg-[#2a3942]" type="text" />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
