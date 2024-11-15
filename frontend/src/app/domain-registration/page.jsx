import React from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import WhydomainReg from "../_components/WhydomainReg";
import { FaCog, FaShieldAlt, FaLock, FaExchangeAlt } from "react-icons/fa";
import DomainExtension from '../_components/DomainExtension';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";

function DomainRegistration() {
  return (
    <div className="">
      <Header />

      <div
        className="flex flex-col items-center justify-center py-40 overflow-x-hidden text-white bg-custom-gradient  2xl:px-56 px-8"
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">
          Nepal's Best Domain <span>Registrar</span>
        </h1>
        <p className="text-center mb-6 text-xl">
          Find your perfect domain name in Nepal with Free Privacy Protection.
        </p>

        <div className="text-center ">
          <p className="text-lg">
            {/* Exclusive .COM Domain at just{" "} */}
            {/* <span className="text-2xl font-semibold">Rs 1550</span> / year */}
          </p>
        </div>

        <form
          action="https://client.bluefoxhoster.com/cart.php?a=add&domain=register"
          method="post"
          className="w-full max-w-xl"
        >
          <div className="flex flex-col md:flex-row w-full mb-4 items-center justify-center md:space-x-4">
            <input
              type="text"
              placeholder="Find Your Domain Name"
              className="w-full p-4 text-black rounded-lg text-xl outline-none mb-4 md:mb-0"
              style={{ minWidth: "300px" }}
              name="query"
            />
            <button
              type="submit"
              className="py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg w-full md:w-auto"
            >
              Go
            </button>
          </div>
        </form>

        <div className="flex justify-center font-semibold space-x-4 mt-6">
          <span className="text-white text-4xl">.com</span>
          <span className="text-white text-4xl">.net</span>
          <span className="text-white text-4xl">.org</span>
          <span className="text-white text-4xl">.store</span>
        </div>
      </div>

      {/*What do you receive */}
      <div className="flex flex-col items-center px-8 2xl:px-56 py-12 bg-colors-customBlue">

        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          What Do You Receive?
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl">
          Discover everything you need for a seamless hosting experience.
          Register with us to access a robust suite of tools and features
          crafted for reliable and secure web hosting.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">

          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaCog className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">
              Account Management
            </h3>
            <p className="text-gray-600 mt-2">
              Manage account settings, billing, and service upgrades with ease.
              Our intuitive dashboard puts you in control.
            </p>
          </div>


          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaShieldAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">
              Always Secure
            </h3>
            <p className="text-gray-600 mt-2">
              Your data is protected with top-level encryption, ensuring that
              your website remains safe and secure.
            </p>
          </div>


          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaLock className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">
              Privacy Protection
            </h3>
            <p className="text-gray-600 mt-2">
              We prioritize your privacy. WHOIS privacy protection is enabled at
              no extra cost, keeping your information safe.
            </p>
          </div>


          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaExchangeAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">
              Free Transfers
            </h3>
            <p className="text-gray-600 mt-2">
              Move your website to us without additional charges. Our team
              handles the process seamlessly to minimize downtime.
            </p>
          </div>
        </div>
      </div>


      {/*Why purchase a domain name */}
      <div
        className="flex flex-col md:flex-row pb-10 px-8 2xl:px-56 shadow-lg   "
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <div className="flex-1 flex flex-col items-start mb-6 md:mb-0 md:pr-10">
          <h2 className="text-4xl font-bold text-center py-8 text-white mb-4">
            Why Purchase a Domain Name with Blue Fox Hoster
          </h2>

          <div className=" max-[500px]:hidden">
            <WhydomainReg />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            <a
              href="https://storyset.com/online"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <ul className="space-y-4">
            <li className="flex border border-blue-500 p-4 rounded-lg bg-blue-50 shadow-md items-start transition-transform duration-300 hover:scale-105">
              <span className="text-blue-500 font-bold text-xl mr-2">1.</span>
              <p className="text-gray-800 font-medium">
                Professional Email Address - Enhance your brand’s credibility.
              </p>
            </li>
            <li className="flex border border-blue-500 p-4 rounded-lg bg-blue-50 shadow-md items-start transition-transform duration-300 hover:scale-105">
              <span className="text-blue-500 font-bold text-xl mr-2">2.</span>
              <p className="text-gray-800 font-medium">
                Increased Online Presence - Make it easier for customers to find
                you.
              </p>
            </li>
            <li className="flex border border-blue-500 p-4 rounded-lg bg-blue-50 shadow-md items-start transition-transform duration-300 hover:scale-105">
              <span className="text-blue-500 font-bold text-xl mr-2">3.</span>
              <p className="text-gray-800 font-medium">
                Customizable & Memorable - Stand out with a unique domain.
              </p>
            </li>
            <li className="flex border border-blue-500 p-4 rounded-lg bg-blue-50 shadow-md items-start transition-transform duration-300 hover:scale-105">
              <span className="text-blue-500 font-bold text-xl mr-2">4.</span>
              <p className="text-gray-800 font-medium">
                Protection & Ownership - Secure your brand with exclusive
                rights.
              </p>
            </li>
          </ul>
        </div>
      </div>



      {/*Search for the right domain */}
      <div className="px-8 py-10 2xl:px-56 bg-gray-50">
        <h1 className="text-center text-gray-700 font-bold text-5xl">Search for the Right Top-Level Domain</h1>
        <p className="text-center pt-2 text-gray-600">Blue Fox Hoster provides reliable and easy-to-use domain management services at competitive prices. Our pricing is transparent, with no hidden charges—what you see is what you get, covering both annual registration and renewal. Every domain comes with full DNS management and forwarding capabilities to help you manage your online presence effortlessly.</p>
      </div>
      <div className="flex justify-center items-center pb-10 bg-gray-50 px-8 2xl:px-56">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* .com Card */}
          <div className="bg-white border 0 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">.com</h3>
            <p className="text-xl font-bold text-gray-800 mb-4">Rs 2099 / year</p>
            <p className="text-md text-gray-600 mb-4">
              .COM is highly recognized and trusted, instantly adding credibility to your website.
            </p>
            <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg w-full">
              Register
            </button>
          </div>

          {/* .net Card */}
          <div className="bg-white border 0 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">.net</h3>
            <p className="text-xl font-bold text-gray-800 mb-4">Rs 2500 / year</p>
            <p className="text-md text-gray-600 mb-4">
              A widely used domain suffix for networks and enterprises.
            </p>
            <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg w-full">
              Register
            </button>
          </div>

          {/* .org Card */}
          <div className="bg-white border p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">.org</h3>
            <p className="text-xl font-bold text-gray-800 mb-4">Rs 2000 / year</p>
            <p className="text-md text-gray-600 mb-4">
              .ORG is widely used for organization and community.
            </p>
            <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg w-full">
              Register
            </button>
          </div>
        </div>
      </div>

      <DomainExtension />

      {/*Launchpad */}
      <div className="mx-auto px-8 2xl:px-56 py-8">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-9 space-y-6 md:space-y-0">

          {/* Plans */}
          <div className="w-full rounded-lg bg-slate-100">
            <div className="space-y-6">

              {/* LaunchPad Combo */}
              <div className="p-6  hover:bg-white rounded-lg  hover:shadow-lg flex items-start">
                <div className="mr-4 text-3xl text-blue-500">
                  <RiLogoutCircleRLine />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LaunchPad Combo</h3>
                  <p className="text-gray-600">Affordable and suitable for beginners, this web hosting is perfect for small websites or blogs, includes Free Domain.</p>
                </div>
              </div>

              {/* Infinity Combo */}
              <div className="p-6  hover:bg-white rounded-lg hover:shadow-lg flex items-start">
                <div className="mr-4 text-3xl text-blue-500">
                  <CiCloudOn />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Infinity Combo</h3>
                  <p className="text-gray-600">Robust hosting with cPanel, tailored for expanding blogs, websites, and applications.</p>
                </div>
              </div>

              {/* Ecommerce Startup Combo */}
              <div className="p-6  hover:bg-white rounded-lg hover:shadow-lg flex items-start">
                <div className="mr-4 text-3xl text-blue-500">
                  <FaWordpress />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ecommerce Startup Combo</h3>
                  <p className="text-gray-600">Ecommerce Hosting ideal for agencies and startup with free domain and constant renewal fee.</p>
                </div>
              </div>

              {/* Python Combo Hosting */}
              <div className="p-6   hover:bg-white rounded-lg hover:shadow-lg flex items-start">
                <div className="mr-4 text-3xl text-blue-500">
                  <FaPython />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Python Combo Hosting</h3>
                  <p className="text-gray-600">Managed Python Web Hosting for personal and business work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* LaunchPad Plan Details */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6 hover:bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex justify-between items-center">
              LaunchPad
              <button className="text-base font-semibold border bg-blue-600 px-2 py-1 rounded-md text-white  hover:text-blue-800">
                Free .COM
              </button>
            </h3>
            <div className="space-y-4">


              <div className="flex justify-between">
                <p className="text-3xl font-semibold text-blue-600">Rs. 4,000 / year</p>
              </div>
              <div className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-green-500 mr-2 text-2xl" />
                <p className="text-lg">3GB Storage</p>
              </div>
              <div className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-green-500 mr-2 text-2xl" />
                <p className="text-lg">Unlimited Bandwidth</p>
              </div>


              <div className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-green-500 mr-2 text-2xl" />
                <p className="text-lg">Free SSL Certificate</p>
              </div>
              <div className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-green-500 mr-2 text-2xl" />
                <p className="text-lg">Daily Backup</p>
              </div>


              <div className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-green-500 mr-2 text-2xl" />
                <p className="text-lg">Cpanel Control</p>
              </div>

              <button className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">
                Order Combo Plan
              </button>
            </div>
          </div>

        </div>
      </div>





      {/*We care about privacy */}

      <div className="px-8 2xl:px-56 pt-16 mb-18">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Column 1 */}
          <div className="flex-1">
            <h3 className="text-4xl text-gray-700 font-bold mb-4">We care about your privacy</h3>
            <p className="mt-2 text-gray-600 text-lg">
              Privacy protection conceals personal contact details from public databases, preventing spam, identity theft, and unauthorized access.
            </p>
            <p className="mt-4 text-gray-600">
              It enhances security and provides peace of mind by safeguarding sensitive information, ensuring domain owners' privacy, and reducing exposure to malicious attacks.
            </p>
          </div>

          {/* Column 2: Without WHOIS Privacy */}
          <div className="flex-1 border border-red-500 rounded-lg px-5 py-6  ">
            <IoWarningOutline className="text-4xl  text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-left text-gray-700  mb-2"><span className="text-red-500 text-4xl ">Without</span> WHOIS Privacy</h3>
            <p className="text-gray-600 text-left mb-4">
              Domain contact details are publicly visible which can be misused and lead to spam cases.
            </p>
            <div className="text-sm ">
              <div className="inline-flex  space-x-3">
                <span><IoPersonCircleOutline className="mr-2 text-4xl text-gray-500" /></span>
                <div className="mb-2 flex flex-col">
                  <span>John Doe</span>
                  <span>
                    <span>www.</span>
                    <span className="px-6 pt-0 border rounded-2xl border-red-500">domainname</span>
                    <span>.com</span>
                  </span>



                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <div className="flex items-center border border-red-500 rounded-2xl pl-1">
                  <IoCallOutline className="mr-2 text-gray-500 " />
                  +1-345676346
                </div>
                <div className="flex items-center  border border-red-500 rounded-2xl pl-1">
                  <IoMailOutline className="mr-2 text-gray-500" />
                  jdoe@domainname.com
                </div>
                <div className="flex items-center  border border-red-500 rounded-2xl pl-1">
                  <IoHomeOutline className="mr-2 text-gray-500" />
                  <span>Itahari</span>
                </div>
                <div className="flex items-center  border border-red-500 rounded-2xl pl-1">
                  <FaGlobeAsia className="mr-2 text-gray-500" />
                  <span>Itahari</span>
                </div>
              </div>


            </div>
          </div>

          {/* Column 3: With WHOIS Privacy */}
          <div className="flex-1 border border-green-500 rounded-lg px-5 py-6">
            <IoLockClosedOutline className="text-4xl text-green-500  mx-auto mb-4" />
            <h3 className="text-xl font-bold text-left text-gray-700 mb-2">
              <span className="text-green-500 text-4xl">With</span> WHOIS Privacy
            </h3>
            <p className="text-gray-600 text-left mb-4">
              Domain ownership details are hidden from showing on a public 'whois' lookup.
            </p>
            <div className="text-sm">
              <div className="inline-flex space-x-3">
                <span>
                  <IoShieldCheckmarkOutline className="mr-2 text-4xl text-green-500" />
                </span>
                <div className="mb-2 flex flex-col">
                  <span>WhoisSecure</span>
                  <span>
                    <span>www.</span>
                    <span className="px-6 pt-0 border rounded-2xl border-green-500">domainname</span>
                    <span>.com</span>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <div className="flex items-center border border-green-500 rounded-2xl pl-1">
                  <IoCallOutline className="mr-2 text-gray-500" />
                  +1-6144481974
                </div>
                <div className="flex items-center border border-green-500 rounded-2xl pl-1">
                  <IoMailOutline className="mr-2 text-gray-500" />
                  jdoe@WhoisSecure.com
                </div>
                <div className="flex items-center border border-green-500 rounded-2xl pl-1">
                  <IoHomeOutline className="mr-2 text-gray-500" />
                  <span>WhoisSecure</span>
                </div>
                <div className="flex items-center border border-green-500 rounded-2xl pl-1">
                  <FaGlobeAsia className="mr-2 text-gray-500" />
                  <span>WhoisSecure</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>






      <Footer />
    </div>
  );
}

export default DomainRegistration;
