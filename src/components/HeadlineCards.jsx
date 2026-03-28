import React from "react";
import img1 from "../assets/image/pexels-foodie-factor-162291-566566.jpg";
import img2 from "../assets/image/pexels-vanmalidate-769289.jpg";
import img3 from "../assets/image/pexels-solodsha-8104576.jpg";

const cards = [
  {
    id: 1,
    title: "Weekend Burger Deal",
    subtitle: "Buy one, get one free",
    image: img1,
    alt: "Burger deal",
  },
  {
    id: 2,
    title: "New Restaurants",
    subtitle: "Fresh flavors added daily",
    image: img2,
    alt: "New restaurant dishes",
  },
  {
    id: 3,
    title: "Sweet Dessert Picks",
    subtitle: "Treat yourself today",
    image: img3,
    alt: "Dessert selection",
  },
];

const HeadlineCards = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300 z-10"></div>

            <img
              className="w-full h-[220px] object-cover rounded-xl group-hover:scale-105 transition duration-300"
              src={card.image}
              alt={card.alt}
            />

            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
              <div>
                <p className="font-bold text-2xl leading-tight">{card.title}</p>
                <p className="mt-2 text-sm text-gray-200">{card.subtitle}</p>
              </div>

              <div>
                <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadlineCards;
