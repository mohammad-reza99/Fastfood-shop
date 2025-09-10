import React from "react";
import img1 from "../image/pexels-foodie-factor-162291-566566.jpg";
import img2 from "../image/pexels-vanmalidate-769289.jpg";
import img3 from "../image/pexels-solodsha-8104576.jpg";

const HeadlineCards = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
            <p className="font-bold text-2xl pt-4">Sun's Out, BOGO's Out</p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={img1}
            alt="/"
          />
        </div>

        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
            <p className="font-bold text-2xl pt-4">New Restaurants</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={img2}
            alt="/"
          />
        </div>

        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
            <p className="font-bold text-2xl pt-4">We Deliver Desserts too</p>
            <p className="px-2">Tasty Treats</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={img3}
            alt="/"
          />
        </div>
      </div>
    </>
  );
};

export default HeadlineCards;
