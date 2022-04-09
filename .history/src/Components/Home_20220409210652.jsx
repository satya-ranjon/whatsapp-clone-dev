import React from "react";
import Image from "../Assets/home.png";

export default function Home() {
  return (
    <div className="flex justify-center w-full bg-[#222e35] select-none">
      <div className="flex justify-center my-auto w-full select-none">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}
