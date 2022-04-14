import React from "react";
import ChatMesseage from "./ChatMesseage";

export default function ChatBox({ ChatMesseages, chatReff }) {
  console.log(ChatMesseages);
  return (
    <div
      className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin px-5 xl:px-40 pt-80"
      ref={chatReff}
    >
      {ChatMesseages &&
        ChatMesseages.map((messeage, i) => (
          <ChatMesseage
            messeage={messeage.message}
            sender={messeage.senderID}
            time={messeage.timestamp}
            key={i}
          />
        ))}
    </div>
  );
}
