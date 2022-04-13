import React from "react";
import ChatMesseage from "./ChatMesseage";

export default function ChatBox({ ChatMesseages }) {
  return (
    <div className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin px-5 xl:px-40 pt-80">
      {ChatMesseages &&
        ChatMesseages.map((messeage, i) => (
          <ChatMesseage messeage={messeage.message} key={i} />
        ))}
    </div>
  );
}
