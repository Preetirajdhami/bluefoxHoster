import React from 'react';

const RegisterDomain = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mb-16 bg-gray-50 relative">
      <div>
        <p className='text-gray-700 text-3xl font-medium'>Register Your Perfect Domain Name</p>
      </div>
     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>

    
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl z-10 relative">
        
       
        <div className="flex items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="eg. yourbusinessname"
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
        
        {/* Domain Prices Section */}
        <div className="flex justify-between text-gray-700">
          <div className="text-center">
            <span className="font-semibold text-lg">.com</span> <br />
            <span>Rs.1,799</span>
          </div>
          <div className="text-center">
            <span className="font-semibold text-lg">.net</span> <br />
            <span>Rs.2,099</span>
          </div>
          <div className="text-center">
            <span className="font-semibold text-lg">.org</span> <br />
            <span>Rs.1,799</span>
          </div>
          <div className="text-center">
            <span className="font-semibold text-lg">.xyz</span> <br />
            <span>Rs.300</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterDomain;
