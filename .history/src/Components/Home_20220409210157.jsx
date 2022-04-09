import React from "react";
import Image from "../Assets/home.png";

export default function Home() {
  return (
    <div className="bg-[#222e35]">
      <div className="flex justify-center my-auto w-full ">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}
