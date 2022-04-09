import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0">
      <div className="grid grid-flow-col">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="w-full">
          <input type="text" />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
