import React from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter() {
  return (
    <div className=" fixed bottom-0 ">
      <div className="">
        <BsEmojiSmileFill />
        <BiLinkAlt />
        <div className="">
          <input />
        </div>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
