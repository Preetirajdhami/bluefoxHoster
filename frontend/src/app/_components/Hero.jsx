import React from 'react';

const Hero = () => {
  return (
    <div
      className='bg-custom-gradient py-4'
      style={{
        background: 'linear-gradient(258.38deg, #532be9 24.08%, #1b076e 91.93%)',
      }}
    >
      <div className='w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center'>
        {/* Left Section */}
        <div className='flex-1 text-white mb-4 md:mb-0'>
          <h1 className='text-3xl md:text-4xl font-bold'>Welcome to Our Website</h1>
          <p className='mt-2 text-base md:text-lg'>
            Discover amazing content and explore our features.
          </p>
          <button className='mt-4 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition'>
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className='flex-1'>
          <img
            src='/path-to-your-image.png' // Replace with your image path
            alt='Hero Image'
            className='w-full h-auto object-cover rounded-md' // Optional: add rounded corners
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
