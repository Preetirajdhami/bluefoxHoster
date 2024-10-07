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
       
        <div className='flex-1 text-white mb-4 md:mb-0'>
          
          <p className='mt-2 text-base md:text-lg'>
          Up to 75% off Web hosting
          
          </p>
          <h1 className='text-3xl md:text-4xl font-bold'>Discover the Power of Unlimited Hosting—Fast, Secure, and Tailored for You!</h1>
          <button className='mt-4 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition'>
            Get Started
          </button>
        </div>

       
        <div className='flex-1'>
          <img
            src='/path-to-your-image.png' 
            alt='Hero Image'
            className='w-full h-auto object-cover rounded-md' 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
