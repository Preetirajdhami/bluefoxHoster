"use client";
import React, { useState } from 'react';
import BusinessEmailHostingImage from '../_components/BusinessEmailHostingImage';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { FaShieldAlt, FaCloud, FaEnvelope, FaUserShield, FaCircle } from 'react-icons/fa';


const emailFeatures = [
  {
    icon: <FaShieldAlt className="text-blue-600 text-4xl md:text-3xl" />,
    title: 'Advanced Security',
    description: 'Protect your emails with advanced security features like encryption and multi-factor authentication, ensuring your data stays safe.',
  },
  {
    icon: <FaCloud className="text-blue-600 text-4xl md:text-3xl" />,
    title: 'Ample Storage',
    description: 'Get generous storage space for all your business communications, ensuring you never have to worry about running out of space.',
  },
  {
    icon: <FaEnvelope className="text-blue-600 text-4xl md:text-3xl" />,
    title: 'Custom Domain Email',
    description: 'Enhance your brand image by using custom domain emails that add professionalism to your business communications.',
  },
  {
    icon: <FaUserShield className="text-blue-600 text-4xl md:text-3xl" />,
    title: 'Privacy Control',
    description: 'Manage privacy settings and data access, giving you complete control over who can view and interact with your emails.',
  },
];

const pricingPlans = {
  monthly: [
    {
      title: "Basic Email",
      price: 1.50,
      features: [
        "5 GB Storage",
        "Spam & Virus Protection",
        "Mobile Access",
        "24/7 Support"
      ],
      label: "STARTER PLAN"
    },
    {
      title: "Standard Email",
      price: 3.00,
      features: [
        "20 GB Storage",
        "Advanced Spam & Virus Protection",
        "Multiple Device Sync",
        "Priority Support"
      ],
      label: "BEST VALUE"
    },
    {
      title: "Premium Email",
      price: 7.50,
      features: [
        "Unlimited Storage",
        "AI-powered Spam Filtering",
        "Encrypted Communication",
        "Dedicated Account Manager"
      ],
      label: "PREMIUM PLAN"
    },
  ],
  annually: [
    {
      title: "Basic Email",
      price: 15.00, 
      features: [
        "5 GB Storage",
        "Spam & Virus Protection",
        "Mobile Access",
        "24/7 Support"
      ],
      label: "STARTER PLAN"
    },
    {
      title: "Standard Email",
      price: 30.00, 
      features: [
        "20 GB Storage",
        "Advanced Spam & Virus Protection",
        "Multiple Device Sync",
        "Priority Support"
      ],
      label: "BEST VALUE"
    },
    {
      title: "Premium Email",
      price: 75.00, 
      features: [
        "Unlimited Storage",
        "AI-powered Spam Filtering",
        "Encrypted Communication",
        "Dedicated Account Manager"
      ],
      label: "PREMIUM PLAN"
    },
  ],
};

const BusinessEmailHosting = () => {
  const [isAnnual, setIsAnnual] = useState(false); 

  const toggleBillingCycle = () => {
    setIsAnnual(prevState => !prevState); 
  };

  return (
    <div>
      
      <Header />
      <div
        className="py-14 2xl:px-56 px-8"
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >
        <div className="w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 text-white mb-4 md:mb-0">
            <p className="mt-2 text-4xl font-semibold lg:text-5xl">
              Crafted for Professionals, Built for Business
            </p>
            <h1 className="text-base mt-5">
              Present a polished, professional image with branded email addresses tailored to your website. We take care of the extensive maintenance, so you can enjoy a reliable email experience without the stress.
            </h1>

            <button className="mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition">
              <strong>Get Started</strong>
            </button>
          </div>

          <div className="flex-1">
            <div className="hidden md:block">
              <BusinessEmailHostingImage />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-14 px-8 2xl:px-56">
        <div className="flex flex-col justify-center space-y-7">
          <h2 className="text-4xl text-center font-medium" style={{ color: '#0073b3' }}>
            Key Features of Business Email Hosting
          </h2>
          <p className="text-sm text-center">
            Our Business Email Hosting offers secure, reliable, and professional communication solutions tailored for businesses of all sizes. From enhanced security measures to seamless integration and ample storage, our email hosting solution is designed to keep your communication professional, efficient, and accessible anytime, anywhere.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {emailFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-14 px-8 2xl:px-56">
        <h2 className='text-5xl font-medium text-gray-800 text-center'>Choose a plan that suits your business</h2>
        <div className="flex justify-center items-center mt-6">
          <span className="text-gray-500">Monthly</span>
          <label className="mx-2 relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={toggleBillingCycle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-700"></div>
            <span className="absolute left-0.5 top-0.5 peer-checked:left-5 transition-all duration-300">
              <FaCircle className="text-white w-5 h-5" />
            </span>
          </label>
          <span className="text-gray-500">Yearly</span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
          {pricingPlans[isAnnual ? 'annually' : 'monthly'].map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-lg bg-white "
                
            >
              <h3 className="text-center text-lg font-semibold text-blue-900">{plan.title}</h3>
              <p className="text-center text-4xl font-bold text-gray-900 mt-4">
                {isAnnual ? plan.price : plan.price.toFixed(2)} <span className="text-lg">{isAnnual ? '/year' : '/month'}</span>
              </p>
              <button className="w-full mt-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Order Now
              </button>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCircle className="text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="block text-center mt-2 text-xs text-gray-500">{plan.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessEmailHosting;
