import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/70 z-50">
      <form className="flex bg-white rounded-xl max-w-4xl w-full mx-2 md:mx-0 overflow-hidden">
        {/* Left image (hidden on small screens) */}
        <img
          src={assets.regImage}
          alt="Hotel registration"
          className="w-1/2 hidden md:block object-cover"
        />

        {/* Form content */}
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
          >
            <img src={assets.closeIcon} alt="Close modal" />
          </button>

          {/* Title */}
          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>

          {/* Form fields */}
          <div className="w-full mt-6 flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Hotel Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Hotel Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="contact"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Contact Number
              </label>
              <input
                id="contact"
                type="tel"
                placeholder="Contact Number"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Select city dropdown */}
          <div className="w-full mt-4 max-w-60 mr-auto flex flex-col">
            <label
              htmlFor="city"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              City
            </label>
            <select
              id="city"
              required
              className="border border-gray-200 rounded w-full px-3 py-2.5 outline-indigo-500 font-light"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
