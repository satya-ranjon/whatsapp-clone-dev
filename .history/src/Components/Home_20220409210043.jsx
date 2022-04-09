import React from "react";
import Image from "../Assets/home.png";

export default function Home() {
  return (
    <div className="flex justify-center py-auto w-full bg-gray-700">
      <img src={Image} alt="" />
    </div>
  );
}
