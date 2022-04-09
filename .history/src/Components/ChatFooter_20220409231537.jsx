import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className="absolute bottom-0 ">
      <div className="grid grid-cols-5">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="col-span-2">
          <input type="text" />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
