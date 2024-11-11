"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { FaGlobe, FaServer, FaWordpress } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hostingOpen, setHostingOpen] = useState(false);
    const [domainsOpen, setDomainsOpen] = useState(false);

    return (
        <header className=" shadow-md">
            <div className="w-full relative flex flex-row items-center justify-between px-8 2xl:px-56 py-4">
                <div className="flex items-center">
                    <img
                        src="/images/BlueFoxHoster-02.png"
                        alt="BlueFox Hoster Logo"
                        className="h-14 w-auto"
                    />
                </div>

                <nav className="hidden lg:flex space-x-9">
                    <a href="/" className="text-base text-gray-800 hover:text-blue-600 transition">
                        Home
                    </a>

                    {/* Hosting Dropdown */}
                    <div className="relative group">
                        <a href="#" className="text-base text-gray-800 hover:text-blue-600 transition flex items-center">
                            Hosting
                            <RiArrowDropDownLine className="ml-1 text-2xl" />
                        </a>
                        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-gray-800 rounded-lg shadow-xl mt-2 w-72 p-5">
                            <a href="/web-hosting" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <FaGlobe className="mr-4 text-xl text-blue-500" />
                                Web Hosting
                            </a>
                            <a href="/vps-hosting" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <FaServer className="mr-4 text-xl text-blue-500" />
                                VPS Hosting
                            </a>
                            <a href="/wordpress-hosting" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <FaWordpress className="mr-4 text-xl text-blue-500" />
                                WordPress Hosting
                            </a>
                            <a href="/business-hosting" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <MdEmail className="mr-4 text-xl text-blue-500" />
                                Business Email Hosting
                            </a>
                        </div>
                    </div>

                    {/* Domains Dropdown */}
                    <div className="relative group">
                        <a href="#" className="text-base text-gray-800 hover:text-blue-600 transition flex items-center">
                            Domains
                            <RiArrowDropDownLine className="ml-1 text-2xl" />
                        </a>
                        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-gray-800 rounded-lg shadow-xl mt-2 w-64 p-5">
                            <a href="/domain-registration" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <FaUserPlus className="mr-4 text-xl text-blue-500" />
                                Domain Registration
                            </a>
                            <a href="/domain-transfer" className="px-4 py-2 rounded-lg text-left hover:bg-blue-100 transition transform hover:scale-105 flex items-center">
                                <BiTransfer className="mr-4 text-xl text-blue-500" />
                                Domain Transfer
                            </a>
                        </div>
                    </div>

                    <a href="/about" className="text-base text-gray-800 hover:text-blue-600 transition">
                        About
                    </a>
                    <a href="/blog" className="text-base text-gray-800 hover:text-blue-600 transition">
                        Blog
                    </a>
                    <a href="/contact-us" className="text-base text-gray-800 hover:text-blue-600 transition">
                        Contact Us
                    </a>
                </nav>

                <div className="hidden lg:block space-x-3   px-6 py-3 text-base transition">

                    <a
                        href="login"
                        className="text-white text-base px-4 py-2 rounded-md bg-blue-600 font-semibold hover:bg-blue-700 transition"

                    >
                        Log In
                    </a>

                    {/* Register Button */}
                    <a
                        href="register"
                        className="text-gray-800 px-4 tetx-base py-2 rounded-md border border-gray-400 hover:border-gray-500 hover:bg-gray-300 transition"
                    >
                        Register
                    </a>

                </div>


                {/* Hamburger Menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
                        <RxHamburgerMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full z-50 bg-white shadow-lg py-2">
                    <nav className="flex flex-col items-start space-y-4 px-6">
                        <a href="/" className="text-base text-gray-800 hover:text-blue-600 transition">Home</a>

                        {/* Mobile Hosting Dropdown */}
                        <div>
                            <button onClick={() => setHostingOpen(!hostingOpen)} className="text-base text-gray-800 hover:text-blue-600 transition flex items-center">
                                Hosting <RiArrowDropDownLine className="ml-1 text-xl" />
                            </button>
                            {hostingOpen && (
                                <div className="pl-6 mt-2 space-y-2">
                                    <a href="/web-hosting" className="block text-gray-800 hover:text-blue-600 transition">Web Hosting</a>
                                    <a href="/vps-hosting" className="block text-gray-800 hover:text-blue-600 transition">VPS Hosting</a>
                                    <a href="/wordpress-hosting" className="block text-gray-800 hover:text-blue-600 transition">WordPress Hosting</a>
                                    <a href="/business-hosting" className="block text-gray-800 hover:text-blue-600 transition">Business Email Hosting</a>
                                </div>
                            )}
                        </div>

                        {/* Mobile Domains Dropdown */}
                        <div>
                            <button onClick={() => setDomainsOpen(!domainsOpen)} className="text-base text-gray-800 hover:text-blue-600 transition flex items-center">
                                Domains <RiArrowDropDownLine className="ml-1 text-xl" />
                            </button>
                            {domainsOpen && (
                                <div className="pl-6 mt-2 space-y-2">
                                    <a href="/domain-registration" className="block text-gray-800 hover:text-blue-600 transition">Domain Registration</a>
                                    <a href="/domain-transfer" className="block text-gray-800 hover:text-blue-600 transition">Domain Transfer</a>
                                </div>
                            )}
                        </div>

                        <a href="/about" className="text-base text-gray-800 hover:text-blue-600 transition">About</a>
                        <a href="/blog" className="text-base text-gray-800 hover:text-blue-600 transition">Blog</a>
                        <a href="/contact-us" className="text-base text-gray-800 hover:text-blue-600 transition">Contact Us</a>
                    </nav>

                    {/* Mobile Login and Register */}
                    <div className="flex justify-center space-x-2 py-4">
                        <a
                            href="/login"
                            className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            Log In
                        </a>
                        <a
                            href="/register"
                            className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            Register
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
