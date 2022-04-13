import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatFooter({ message, setMessage, send }) {
  const [chosenEmoji, setChosenEmoji] = useState(false);

  return (
    <>
      <div className="absolute bottom-0 w-full bg-[#202c33] p-4 py-2">
        <form
          className="flex justify-between w-full space-x-5 text-[#6c7b85] text-4xl"
          onSubmit={send}
        >
          <BsEmojiSmileFill
            className="my-auto cursor-pointer"
            onClick={() => setChosenEmoji((priv) => !priv)}
          />
          <BiLinkAlt className="my-auto cursor-pointer" />
          <div className="w-full">
            <input
              className="w-full outline-none bg-[#2a3942] p-3 px-4 rounded-md text-sm placeholder:text-sm text-white"
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <MdKeyboardVoice className="my-auto cursor-pointer" />
        </form>
      </div>
      {chosenEmoji && (
        <div className=" absolute bottom-20 left-2">
          <Picker
            onEmojiClick={(event, emojiObject) =>
              setMessage(message + emojiObject.emoji)
            }
          />
        </div>
      )}
    </>
  );
}
