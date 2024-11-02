"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 0%, rgba(24, 95, 246, 1) 80%)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5) 0px 0.2rem 0.5rem",
      }}
    >
      <div className="w-full relative flex flex-row items-center justify-between px-8 2xl:px-56 py-4">
        <div className="flex items-center">
          {/* Logo and Brand */}
        </div>

        <nav className="hidden lg:flex space-x-9">
          <a href="/" className="text-base text-white hover:text-blue-200 transition">
            Home
          </a>

          {/* Hosting Dropdown */}
          <div className="relative group">
            <a
              href="#"
              className="text-base text-white hover:text-blue-300 transition flex items-center"
            >
              Hosting
              <RiArrowDropDownLine className="ml-1 text-2xl" />
            </a>
            <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-lg shadow-xl mt-2 w-64 p-5">
              <a href="/web-hosting" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                Web Hosting
              </a>
              <a href="/vps-hosting" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                VPS Hosting
              </a>
              <a href="/wordpress-hosting" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                WordPress Hosting
              </a>
              <a href="/business-hosting" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                Business Email Hosting
              </a>
            </div>
          </div>

          {/* Domains Dropdown */}
          <div className="relative group">
            <a
              href="#"
              className="text-base text-white hover:text-blue-300 transition flex items-center"
            >
              Domains
              <RiArrowDropDownLine className="ml-1 text-2xl" />
            </a>
            <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black rounded-lg shadow-xl mt-2 w-64 p-5">
              <a href="/domain-registration" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                Domain Registration
              </a>
              <a href="/domain-transfer" className="block px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105">
                Domain Transfer
              </a>
            </div>
          </div>

          <a href="#" className="text-base text-white hover:text-blue-200 transition">
            About
          </a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">
            Blog
          </a>
          <a href="#" className="text-base text-white hover:text-blue-200 transition">
            Contact Us
          </a>
        </nav>

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
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <RxHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white shadow-lg py-2">
          <nav className="flex flex-col items-start space-y-4 px-6">
            <a href="/" className="text-base text-gray-700 hover:text-blue-500 transition">Home</a>

            {/* Mobile Hosting Dropdown */}
            <div>
              <button
                onClick={() => setHostingOpen(!hostingOpen)}
                className="text-base text-gray-700 hover:text-blue-500 transition flex items-center"
              >
                Hosting <RiArrowDropDownLine className="ml-1 text-xl" />
              </button>
              {hostingOpen && (
                <div className="pl-6 mt-2 space-y-2">
                  <a href="/web-hosting" className="block text-gray-700 hover:text-blue-500 transition">Web Hosting</a>
                  <a href="/vps-hosting" className="block text-gray-700 hover:text-blue-500 transition">VPS Hosting</a>
                  <a href="/wordpress-hosting" className="block text-gray-700 hover:text-blue-500 transition">WordPress Hosting</a>
                  <a href="/business-hosting" className="block text-gray-700 hover:text-blue-500 transition">Business Email Hosting</a>
                </div>
              )}
            </div>

            {/* Mobile Domains Dropdown */}
            <div>
              <button
                onClick={() => setDomainsOpen(!domainsOpen)}
                className="text-base text-gray-700 hover:text-blue-500 transition flex items-center"
              >
                Domains <RiArrowDropDownLine className="ml-1 text-xl" />
              </button>
              {domainsOpen && (
                <div className="pl-6 mt-2 space-y-2">
                  <a href="/domain-registration" className="block text-gray-700 hover:text-blue-500 transition">Domain Registration</a>
                  <a href="/domain-transfer" className="block text-gray-700 hover:text-blue-500 transition">Domain Transfer</a>
                </div>
              )}
            </div>

            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">About</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Blog</a>
            <a href="#" className="text-base text-gray-700 hover:text-blue-500 transition">Contact Us</a>
          </nav>

          {/* Mobile Login and Register */}
          <div className="flex justify-center space-x-2 py-4">
            <a href="#" className="px-4 py-2 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-100 transition">Log In</a>
            <a href="#" className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Register</a>
          </div>
        </div>
      )}
    </header>
  );
}
