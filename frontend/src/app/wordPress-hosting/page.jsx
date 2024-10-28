"use client";
import Header from '../_components/header'
import Footer from '../_components/footer'
import React, { useState } from "react";
import Wordpressimage from '../_components/Wordpressimage'
import { FaCircle } from "react-icons/fa";

const WordpressHosting = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <div>
        <Header />
        <div
      className='bg-custom-gradient py-14 2xl:px-56 px-8'
      style={{
        background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
      }}
    >
      <div className='w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 text-white mb-4 md:mb-0'>
          <p className='mt-2 text-4xl font-semibold lg:text-5xl'>
          Nepal's Best WordPress Hosting 
          </p>
          <h1 className='text-base mt-5 '>
          Take your WordPress project to the next level with our premium hosting! Enjoy hassle-free one-click setups and a wealth of features tailored just for you.
          </h1>

          <button className='mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
            <strong>Choose Your Plan</strong>
          </button>

          <p>

          </p>
          
          
          
        </div>

        <div className='flex-1'>
          
          <div className='hidden md:block'>
            <Wordpressimage/>

            
          </div>
          
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">
              
            </a>
          </p>
        </div>
      </div>

      
      
    </div>
    <div className='2xl:px-56 px-8 mt-10'>
       <div>
        <h2 className='text-4xl font-medium'> Choose a plan that suits for your business </h2>
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
       </div>
       <div className='mt-10'>
        <div>
          
        </div>

       </div>
      </div>
    
        <Footer />
      
    </div>
  )
}

export default WordpressHosting
