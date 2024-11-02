import React from 'react'
import BusinessEmailHostingImage from '../_components/BusinessEmailHostingImage';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

const BusinessEmailHosting = () => {
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
          Crafted for Professionals, Built for Business
          </p>
          <h1 className='text-base mt-5 '>
          Present a polished, professional image with branded email addresses tailored to your website. We take care of the extensive maintenance, so you can enjoy a reliable email experience without the stress.
          </h1>

          <button className='mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
            <strong>Get Started</strong>
          </button>

          <p>

          </p>
          
          
          
        </div>

        <div className='flex-1'>
          
          <div className='hidden md:block'>
            <BusinessEmailHostingImage/>

            
          </div>
          
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">
              
            </a>
          </p>
        </div>
      </div>
      
    </div>
    
        <Footer />
      
    </div>
  )
}

export default BusinessEmailHosting ;
