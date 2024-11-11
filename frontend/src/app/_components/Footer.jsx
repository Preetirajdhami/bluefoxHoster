"use client";
import React from "react";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{
        background:
          "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 0%, rgba(24, 95, 246, 1) 80%)",
      }}
    >
      <div className="w-full px-8 2xl:px-56">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Company Section */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul>
              {[{ name: "About Us", link: "/about" },
              { name: "Legal", link: "#" },
              { name: "Careers", link: "#" },
              { name: "Sponsorship", link: "#" },
              { name: "Contact Us", link: "/contact-us" },
              { name: "Blogs", link: "/blog" }]
                .map(({ name, link }) => (
                  <li key={name} className="mb-2">
                    <Link href={link} className="hover:underline">
                      {name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul>
              {[{ name: "Customer Login", link: "/login" },
              { name: "Raise a ticket", link: "#" },
              { name: "Server Status", link: "#" },
              { name: "Knowledge Base", link: "#" },
              { name: "Live chat", link: "#" }]
                .map(({ name, link }) => (
                  <li key={name} className="mb-2">
                    <Link href={link} className="hover:underline">
                      {name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Hosting Section */}
          <div>
            <h4 className="font-bold mb-4">Hosting</h4>
            <ul>
              {[{ name: "Web Hosting", link: "/web-hosting" },
              { name: "WordPress Hosting", link: "/wordpress-hosting" },
              { name: "VPS Hosting", link: "/vps-hosting" },
              { name: "Business Email Hosting", link: "/business-email-hosting" },
              { name: "Nodejs Hosting", link: "#" },
              { name: "Python Hosting", link: "#" },
              { name: "Ecommerce Hosting", link: "#" },
              { name: "Cloud Reseller", link: "#" }]
                .map(({ name, link }) => (
                  <li key={name} className="mb-2">
                    <Link href={link} className="hover:underline">
                      {name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h4 className="font-bold mb-4">Account</h4>
            <ul>
              {[{ name: "My Products", link: "#" },
              { name: "Create Account", link: "#" },
              { name: "Renewals & Billing", link: "#" },
              { name: "Manage Domains", link: "#" },
              { name: "Partner Program", link: "#" },
              { name: "SLA", link: "#" }]
                .map(({ name, link }) => (
                  <li key={name} className="mb-2">
                    <Link href={link} className="hover:underline">
                      {name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul>
              {[
                { name: "Buy a Domain", link: "/domain-registration" },
                { name: "Transfer Domain Names", link: "domain-transfer" },
                { name: "Place New Order", link: "/place-new-order" },
                { name: "SSL Certificates", link: "/ssl-certificates" },
                { name: "Google Workspace", link: "/google-workspace" },
              ].map(({ name, link }) => (
                <li key={name} className="mb-2">
                  <Link href={link} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex justify-between max-[500px]:flex-col max-[500px]:gap-[20px] items-center p-4">
          <a href="/">
            <img
              src="/images/BlueFoxHoster-03.png"
              alt="BlueFox Hoster Logo"
              className="h-14 w-auto"
            />
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:bg-gray-700 transition rounded-full p-2"
            >
              <FaFacebook size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 transition rounded-full p-2"
            >
              <FaInstagram size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 transition rounded-full p-2"
            >
              <FaLinkedin size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 transition rounded-full p-2"
            >
              <FaTwitter size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            Blue Fox Hoster Reserved by Blue Fox Pvt Ltd Company Registration
            No. 263870, Registered Office: Itahar-6, Sunsari, Nepal
          </p>
          <div className="flex space-x-4 items-center">
            {["Cookies Policies", "Terms & Conditions", "Privacy Policy"].map(
              (item) => (
                <a key={item} href="#" className="hover:underline">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
