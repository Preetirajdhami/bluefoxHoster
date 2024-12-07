"use client";
import React, { useState } from "react";
import { IoMdFlame } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const HostingPlansCard = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = {
    "2GB cPanel Hosting": {
      monthly: {
        price: "Rs 199",
        features: [
          "Up to 5 Domain Hosting",
          "Managed cPanel",
          "2 GB Storage (100% SSD)",
          "Unlimited Bandwidth",
          "FREE SSL Certificate",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/2gb-cpanel-hosting",
      },
      yearly: {
        price: "Rs 2149",
        features: [
          "Up to 5 Domain Hosting",
          "Managed cPanel",
          "2 GB Storage (100% SSD)",
          "Unlimited Bandwidth",
          "FREE SSL Certificate",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/2gb-cpanel-hosting",
      },
    },
    "News Portal Plan": {
      monthly: {
        price: "Rs 300",
        features: [
          "Boosted Performance",
          "Single Website",
          "Unlimited SSD Storage",
          "10 MySQL Databases",
          "Unmetered Bandwidth",
          "Daily Backup",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/news-portal-plan",
      },
      yearly: {
        price: "Rs 3240",
        features: [
          "Boosted Performance",
          "Single Website",
          "Unlimited SSD Storage",
          "10 MySQL Databases",
          "Unmetered Bandwidth",
          "Daily Backup",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/news-portal-plan",
      },
    },
    "Developer Plan": {
      monthly: {
        price: "Rs 999",
        features: [
          "Boosted Performance",
          "Upto 5 Websites can host",
          "Unlimited SSD Storage",
          "Unmetered Bandwidth",
          "Unlimited Emails",
          "Free 1-click WordPress Install",
          "Free SSL Certificate",
          "cPanel Control Panel",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/developer-plan",
      },
      yearly: {
        price: "Rs 3780",
        features: [
          "Boosted Performance",
          "Upto 5 Websites can host",
          "Unlimited SSD Storage",
          "Unmetered Bandwidth",
          "Unlimited Emails",
          "Free 1-click WordPress Install",
          "Free SSL Certificate",
          "cPanel Control Panel",
        ],
        link: "https://client.bluefoxhoster.com/index.php?rp=/store/web-hosting/developer-plan",
      },
    },
  };

  return (
    <div className="2xl:px-56 px-8">
      <div>
        <h1 className="text-center text-3xl md:text-5xl font-semibold" style={{ color: '#1249bb' }}>
          Fully Managed Web Hosting in Nepal
        </h1>
        <p className="mt-4 text-gray-500 text-center">
          Top-Tier Cloud Hosting powered by ultra-fast infrastructure and supported around the clock by expert Support Engineers.
        </p>
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
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-700"></div>
          <span className="absolute left-0.5 top-0.5 peer-checked:left-5 transition-all duration-300">
            <FaCircle className="text-white w-5 h-5" />
          </span>
        </label>
        <span className="text-gray-500">Yearly</span>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 mt-16 pt-8 bg-white">
        {Object.keys(plans).map((planKey) => {
          const plan = plans[planKey];
          const currentPlan = isYearly ? plan.yearly : plan.monthly;
          const planLink = currentPlan.link; // Get the correct plan link

          return (
            <div key={planKey} className="relative border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-800 text-white rounded-full flex items-center space-x-2">
                <IoMdFlame className="w-5 h-5 text-white" />
                <strong className="text-sm">UP TO 90% OFF</strong>
              </div>
              <div className="text-center md:text-left mt-8">
                <h3 className="text-lg font-semibold text-center" style={{ color: '#1553d7' }}>
                  {planKey.charAt(0).toUpperCase() + planKey.slice(1)} Web Hosting
                </h3>
                <p className="text-gray-600 mt-2 text-center">
                  Host with confidence—trusted by 200,000 websites for reliable, secure, and high-performance hosting.
                </p>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="text-sm text-gray-600">Starting from</div>
                <div className="text-3xl font-bold text-blue-500 mt-1">{currentPlan.price}</div>

                <div className="text-sm text-gray-500">/ {isYearly ? 'year' : 'month'}</div>

                <div className="w-full">
                  <button
                    className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                    onClick={() => window.location.href = planLink} // Redirect to the plan's link
                  >
                    <strong>START NOW</strong>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 mt-4">
                <p className="text-gray-600">
                  <strong>{planKey.charAt(0).toUpperCase() + planKey.slice(1)} Web Hosting features</strong>
                </p>
                {currentPlan.features.map((feature, index) => (
                  <p key={index} className="text-gray-600 flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>{feature}</span>
                  </p>
                ))}
              </div>

            </div>
          );
        })}
      </div>
    </div>

  );
};

export default HostingPlansCard;
