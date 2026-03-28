import React from "react";
import bImg from "../assets/image/pexels-daniela-elena-tentis-118658-750073.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Background Image */}
        <img
          src={bImg}
          alt="Delicious fast food"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delicious Food
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Delivered <span className="text-orange-500">Fast</span>
          </h1>

          <p className="mt-4 max-w-md text-gray-200 text-sm sm:text-base">
            Fresh meals delivered to your door in minutes. Order your favorite
            dishes anytime.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold">
              Order Now
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
