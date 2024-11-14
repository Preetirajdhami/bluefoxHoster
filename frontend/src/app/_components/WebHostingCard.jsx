"use client";
import React, { useState } from 'react';
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import WebHostingImage5 from './WebHostingImage5';


const HostingPlanCard = ({ title, monthlyPrice, yearlyPrice, features, isYearly }) => {
    const price = isYearly ? yearlyPrice : monthlyPrice;


    return (
        <div className="relative border-2 border-blue-500 rounded-lg p-6 flex flex-col items-center md:items-start gap-4 md:gap-6 max-w-md md:max-w-4xl mx-auto transition-all duration-300">
            <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-blue-500">{title}</h3>
            </div>
            <div className="w-full text-center">
                <div className="text-sm text-gray-500">From only</div>
                <div className="text-5xl font-semibold text-gray-700 mt-1">Rs {price}</div>
                <div className="text-sm text-gray-500">/ {isYearly ? 'year' : 'month'}</div>
            </div>
            <div className="w-full">
                <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                    BUY NOW
                </button>
            </div>
            <div className="w-full mt-4">
                <p className="text-gray-700 font-bold">Features</p>
                <div className="flex flex-col gap-2 mt-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>{feature}</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" aria-label="More information" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WebHostingCard = () => {
    const [isYearly, setIsYearly] = useState(false);
    const scrollToPricing = () => {
        document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
    };

    const plans = [
        {
            title: "LaunchPad Web Hosting",
            monthlyPrice: 250,
            yearlyPrice: 2500,
            features: ["1 Site hosted", "3 GB SSD Storage", "3 Custom Emails", "LiteSpeed Web Server", "Daily Backups"]
        },
        {
            title: "Growth Web Hosting",
            monthlyPrice: 500,
            yearlyPrice: 5000,
            features: ["5 Sites hosted", "10 GB SSD Storage", "5 Custom Emails", "LiteSpeed Web Server", "Daily Backups"]
        },
        {
            title: "Pro Web Hosting",
            monthlyPrice: 1000,
            yearlyPrice: 10000,
            features: ["10 Sites hosted", "20 GB SSD Storage", "Unlimited Emails", "LiteSpeed Web Server", "Daily Backups"]
        },
    ];

    return (
        <div>
            <div className='bg-gray-50 pt-10 2xl:px-56 px-8 text-center'>
                <h2 className="text-5xl font-medium text-gray-700" style={{ color: '#0073b3' }}>Best Cloud Hosting Plans</h2>
                <p className="text-gray-500 mt-2">
                    Join the thousands who trust our top-rated web hosting in Nepal. Choose the best web hosting package that best fits your needs.
                </p>

                <div className="flex justify-center items-center gap-2 mt-4">
                    <div className="flex items-center">
                        <span className="text-green-500">★★★★★</span>
                        <span className="ml-2 text-gray-500">4.8 out on 100+ reviews</span>
                    </div>
                    <a href="#" className="text-indigo-600 hover:underline">See Reviews &rarr;</a>
                </div>

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

                <div className="flex justify-center items-center mt-6 space-x-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700">Standard</h3>
                        <hr className="border-blue-500 w-20 mt-2" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 mt-2 md:px-8 pt-8 bg-white">
                    {plans.map((plan, index) => (
                        <HostingPlanCard key={index} {...plan} isYearly={isYearly} />
                    ))}


                </div>
                <div className='pt-4 pb-4'>
                    <h1 className='cursor-pointer border-2 border-blue-500 inline-block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50' onClick={scrollToPricing}>
                        Compare Web Hosting Plans
                    </h1>
                </div>

            </div>

            {/*Outstanding support section */}
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 2xl:px-56 ">
                    
                    
                    <div className="md:w-1/2  py-28 px-8 rounded-lg">
                        <h2 className="text-4xl font-bold text-gray-700 mb-4">
                            Outstanding 24/7 Expert Hosting Support
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Our hosting support team is always ready to assist, from choosing hosting plans to ensuring your website runs smoothly.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Contact Now
                        </a>
                    </div>

                   
                    <div className="md:w-1/2   rounded-lg flex items-center justify-center">

                    <WebHostingImage5 />
                    
                       
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WebHostingCard;
