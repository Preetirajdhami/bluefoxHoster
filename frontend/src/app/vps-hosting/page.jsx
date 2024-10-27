import React from 'react'
import Header from '../_components/header';
import Footer from '../_components/footer';
import VpsHostingImage from '../_components/VpsHostingImage' ;
import VpsHostingFeature from '../_components/VpsHostingFeatures' ;

const VpsHosting = () => {
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
          Stay Ahead with Reliable, Lightning-Fast VPS Hosting in Nepal 
          </p>
          <h1 className='text-base mt-5 '>
          Experience the next level of performance and adaptability. Our VPS hosting in Nepal provides the speed and scalability your expanding business needs, guaranteeing an outstanding user experience, every single time.
          </h1>

          <button className='mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
            <strong>Get Started</strong>
          </button>

          <p>

          </p>
          
          
          
        </div>

        <div className='flex-1'>
          
          <div className='hidden md:block'>
            <VpsHostingImage />

            
          </div>
          
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">
              
            </a>
          </p>
        </div>
      </div>
      
    </div>
    <VpsHostingFeature />
        <Footer />
      
    </div>
  )
}

export default VpsHosting
