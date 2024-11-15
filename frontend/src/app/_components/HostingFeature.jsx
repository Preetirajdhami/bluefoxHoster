"use client"
import React, { useState } from 'react';
import { FaCloud, FaLock, FaServer } from 'react-icons/fa';
import WorldWide from '../_components/WorldWideHome';
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const HostingFeatures = () => {
  const features = [
    {
      icon: <FaCloud className="text-4xl text-blue-500" />,
      title: 'Fast Cloud Platform',
      description:
        'Try our SSD-based hosting packages for exceptional performance – no more delays waiting for your website to load.',
    },
    {
      icon: <FaLock className="text-4xl text-blue-500" />,
      title: 'SSL Certificate',
      description:
        'SSL Certificates are available at no cost for all your domains, both now and in the future, with complimentary automatic renewals.',
    },
    {
      icon: <FaServer className="text-4xl text-blue-500" />,
      title: 'Hosting Reliability',
      description:
        'Our enterprise-level cloud hosting has been optimized by us to achieve significantly higher IOPS, making it ideal for demanding applications and websites.',
    },
  ];
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [

    {
      question: "Where is Blue Fox Hoster based",
      answer: "Blue Fox Hoster is a global web hosting company headquartered in Sunsari, Nepal. we proudly deliver reliable and high-quality hosting solutions worldwide. Recognized as a top provider in the industry, we are committed to innovation and enhancing our services to meet our clients' evolving needs "
    },
    {
      question: "How is Blue Fox Hoster's technical support?",
      answer: "Blue Fox Hoster provides 24/7 technical support to assist with any issues you may encounter. Our skilled support team is available via live chat, email, and phone to ensure a seamless hosting experience."
    },
    {
      question: "Do you offer data backups with hosting plans?",
      answer: "Yes, Blue Fox Hoster includes automated data backups with all hosting plans to safeguard your data. Backup frequency depends on the hosting package you choose."
    },
    {
      question: "What is Blue Fox Hoster's uptime guarantee?",
      answer: "We offer a 99.9% uptime guarantee on all hosting services to ensure your website remains accessible to your visitors around the clock."
    }
  ];

  return (
    <div className='px-8 2xl:px-56'>
      <div className="flex flex-col md:flex-row justify-center md:items-stretch sm:items-center md:space-x-6 space-y-6 md:space-y-0 mt-20 mx-4 md:mx-0">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs flex flex-col justify-between text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 flex-grow">{feature.description}</p>
          </div>
        ))}


      </div>

      <div className='flex flex-col mt-24 md:flex-row overflow-hidden '>
        <div>
          <h1 className='text-4xl font-semibold xl:font-bold text-left'
            style={{ color: '#1555db' }}>Real Worldwide Hosting with Blue Fox Hoster</h1>
          <p className='mt-3 text-gray-600 '>We utilize multiple cloud infrastructure providers to deliver a top-tier, fast web hosting service that ensures global availability, regardless of your or your customers' location.</p>
          <div >
            <div className="flex items-center space-x-2  mt-5 mb-6  p-3  ">
              <FaCheckCircle className="text-green-500" />
              <div className=" text-sm font-medium text-gray-600">
                All services are active
              </div>
            </div>
          </div>

        </div>
        <div>
          <WorldWide />
        </div>
      </div>

      <div className="flex flex-col mb-16 md:flex-row gap-10">

        <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600  mb-6">
            Find answers to common questions. If you have any inquiries, feel free to reach out to us!
          </p>
          <a
            href="/contact-us"
            className="px-6 py-3  text-white rounded-full bg-colors-buttomBlue hover:bg-colors-hoverBlue transition duration-200"  
          >
            Contact Now
          </a>

        </div>


        <div className="flex-2 p-6  bg-white rounded-lg shadow-lg">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="font-medium text-lg text-gray-800">{item.question}</h3>
                  {openQuestion === index ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  )}
                </div>
                {openQuestion === index && (
                  <p className="text-gray-600 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


  );
};

export default HostingFeatures;
