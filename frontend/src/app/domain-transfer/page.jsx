import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import TransferDomain from "../_components/TransferDomain";

function DomainRegistration() {
  return (
    <div>
      <Header />
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-custom-gradient py-16 px-8"
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <div className="flex-1 text-white mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Transfer Your Domain to Blue Fox Hoster
          </h1>
          <p className="text-lg mb-6">
            Experience hassle-free domain transfer with top-notch support and
            features tailored for your success.
          </p>

          {/* Search Element */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your domain name"
              className="w-full p-4 text-black rounded-lg text-xl outline-none"
              style={{ minWidth: "300px" }}
            />
            <button className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Transfer
            </button>
          </div>
        </div>

        <div className=" max-[500px]:hidden">
          <TransferDomain />
        </div>
      </div>

      <div className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Transfer to Blue Fox Hoster?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-blue-500 font-bold text-xl mb-2">
              1. Professional Email Address
            </h3>
            <p className="text-gray-700">
              Enhance your brand’s credibility with a professional email address
              that reflects your domain.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-blue-500 font-medium text-xl mb-2">
              2. Increased Online Presence
            </h3>
            <p className="text-gray-700">
              Make it easier for customers to find you online and grow your
              business visibility.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-blue-500 font-medium text-xl mb-2">
              3. Customizable & Memorable
            </h3>
            <p className="text-gray-700">
              Stand out with a unique domain that leaves a lasting impression on
              your audience.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-blue-500 font-medium text-xl  mb-2">
              4. Protection & Ownership
            </h3>
            <p className="text-gray-700">
              Secure your brand with exclusive rights and ownership of your
              domain name.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DomainRegistration;
