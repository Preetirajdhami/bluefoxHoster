import React from 'react'
import Header from '../_components/Header';
import WebHostingImage from '../_components/WebHostingImage';
import WebHostingImage2 from '../_components/WebHostingImage2'
import WebHostingCard from '../_components/WebHostingCard';
import Footer from '../_components/Footer';

const WebHosting = () => {
  return (
    <div className=''>
        <Header />
        <div
      className='bg-custom-gradient py-10 2xl:px-56'
      style={{
        background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
      }}
    >
      <div className='w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 text-white mb-4 md:mb-0'>
          <p className='mt-2 text-4xl font-semibold lg:text-5xl'>
          Lightning-Fast cPanel Hosting in Nepal for Your Online Presence
          </p>
          <h1 className='text-base mt-5 '>
          Unlock the potential of your website with our superfast and dependable cPanel hosting! Enjoy limitless bandwidth, unparalleled performance, and robust security measures tailored for your needs.
          </h1>

          <button className='mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
            <strong>Get Started</strong>
          </button>

          <p>

          </p>
          
          
          
        </div>

        <div className='flex-1'>
          
          <div className='hidden md:block'>
            <WebHostingImage />

            
          </div>
          
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">
              
            </a>
          </p>
        </div>
      </div>
    </div>

    
    <WebHostingCard />

    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-200">
           
            <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="">
            <WebHostingImage2/>
          </div>
          <p className='text-sm text-gray-400 mt-2'>
            <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">

            </a>
          </p>
            </div>

            
            <div className="lg:w-1/2 lg:pl-8">
                <h2 className="text-3xl font-bold text-gray-700 mb-4">
                    Why Choose Web Hosting with Blue Fox Hoster?
                </h2>
                <p className="text-gray-600 mb-4">
                    Blue Fox Hoster provides reliable and secure web hosting solutions tailored to your specific needs. Our state-of-the-art infrastructure ensures your website remains online and performs optimally at all times.
                </p>
                <p className="text-gray-600 mb-4">
                    With our 24/7 customer support, you can count on us to be there whenever you need assistance. Our knowledgeable team is always ready to help you with any issues or questions you may have, ensuring a smooth hosting experience.
                </p>
                <p className="text-gray-600">
                    Choose Blue Fox Hoster for our competitive pricing and excellent features, including free SSL certificates, daily backups, and a user-friendly control panel. Experience the best web hosting services and take your online presence to the next level.
                </p>
            </div>
        </div>
    <Footer />
      
    </div>
  )
}

export default WebHosting
