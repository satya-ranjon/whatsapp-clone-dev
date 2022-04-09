import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex justify-between w-full">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="w-full">
          <input className="w-full" type="text" />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
