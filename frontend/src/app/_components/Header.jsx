"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#1a076e] via-[#4522c9] to-[#532be9] sticky top-0 z-50">
      <div className="w-full relative flex flex-row items-center justify-between px-8 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Brand Logo" className="h-8 w-8" />
          <span className="text-base font-bold ml-2 text-white">BrandName</span>
        </div>

        {/* Navigation - Hidden on small screens */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#" className="text-base text-white hover:text-blue-200 transition">Home</a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">Hosting</a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">Domains</a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">About</a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">Blog</a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">Contact Us</a>
        </nav>

        {/* Login and Register - Hidden on small screens */}
        <div className="hidden lg:block space-x-2 rounded-full border px-6 py-3 text-base transition">
          <a href="#" className="text-white hover:text-blue-200 transition">Log In</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:text-blue-200 transition">Register</a>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <RxHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when hamburger is clicked */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-2">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Home</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Hosting</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Domains</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">About</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Blog</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Contact Us</a>
          </nav>

          {/* Mobile Login and Register */}
          <div className="flex justify-center space-x-2 py-2">
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">Log In</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition">Register</a>
          </div>
        </div>
      )}
    </header>
  );
}
