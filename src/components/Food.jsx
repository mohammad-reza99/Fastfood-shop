import React, { useState } from "react";
import { data } from "../assets/data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      }),
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };

  return (
    <section className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Popular Dishes
      </h1>

      <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Explore our most loved meals, from juicy burgers to fresh salads and
        delicious pizzas.
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-8">
        <div>
          <p className="font-bold text-gray-700 mb-2">Filter by Type</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700 mb-2">Filter by Price</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border border-orange-600 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-md hover:shadow-xl hover:-translate-y-1 duration-300 rounded-xl overflow-hidden bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-4">
              <div className="flex justify-between items-center gap-3">
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                Freshly prepared and full of flavor. Perfect for a quick and
                satisfying meal.
              </p>

              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
