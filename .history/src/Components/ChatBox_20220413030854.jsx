import React from "react";
import ChatMesseage from "./ChatMesseage";

export default function ChatBox({ ChatMesseages }) {
  console.log(ChatMesseages);
  return (
    <div className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin px-5 xl:px-40 pt-80">
      {ChatMesseages.map((messeage) => (
      ))}
      <ChatMesseage />
    </div>
  );
}
