"use client";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const VpsHostingFeatures = () => {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    {
      icon: <IoServer className="text-4xl text-blue-500" />,
      title: "Dedicated Resources",
      description:
        "Each VPS environment is allocated dedicated resources like CPU, RAM, and storage, ensuring consistent performance and preventing other users from impacting your website or application.",
    },
    {
      icon: <BsGraphUpArrow className="text-4xl text-blue-500" />,
      title: "Scalability",
      description:
        "VPS hosting can easily adapt to your needs as your business or website grows, allowing you to increase or adjust resources like memory, storage, and bandwidth without migrating to a new server.",
    },
    {
      icon: <AiOutlineFileProtect className="text-4xl text-blue-500" />,
      title: "Enhanced Security and Control",
      description:
        "VPS hosting provides a higher level of security compared to shared hosting, as each VPS is isolated from others. Users often have root access, allowing them to manage resources fully.",
    },
  ];

  const plans = [
    {
      value: "SC D4",
      core: "2vCORE",
      ram: "4 GB",
      storage: "25GB SSD",
      monthlyPrice: "Rs 2,500/ mo",
      yearlyPrice: "Rs 25,000/ yr",
    },
    {
      value: "SC D5",
      core: "4vCORE",
      ram: "8 GB",
      storage: "50GB SSD",
      monthlyPrice: "Rs 4,500/ mo",
      yearlyPrice: "Rs 45,000/ yr",
    },
    {
      value: "SC D6",
      core: "6vCORE",
      ram: "16 GB",
      storage: "100GB SSD",
      monthlyPrice: "Rs 6,500/ mo",
      yearlyPrice: "Rs 65,000/ yr",
    },
    {
      value: "SC D7",
      core: "8vCORE",
      ram: "32 GB",
      storage: "200GB SSD",
      monthlyPrice: "Rs 8,500/ mo",
      yearlyPrice: "Rs 85,000/ yr",
    },
    {
      value: "SC D8",
      core: "10vCORE",
      ram: "64 GB",
      storage: "500GB SSD",
      monthlyPrice: "Rs 10,500/ mo",
      yearlyPrice: "Rs 105,000/ yr",
    },
  ];

  const hosting_features = [
    { name: "Full Root Access", tooltip: "Provides complete control over your server" },
    { name: "SSD Storage", tooltip: "Faster data access and retrieval" },
    { name: "DDoS Protection", tooltip: "Protects against distributed denial-of-service attacks" },
    { name: "24/7 Customer Support", tooltip: "Support available around the clock" },
    { name: "IPv4 IP Address", tooltip: "Dedicated IP address for each plan" },
    { name: "Easy to scale", tooltip: "Quickly adjust resources as needed" },
    { name: "Enhanced Security", tooltip: "Advanced security features included" },
    { name: "Monitoring & Alerts", tooltip: "Real-time monitoring and notifications" },
  ];

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col px-8 2xl:px-56 pt-14 items-center">
        <div className="flex flex-col justify-center space-y-7 text-center">
          <h2 className="text-4xl font-bold " style={{ color: '#0073b3' }}>
            Why Choose Blue Fox Hoster as Your VPS Hosting Provider?
          </h2>
          <p className="text-sm">
            At BlueFox Hoster, our Virtual Private Servers (VPS) provide a
            dynamic solution for web hosting, data storage, application
            deployment, and beyond. Offering more flexibility, scalability, and
            cost efficiency than traditional servers, our VPS hosting empowers
            your business to grow without limits.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 my-8 mx-4 md:mx-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs text-center flex flex-col justify-between"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-medium text-gray-700 text-center mt-6">
          VPS Hosting Plans For You
        </h2>
        <div className="flex justify-center items-center mt-6">
          <span className="text-gray-500 text-xl">Monthly</span>
          <label className="mx-2 relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-gray-700"></div>
            <span className="absolute left-0.5 top-0.5 peer-checked:left-5 transition-all duration-300">
              <FaCircle className="text-white w-5 h-5" />
            </span>
          </label>
          <span className="text-gray-500 text-xl">Yearly</span>
        </div>

        <div className="overflow-x-auto max-[700px]:max-w-[300px] max-[700px]:mx-auto bg-gray-50 mt-6">
          <table className="text-sm text-left text-gray-700 border-collapse border border-gray-200 w-full overflow-auto whitespace-nowrap">
            <thead>
              <tr className="bg-gradient-to-r from-blue-800 to-blue-600 text-white uppercase tracking-wider">
                <th className="py-3 px-4 h-12 border-b border-gray-300 font-medium">
                  VALUE
                </th>
                <th className="py-3 px-4 h-12 border-b border-gray-300 font-medium">
                  CORE
                </th>
                <th className="py-3 px-4 h-12 border-b border-gray-300 font-medium">
                  RAM
                </th>
                <th className="py-3 px-4 h-12 border-b border-gray-300 font-medium">
                  STORAGE
                </th>
                <th className="py-3 px-4 h-12 border-b border-gray-300 font-medium">
                  PRICE
                </th>
                <th className="py-3 px-4 h-12 border-b border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-150"
                >
                  <td className="py-4 px-6 border-b border-gray-200">
                    {plan.value}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {plan.core}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {plan.ram}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {plan.storage}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-center">
                    <a
                      href="#"
                      className="bg-blue-600 text-white py-2 px-3 md:px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 text-sm md:text-base"
                    >
                      Deploy Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-50  py-6">
            <h3 className="text-center text-lg font-medium border-b pb-4 text-gray-700 mb-4">
              All Plans Come With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4  md:px-16">
              {hosting_features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-lg" />
                  <span className="text-gray-600 text-sm font-medium">
                    {feature.name}
                  </span>
                  <CiCircleInfo  className="text-blue-500 cursor-pointer" title={feature.tooltip} />
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>


  );
};

export default VpsHostingFeatures;
