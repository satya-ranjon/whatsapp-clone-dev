import React from 'react'

export default function ChatBox() {
  return (
    <div className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin">
      <div className="w-full flex justify-start">
        <div className="w-fit p-2 rounded-md m-3 bg-[#202c33] h-fit text-sm text-gray-200 pr-15 relative">
                      ki khabor ki korace
                      <div className=" absolute right-2 bottom-0 text-[10px]">9:52 PM </div>
        </div>
      </div>
    </div>
  );
}