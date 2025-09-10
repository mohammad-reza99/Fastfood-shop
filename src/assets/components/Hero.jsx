import React from "react";
import bImg from "../image/pexels-daniela-elena-tentis-118658-750073.jpg";
const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[700px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[700px] bg-black/40 flex flex-col justify-center text-left">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src={bImg} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
