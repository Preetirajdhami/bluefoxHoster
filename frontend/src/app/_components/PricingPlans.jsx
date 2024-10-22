"use client"
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="bg-gray-50 py-10 px-6 text-center">
      <h2 className="text-6xl font-semibold text-gray-800">Best Cloud Hosting Plans</h2>
      <p className="text-gray-500 mt-2">
        Join the thousands who trust our top-rated web hosting in Nepal. Choose the best web hosting package that best fits your needs.
      </p>

      <div className="flex justify-center items-center gap-2 mt-4">
        <div className="flex items-center">
          <span className="text-green-500">★★★★★</span>
          <span className="ml-2 text-gray-500">4.8 out on 100+ reviews</span>
        </div>
        <a href="#" className="text-indigo-600 hover:underline">See Reviews &rarr;</a>
      </div>

      <div className="flex justify-center items-center mt-6">
        <span className="text-gray-500">Monthly</span>
        <label className="mx-2 relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none   rounded-full peer peer-checked:bg-gray-700"></div>
          <span className="absolute left-0.5 top-0.5 peer-checked:left-5 transition-all duration-300">
        <FaCircle className="text-white w-5 h-5" />
      </span>
        </label>
        <span className="text-gray-500">Yearly</span>
        <div className="ml-4 bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
          2 Months Free
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="flex justify-center items-center mt-6 space-x-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Standard</h3>
          {/* You can add your pricing details here */}
          <hr className="border-blue-500 w-20 mt-2"/>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Premium</h3>
          {/* You can add your pricing details here */}
          <hr className="border-gray-300 w-20 mt-2"/>
        </div>
      </div>
    </div>
  );
}
