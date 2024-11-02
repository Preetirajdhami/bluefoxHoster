import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import WhydomainReg from '../_components/WhydomainReg'
import { FaCog, FaShieldAlt, FaLock, FaExchangeAlt } from 'react-icons/fa';

function DomainRegistration() {
  return (
    <div>
      <Header />

      <div
        className=' flex flex-col items-center justify-center min-h-screen  text-white bg-custom-gradient py-8 2xl:px-56 px-8'
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >


        <h1 className="text-4xl font-bold text-center mb-2">
          Nepal's Best Domain <span className="text-orange-600 ">Registar</span>
        </h1>
        <p className="text-center mb-6 text-xl">
          Find your perfect domain name in Nepal with Free Privacy Protection.
        </p>


        <div className="text-center mb-6">
          <p className="text-lg">Exclusive .COM Domain at just <span className="text-2xl font-semibold">Rs 1550</span> / year</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Find your domain name"
            className="w-full p-4 text-black rounded-lg text-xl outline-none"
            style={{ minWidth: '300px' }} 
          />
          <button className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
            Search
          </button>
        </div>



        <div className="flex justify-center space-x-4 mt-6">
          <span className="text-white text-xl">.com</span>
          <span className="text-white text-xl">.net</span>
          <span className="text-white text-xl">.org</span>
          <span className="text-white text-xl">.store</span>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 bg-colors-customBlue" >
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Do You Receive?</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl">
          Discover everything you need for a seamless hosting experience. Register with us to access a robust suite of tools and features crafted for reliable and secure web hosting.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Contact Management */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaCog className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">Account Management</h3>
            <p className="text-gray-600 mt-2">
              Manage account settings, billing, and service upgrades with ease. Our intuitive dashboard puts you in control.
            </p>
          </div>

          {/* Always Secure */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaShieldAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">Always Secure</h3>
            <p className="text-gray-600 mt-2">
              Your data is protected with top-level encryption, ensuring that your website remains safe and secure.
            </p>
          </div>

          {/* Privacy Protection */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaLock className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">Privacy Protection</h3>
            <p className="text-gray-600 mt-2">
              We prioritize your privacy. WHOIS privacy protection is enabled at no extra cost, keeping your information safe.
            </p>
          </div>

          {/* Free Transfers */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <FaExchangeAlt className="text-blue-500 text-3xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">Free Transfers</h3>
            <p className="text-gray-600 mt-2">
              Move your website to us without additional charges. Our team handles the process seamlessly to minimize downtime.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  p-8 shadow-lg   "
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >

       
        <div className="flex-1 flex flex-col items-start mb-6 md:mb-0 md:pr-10">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Why Purchase a Domain Name with Blue Fox Hoster
          </h2>
          
          <div className="">
            <WhydomainReg />
          </div>
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">

            </a>
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
                Increased Online Presence - Make it easier for customers to find you.
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
                Protection & Ownership - Secure your brand with exclusive rights.
              </p>
            </li>
          </ul>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default DomainRegistration
