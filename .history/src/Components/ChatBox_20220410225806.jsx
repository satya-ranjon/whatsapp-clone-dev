import React from 'react'

export default function ChatBox() {
  return (
    <div className=" overflow-scroll h-[52.2rem] cursor-pointer scrollbar scrollbar-thumb-gray-400 scrollbar-thin px-5 xl:px-40 pt-80">
      <div className="w-full flex justify-start">
        <div className="w-fit p-2 rounded-md rounded-bl-xl m-3 rounded-tl-none bg-[#202c33] h-fit text-sm text-gray-200 pr-14 relative">
          ki khabor ki korace
          <div className=" absolute right-2 bottom-0 text-[10px]">9:52 PM </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div className="w-fit max-w-xl p-2 rounded-md rounded-br-xl m-3 rounded-tr-none bg-[#005c4b] h-fit text-sm text-gray-200 pr-14 relative">
          kicu na kicu na kicu na kicu na 
          kicu na kicu na kicu na kicu na 
          kicu na kicu na kicu na kicu na 
          <div className=" absolute right-2 bottom-0 text-[10px]">9:52 PM </div>
        </div>
      </div>
    </div>
  );
}
