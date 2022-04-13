import React from "react";

export default function ChatMesseage({ messeage, time }) {
  //   console.log(messeage.payload);
  let p = query(messeages, orderBy("timestamp"), startAt(1000000));
  console.log(p);
  return (
    <div className="w-full flex justify-start">
      <div className="w-fit max-w-md p-2 rounded-md rounded-bl-xl m-3 rounded-tl-none bg-[#202c33] h-fit text-sm text-gray-200 pr-14 relative">
        {messeage.payload.message}
        <div className=" absolute right-2 bottom-0 text-[10px]">9:52 PM </div>
      </div>
    </div>
  );
}