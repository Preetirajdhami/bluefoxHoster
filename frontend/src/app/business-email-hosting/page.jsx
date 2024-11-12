"use client";
import React, { useState } from 'react';
import BusinessEmailHostingImage from '../_components/BusinessEmailHostingImage';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { FaShieldAlt, FaCloud, FaEnvelope, FaUserShield, FaCircle } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import BusinessEmailHostingImage2 from '../_components/BusinessEmailHostingImage2';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
      title: "Starter",
      price: 2500,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
    {
      title: "Premium",
      price: 4500,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
    {
      title: "Enterprise",
      price: 7500,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
  ],
  annually: [
    {
      title: "Starter",
      price: 15000,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
    {
      title: "Premium",
      price: 30000,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
    {
      title: "Enterprise",
      price: 75000,
      features: [
        "Email API, SMTP relay, webhooks",
        "Tracking and Analytics",
        "Webmail",
        "Mobile Sync",
        "Auto-responders",
        "Advanced Calendar & more"
      ],
      advanced_feature: [
        "POP & IMAP Access",
        "TLS Support",
        "Last Login IP",
        "Antivirus Check",
        "Advanced Anti-Spam"
      ],
      label: "Order Now"
    },
  ],
};

const BusinessEmailHosting = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Business Email Hosting?",
      answer: "Business email hosting provides you with professional email addresses linked to your business domain (e.g., info@yourcompany.com), offering enhanced security, reliability, and control over your email services. It’s essential for businesses looking to maintain a professional image and improve communication."
    },
    {
      question: "Why should I use business email hosting instead of a free email service?",
      answer: "Business email hosting provides a more secure, reliable, and professional way to manage your emails. Unlike free services, business email hosting offers custom domain names, better spam protection, and more storage, which is crucial for a growing business."
    },
    {
      question: "Can I access my business email on multiple devices?",
      answer: "Yes, with business email hosting, you can access your email from any device, whether it’s a smartphone, tablet, or desktop computer. Our hosting solution supports IMAP, POP, and webmail, ensuring you can stay connected on the go."
    },
    {
      question: "Is my business email secure?",
      answer: "Absolutely. Business email hosting provides robust security features like encryption, anti-spam filters, and secure login protocols to protect your sensitive data. We ensure that your business communications remain safe and private."
    },
    {
      question: "How can I set up a custom business email address?",
      answer: "Setting up a custom email address is easy. You simply choose your desired domain name and configure the email hosting service to link it to your domain. We provide step-by-step instructions, or our support team can assist you throughout the process."
    },
    {
      question: "Do you offer email migration services?",
      answer: "Yes, we offer seamless email migration services. Whether you’re switching from another provider or upgrading to our business email hosting, our team will help migrate your email data, ensuring minimal downtime and a smooth transition."
    }
  ];


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

      <div className="px-8 2xl:px-56 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center md:text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">User-Friendly Management</h1>
          <p className="text-gray-600">
            Blue Fox Hoster offers an easy-to-use control panel that provides all the tools needed to manage your email accounts, including device configuration and DNS settings.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Email Continuity / Redundancy</h1>
          <p className="text-gray-600">
            Our sophisticated email filter analyzes incoming messages to identify and block spam, viruses, phishing attempts, and other email threats from botnets and spammers.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:text-left bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Inbox, not SPAM!</h1>
          <p className="text-gray-600">
            Our outbound emails are routed through a network of distributed IP addresses dedicated to ensuring the successful delivery of your messages.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-14 px-8 2xl:px-56">
        <h2 className='text-5xl font-medium text-gray-800 text-center' style={{ color: '#0073b3' }}>Choose a plan that suits your business</h2>
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
            <div key={index} className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-102">
              <h3 className="text-2xl font-semibold text-center mb-4">{plan.title}</h3>
              <p className="text-xl font-bold text-center text-blue-600 mb-4">{`₨ ${plan.price}`}</p>

              <div className="text-center mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Features:</h4>
                <ul className="list-none space-y-2 text-left pl-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <IoMdCheckmarkCircleOutline className="text-green-500 text-xl mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Advanced Features:</h4>
                <ul className="list-none space-y-2 text-left pl-4">
                  {plan.advanced_feature.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <IoMdCheckmarkCircleOutline className="text-green-500 text-xl mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full text-white bg-blue-600 py-2 rounded-lg hover:bg-blue-800 transition duration-200">
                {plan.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="py-14 px-8 2xl:px-56"
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}>
        <div className="flex flex-col justify-center space-y-7">
          <h2 className="text-5xl text-center text-white font-semibold" >
            Key Features of Business Email Hosting
          </h2>
          <p className=" text-white text-center">
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
              <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 px-8 2xl:px-56 overflow-x-hidden  py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Why Choose Email Hosting for Your Business?</h2>
          <p className="text-lg text-gray-600 mb-4">
            For small business owners, your email is more than just communication—it’s an essential part of your online presence and marketing strategy. By using a domain-based business email address, you project professionalism, boosting your brand's trustworthiness with potential clients.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Customize your email hosting to match your business goals. Seamlessly collaborate and manage emails, meetings, calendars, and tasks with ease.
          </p>
          <p className="text-lg text-gray-600">
            Blue Fox Hoster Business Email Hosting solutions help you elevate your corporate email and establish a distinct brand identity. Our Starter Email Hosting plan offers 5 GB of ample storage and the flexibility to access your business email from anywhere, at any time.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="">
            <BusinessEmailHostingImage2 />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-16 md:flex-row gap-10 px-8 2xl:px-56 pt-9">

        <div className="flex-1 p-6  bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-700 mb-4">Have Inquiries?
            We have a best Business Email hosting solution.</h2>
          <p className="text-gray-600  mb-6">
            If you're seeking top-notch email hosting services, Blue Fox Hoster is your ideal choice. We offer a wide range of hosting solutions, including business email hosting, web hosting, and more. Renowned for our excellence, we provide exceptional services at the most competitive prices.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
            Contact Now
          </button>
        </div>


        <div className="flex-2 p-6  bg-white rounded-lg shadow-lg">
          <div className="space-y-6 ">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex border-b items-center justify-between cursor-pointer"
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


      <Footer />
    </div>
  );
};

export default BusinessEmailHosting;
