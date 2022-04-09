import React from "react";
import Image from "../Assets/home.png";

export default function Home() {
  return (
    <div className="flex justify-center  w-full bg-[#222e35]">
      <div className="flex  my-auto w-full">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}
