"use client";
import { FaEnvelope } from "react-icons/fa"; 

export default function TopBar() {
  return (
    <div className="bg-white text-white text-sm">
      <div className="w-full mx-auto bg-[#615EFF] flex justify-between items-center px-8 py-2 text-base">
        {/* Promotion Section */}
        <div className="w-full text-center">
          <strong>Special Sale - Special Discounts on All Products</strong>
        </div>
      </div>
    </div>
  );
}
