import React from "react";

export default function ChatMesseage({ messeage, time }) {
  //   console.log(messeage.payload);
  return (
    <div className="w-full flex justify-start">
      <div className="w-fit max-w-md p-2 rounded-md rounded-bl-xl m-3 rounded-tl-none bg-[#202c33] h-fit text-sm text-gray-200 pr-14 relative">
        {messeage}
        <div className=" absolute right-2 bottom-0 text-[10px]">
          {new Date(time.toDate()).toLocaleTimeString("it-IT")}
        </div>
      </div>
    </div>
  );
}
