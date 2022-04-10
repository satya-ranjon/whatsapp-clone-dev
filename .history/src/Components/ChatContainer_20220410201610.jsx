import React from "react";
import { useParams,useLocation } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

export default function ChatContainer() {
  const {path} = useParams();
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}