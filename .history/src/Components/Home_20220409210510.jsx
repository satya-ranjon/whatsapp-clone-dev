import React from "react";
import Image from "../Assets/home.png";

export default function Home() {
  return (
    <div className="flex justify-center  w-full bg-slate-400">
      <div className="flex justify-center my-auto w-full">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}
