import React from 'react';
import { IoMdFlame } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const HostingPlansCard = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 mt-16 md:px-8 2xl:px-56 pt-8 bg-white'>
         {/* first card */}    
      <div className="relative border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">


        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-800 text-white rounded-full flex items-center space-x-2">
          <IoMdFlame className="w-5 h-5 text-white" />
          <strong className="text-sm">UP TO 90% OFF</strong>
        </div>

        
        <div className="text-center md:text-left mt-8">
          <h3 className="text-lg font-semibold text-center text-blue-500">Web Hosting</h3>
          <p className="text-gray-700 mt-2 text-center">
            Host with confidence—trusted by 200,000 websites for reliable, secure, and high-performance hosting.
          </p>
        </div>

        
        <div className=" w-full flex flex-col items-center ">
          <div className="text-sm text-gray-600">Starting from</div>
          <div className="text-3xl font-bold text-blue-500 mt-1">$1.80</div>
          <div className='w-full'>
            <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              <strong>START NOW</strong>
            </button>
          </div>
        </div>

        
        <div className="w-full flex flex-col gap-2 mt-4">
        <p className="text-gray-600">
          <strong>Web Hosting features</strong></p>
          
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Unlimited Bandwidth</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Domain Registration / Transfer</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Daily Backups, Certificate(s)</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>24/7 Tech Support</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>45-day money-back guarantee</span>
          </p>

         
        </div>

        {/* Second Button */}
        <div className='w-full'>
          <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            <strong>START NOW</strong>
          </button>
        </div>
      </div>
       {/* Second card */}
      <div className="relative border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">


        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-800 text-white rounded-full flex items-center space-x-2">
          <IoMdFlame className="w-5 h-5 text-white" />
          <strong className="text-sm">UP TO 90% OFF</strong>
        </div>

        
        <div className="text-center md:text-left mt-8">
          <h3 className="text-lg font-semibold text-center text-blue-500">Web Hosting</h3>
          <p className="text-gray-700 mt-2 text-center">
            Host with confidence—trusted by 200,000 websites for reliable, secure, and high-performance hosting.
          </p>
        </div>

        
        <div className=" w-full flex flex-col items-center ">
          <div className="text-sm text-gray-600">Starting from</div>
          <div className="text-3xl font-bold text-blue-500 mt-1">$1.80</div>
          <div className='w-full'>
            <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              <strong>START NOW</strong>
            </button>
          </div>
        </div>

        
        <div className="w-full flex flex-col gap-2 mt-4">
        <p className="text-gray-600">
          <strong>Web Hosting features</strong></p>
          
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Unlimited Bandwidth</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Domain Registration / Transfer</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Daily Backups, Certificate(s)</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>24/7 Tech Support</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>45-day money-back guarantee</span>
          </p>

         
        </div>

        {/* Second Button */}
        <div className='w-full'>
          <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            <strong>START NOW</strong>
          </button>
        </div>
      </div>
      {/* third card */}
      <div className="relative border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">


        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-800 text-white rounded-full flex items-center space-x-2">
          <IoMdFlame className="w-5 h-5 text-white" />
          <strong className="text-sm">UP TO 90% OFF</strong>
        </div>

        
        <div className="text-center md:text-left mt-8">
          <h3 className="text-lg font-semibold text-center text-blue-500">Web Hosting</h3>
          <p className="text-gray-700 mt-2 text-center">
            Host with confidence—trusted by 200,000 websites for reliable, secure, and high-performance hosting.
          </p>
        </div>

        
        <div className=" w-full flex flex-col items-center ">
          <div className="text-sm text-gray-600">Starting from</div>
          <div className="text-3xl font-bold text-blue-500 mt-1">$1.80</div>
          <div className='w-full'>
            <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              <strong>START NOW</strong>
            </button>
          </div>
        </div>

        
        <div className="w-full flex flex-col gap-2 mt-4">
        <p className="text-gray-600">
          <strong>Web Hosting features</strong></p>
          
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Unlimited Bandwidth</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Domain Registration / Transfer</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>Free Daily Backups, Certificate(s)</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>24/7 Tech Support</span>
          </p>
          <p className="text-gray-600 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>45-day money-back guarantee</span>
          </p>

         
        </div>

        {/* Second Button */}
        <div className='w-full'>
          <button className="w-full mt-4 px-6 py-2 items-center bg-white text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            <strong>START NOW</strong>
          </button>
        </div>
      </div>

      
      
    </div>
  );
}

export default HostingPlansCard;
