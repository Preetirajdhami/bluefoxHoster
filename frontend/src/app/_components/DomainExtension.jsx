"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const DomainExtension = () => {
  const [selected, setSelected] = useState("All");

  const options = ["All", "Sale", "Newest", "Popular", "Geographic"];

  const tldData = [
    { tld: ".com", register: "Rs 2099 ", renew: "Rs 2099", category: "Sale" },
    { tld: ".net", register: "Rs 2500", renew: "Rs 2500", category: "Popular" },
    { tld: ".org", register: "Rs 2000", renew: "Rs 2000", category: "Popular" },
    { tld: ".info", register: "Rs 1800", renew: "Rs 1800", category: "Popular" },
    { tld: ".club", register: "Rs 1700", renew: "Rs 1700", category: "Popular" },
    { tld: ".io", register: "Rs 3000", renew: "Rs 3000", category: "Newest" },
    { tld: ".online", register: "Rs 1500", renew: "Rs 1500", category: "Newest" },
    { tld: ".ai", register: "Rs 5000", renew: "Rs 5000", category: "Newest" },
    { tld: ".xyz", register: "Rs 999", renew: "Rs 999", category: "Sale" },
    { tld: ".in", register: "Rs 1200", renew: "Rs 1200", category: "Geographic" },
    { tld: ".com.np", register: "Rs 0.00", renew: "Rs 0.00", category: "Geographic" },
  ];

  const filteredTldData =
    selected === "All"
      ? tldData
      : tldData.filter((tld) => tld.category === selected);

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col items-center justify-center px-8 2xl:px-56">
        <h1 className="text-4xl font-semibold text-center pt-10">
          Enter a domain extension
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Choose the perfect domain name for your business and stand out online!
        </p>
        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search TLD price"
            className="w-full px-4 py-2 outline-none text-gray-700"
          />
          <button className="px-4 flex items-center justify-center">
            <IoSearchOutline className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap space-x-4 sm:space-x-2">
          {options.map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-lg text-gray-600 font-medium ${selected === option
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200 hover:text-gray-600 text-gray-800"
                } flex-1 sm:flex-none`} // 'flex-1' ensures equal width for mobile, 'sm:flex-none' for auto width on larger screens
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>



      {/* Table */}
      <div className="mt-8 px-8 2xl:px-56">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse ">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 border-b ">TLD</th>
                <th className="px-4 py-2 border-b ">Register</th>
                <th className="px-4 py-2 border-b ">Renew</th>
              </tr>
            </thead>
            <tbody>
              {filteredTldData.map((tld, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="px-4 py-2  border-b">{tld.tld}</td>
                  <td className="px-4 py-2  border-b">
                    {tld.register}
                    <span className="text-sm text-gray-500"> /yr</span>
                  </td>
                  <td className="px-4 py-2  border-b">
                    {tld.renew}
                    <span className="text-sm text-gray-500"> /yr</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DomainExtension;
