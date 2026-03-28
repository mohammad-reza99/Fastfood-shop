import React from "react";

const About = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Our Food Service
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are passionate about delivering delicious, high-quality meals
            directly to your door. Our platform connects you with the best local
            restaurants, ensuring fast delivery and amazing taste every time.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you're craving burgers, pizza, or healthy salads, we’ve got
            something for everyone. Our mission is to make food ordering simple,
            fast, and enjoyable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-500">500+</h3>
              <p className="text-sm text-gray-500">Restaurants</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-500">10K+</h3>
              <p className="text-sm text-gray-500">Customers</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-500">24/7</h3>
              <p className="text-sm text-gray-500">Delivery</p>
            </div>
          </div>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
