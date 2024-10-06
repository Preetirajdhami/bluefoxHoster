"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Using react-icons for the email icon
import { MdArrowDropDown } from "react-icons/md"; // Dropdown icon for currency

export default function TopBar() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); 
  };

  return (
    <div className="bg-[#615EFF] text-white text-sm">
      <div className="w-full mx-auto flex justify-between items-center px-8 py-2 text-base">
        {/* Email Section */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <a href="mailto:info@stablecluster.com" className="hover:underline">
            blueFox.com
          </a>
        </div>

        {/* Promotion Section */}
        <div className="hidden md:block">
          <span>Special Sale - Special Discounts on All Products</span>
        </div>

        {/* Currency Selector */}
        <div className="relative flex items-center space-x-1">
          <span>us</span>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedCurrency}</span>
            <MdArrowDropDown className="text-white" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-8 right-0 mt-2 w-24 bg-white text-black rounded-md shadow-lg z-60">
              <ul className="text-left">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCurrencyChange("USD")}
                >
                  US USD
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCurrencyChange("NPR")}
                >
                  NR NPR
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCurrencyChange("INR")}
                >
                  IN INR
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
