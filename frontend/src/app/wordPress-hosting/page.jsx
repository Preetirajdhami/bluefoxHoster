"use client";
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import React, { useState } from "react";
import Wordpressimage from '../_components/Wordpressimage';
import { FaCircle } from "react-icons/fa";
import WordpressDetailedPricing from '../_components/WordpressDetailedPricing'

const WordpressHosting = () => {
  const [isYearly, setIsYearly] = useState(true);
  const scrollToPricing = () => {
    document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
};
 


  const plans = [
    {
      title: 'Wp Lite',
      priceMonthly: 'Rs 500',
      priceYearly: 'Rs 5,000',
      features: ['1 Website', '10GB SSD Storage', 'Free SSL', '10 Mailbox', 'Daily Backup'],
    },
    {
      title: 'Wp Standard',
      priceMonthly: 'Rs 999',
      priceYearly: 'Rs 9,999',
      features: ['10 Website', '25GB SSD Storage', 'Free SSL', 'Unlimited Mailbox', 'Daily Backup'],
      bestSelling: true,
    },
    {
      title: 'Wp Ultimate',
      priceMonthly: 'Rs 2,000',
      priceYearly: 'Rs 20,000',
      features: ['Unlimited Website', 'Unlimited SSD Storage', 'Free SSL', 'Unlimited Mailbox', 'Daily Backup'],
    },
  ];

  const features = [
    {
      title: 'One-Click Automatic Installation',
      description: 'Effortlessly launch a new WordPress site with our one-click installation feature—no technical skills needed! Our team is also available to assist you with the setup.',
    },
    {
      title: 'Complimentary Migrations',
      description: 'Our Verpex migration team will seamlessly transfer your existing WordPress sites for free, ensuring no downtime. Have multiple sites? We can take care of them all.',
    },
    {
      title: 'Performance Optimized',
      description: 'Get ready for an exceptional experience! Our WordPress hosting is powered by Lightspeed web servers, delivering outstanding speed for your website.',
    },
    {
      title: 'Robust Security Features',
      description: 'Protect your site from hacks with our advanced security measures, including malware scanning and complimentary SSL certificates to ensure your WordPress site remains secure.',
    },
    {
      title: 'Around-the-Clock Developer Support',
      description: 'Our team of WordPress developers is available 24/7 to assist you with any issues, from managed migrations to complex PHP bugs. We’re here to help!',
    },
    {
      title: 'Free Domain Registration',
      description: 'Enjoy a complimentary domain name registration or transfer with every order. You can even migrate your existing domain to us without any extra fees.',
    },
    {
      title: 'Offsite Backups',
      description: 'We perform daily backups using JetBackup, offering the option for twice-a-day backups. You can easily browse, restore, and download backups, which are retained for 30 days.',
    },
    {
      title: 'WordPress Specific Optimization',
      description: 'Our hosting servers are expertly configured to ensure your site remains operational without bugs or timeouts, allowing you to achieve all your business objectives.',
    },
  ];

  return (
    <div>
      <Header />
      <div
        className=' py-14 2xl:px-56 px-8 '
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
          </div>

          <div className='flex-1'>
            <div className='hidden md:block'>
              <Wordpressimage />
            </div>
          </div>
        </div>
      </div>

      <div className='2xl:px-56 px-8 mt-14'>
        <div>
          <h2 className='text-5xl font-semibold text-gray-800'> Choose a plan that suits your business </h2>
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg bg-white ${plan.bestSelling ? 'border-2 border-blue-600' : 'border'
                }`}
            >
              <h3 className="text-center text-lg font-semibold text-blue-900">{plan.title}</h3>
              <p className="text-center text-4xl font-bold text-gray-900 mt-4">
                {isYearly ? plan.priceYearly : plan.priceMonthly} <span className="text-lg">/year</span>
              </p>
              <button className="w-full mt-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Order Now
              </button>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5.707 12.293a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
                onClick={scrollToPricing}
               
              >
                View Full Features
              </button>
            </div>
          ))}
        </div>



      </div>

      <div className='px-8 2xl:px-56 pb-20'
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >
        <h2 className='text-5xl font-bold text-center pt-8 text-white mt-16 mb-14'>Why Choose Our Hosting?</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 bg-white">
              <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <WordpressDetailedPricing />

      <Footer />
    </div>
  )
}

export default WordpressHosting;
