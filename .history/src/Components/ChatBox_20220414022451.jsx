import React from "react";
import ChatMesseage from "./ChatMesseage";

function ChatBox({ ChatMesseages, chatReff }) {
  return (
    <div
      className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin px-5 xl:px-40 pt-80 pb-20"
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

export default React.memo(ChatBox);
