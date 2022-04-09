import React from "react";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

export default function ChatContainer() {
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}
npm i emoji-picker-react