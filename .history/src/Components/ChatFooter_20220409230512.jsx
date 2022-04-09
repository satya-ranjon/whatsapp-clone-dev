import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className=" relative bottom-0 w-full">
      <div className="grid grid-cols-3">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="">
          <input type="text" />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
