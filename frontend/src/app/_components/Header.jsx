"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 "
      style={{
        background:
          "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 0%, rgba(24, 95, 246, 1) 80%)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5) 0px 0.2rem 0.5rem",
      }}
    >
      <div className="w-full  relative flex flex-row items-center justify-between px-8 2xl:px-56 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src="/bluefox.png" alt="Brand Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold ml-2 text-white">BlueFox Hoster</span>
        </div>

        {/* Navigation - Hidden on small screens */}
        <nav className="hidden lg:flex space-x-9">
      {/* Home link */}
      <a href="#" className="text-base text-white hover:text-blue-200 transition">
        Home
      </a>

      <div className="relative group">
        <a
          href="#"
          className="text-base text-white hover:text-blue-200 transition flex items-center"
        >
          Hosting
          <RiArrowDropDownLine className="ml-1 text-2xl" />
        </a>
        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 p-5">
          <a href="/web-hosting" className="block px-4 py-2 hover:bg-blue-200 transition">
            Web Hosting
          </a>
          <a href="/vps-hosting" className="block px-4 py-2 hover:bg-blue-200 transition">
            VPS Hosting
          </a>
          <a href="/wordPress-hosting" className="block px-4 py-2 hover:bg-blue-200 transition">
            WordPress Hosting
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-200 transition">
            Business Hosting
          </a>
        </div>
      </div>

  
      <div className="relative group">
        <a
          href="#"
          className="text-base text-white hover:text-blue-200 transition flex items-center"
        >
          Domains
          <RiArrowDropDownLine  className="ml-1 text-2xl" /> 
        </a>
        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
          <a href="#" className="block px-4 py-2 hover:bg-blue-200 transition">
            Domain Registration
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-200 transition">
            Domain Transfer
          </a>
        </div>
      </div>

      {/* About link */}
      <a href="#" className="text-base text-white hover:text-blue-200 transition">
        About
      </a>

      {/* Blog link */}
      <a href="#" className="text-base text-white hover:text-blue-200 transition">
        Blog
      </a>

      {/* Contact Us link */}
      <a href="#" className="text-base text-white hover:text-blue-200 transition">
        Contact Us
      </a>
    </nav>

        {/* Login and Register - Hidden on small screens */}
        <div className="hidden lg:block space-x-2 rounded-full border px-6 py-3 text-base transition">
          <a href="#" className="text-white hover:text-blue-200 transition">
            Log In
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:text-blue-200 transition">
            Register
          </a>
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
        <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white shadow-lg py-2">
          <nav className="flex flex-col items-center space-y-4">
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              Hosting
            </a>
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              Domains
            </a>
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-base text-gray-700 hover:text-blue-500 transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Login and Register */}
          <div className="flex justify-center space-x-2 py-2">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Log In
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
