import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-[1640px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Have a question, feedback, or a special request? We'd love to hear
          from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-500">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-500">support@besteats.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-500">123 Food Street, New York, USA</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Restaurant contact"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
