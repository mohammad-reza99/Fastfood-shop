import React from "react";
import { categories } from "../assets/data/data.js";

const Category = () => {
  return (
    <section className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Browse By Category
      </h1>

      <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Choose your favorite category and discover delicious meals made for
        every taste.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {categories.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl p-4 flex items-center justify-between shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 cursor-pointer"
          >
            <div>
              <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mt-1">Explore meals</p>
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
