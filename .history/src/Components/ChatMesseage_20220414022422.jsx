import React from "react";
import { useAuth } from "../Context/AuthProvider";

export default function ChatMesseage({ messeage, time, sender }) {
  const { currentUser } = useAuth();
  console.log(messeage);
  return (
    <div
      className={`w-full flex ${
        sender === currentUser.uid ? " justify-end" : "justify-start"
      }`}
    >
      <div
        className={`w-fit max-w-md p-2 rounded-md rounded-bl-xl m-3 rounded-tl-none h-fit text-sm text-gray-200 pr-14 relative ${
          sender === currentUser.uid ? " bg-[#005c4b]" : "bg-[#202c33]"
        }`}
      >
        {messeage}
        <div className=" absolute right-2 bottom-0 text-[10px]">
          {new Date(time.toDate()).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
