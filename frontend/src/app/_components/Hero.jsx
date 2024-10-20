import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import HeroImage from './HeroImage'; 

const Hero = () => {
  return (
    <div
      className='bg-custom-gradient py-10'
      style={{
        background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
      }}
    >
      <div className='w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 text-white mb-4 md:mb-0'>
          <p className='mt-2 text-base md:text-lg'>
            Up to 75% off Web hosting
          </p>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Discover the Power of Unlimited Hosting—Fast, Secure, and Tailored for You!
          </h1>
          <p className="mt-3 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>24/7 Expert Support</span>
          </p>
          <p className="mt-2 flex items-center">
            <FaCheckCircle className="mr-2" />
            <span>99.9% Uptime Guarantee</span>
          </p>
          <button className='mt-7 bg-[rgba(24,95,246,1)] text-white px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
            <strong>Get Started</strong>
          </button>
          <p className="mt-5 flex items-center">
            <AiTwotoneSafetyCertificate className="mr-2 text-xl" />
            <span>45 Day Money Back Guarantee</span>
          </p>
        </div>

        <div className='flex-1'>
          
          <div className='hidden md:block'>
            <HeroImage />
          </div>
          
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">
              
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
