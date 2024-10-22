"use client";
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";

const WebHostingCard = () => {
    const [showMoreFeatures, setShowMoreFeatures] = useState(false);

    // Function to toggle the visibility of additional features
    const toggleMoreFeatures = () => {
        setShowMoreFeatures((prev) => !prev);
    };

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 mt-16 md:px-8 pt-8 bg-white '>
            {/* Card 1 */}
            <div className="relative border border-gray-300 rounded-lg p-6 flex flex-col items-center gap-6 max-w-md mx-auto shadow-md">
                {/* Header Section */}
                <div className="text-left ">
                    <h3 className="text-lg font-semibold text-blue-500">LaunchPad Web Hosting</h3>
                </div>
                <div className="text-center md:text-left mt-8">
          <h3 className="text-lg font-semibold text-center text-blue-500">Web Hosting</h3>
          
        </div>


                {/* Price Section */}
                <div className="w-full text-center">
                    <div className="text-sm text-gray-500">From only</div>
                    <div className="text-4xl font-bold text-blue-500 mt-1">Rs 250</div>
                    <div className="text-sm text-gray-500">/ month</div>
                </div>

                {/* Buy Button */}
                <div className="w-full">
                    <button className="w-full mt-4 px-8 py-4  bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                        BUY NOW
                    </button>
                </div>

                {/* Features Section */}
                <div className="w-full mt-4">
                    <p className="text-gray-700 font-bold">Features</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-600 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            1 Site hosted
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            3 GB SSD Storage
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            3 Custom Emails
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            LiteSpeed Web Server
                        </p>
                        <p className="text-gray-600 flex items-center">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            Daily Backups
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    {/* "More Features" Toggle */}
                    <span
                        onClick={toggleMoreFeatures}
                        className="text-base hover:text-blue-500 transition flex items-center cursor-pointer"
                    >
                        More Features
                        <RiArrowDropDownLine className="ml-1 text-2xl" />
                    </span>

                    {/* Conditional rendering for additional features */}
                    {showMoreFeatures && (
                        <div className="mt-2 ml-4">
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Free SSL Certificate
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Advanced Security Features
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Python & Node.js Support
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Terminal Access
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Datacenter Option
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative border-2 border-blue-500 rounded-lg p-8 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">

                <div className="text-center md:text-left mt-8">
                    <h3 className="text-lg font-semibold text-center text-blue-500">LaunchPad Web Hosting</h3>

                </div>
                {/* Price Section */}
                <div className="w-full text-center">
                    <div className="text-sm text-gray-500">From only</div>
                    <div className="text-5xl font-semibold text-gray-700 mt-1">Rs 250</div>
                    <div className="text-sm text-gray-500">/ month</div>
                </div>
                {/* Buy Button */}
                <div className="w-full">
                    <button className="w-full mt-4 px- py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                        BUY NOW
                    </button>
                </div>





                <div className="w-full mt-4">
                    <p className="text-gray-700 font-bold">Features</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex justify-between  items-center  text-gray-600">
                            <p className="flex flex-row items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>1 Site hosted</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer  " />
                        </div>


                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>3 GB SSD Storage</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>3 Custom Emails</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>LiteSpeed Web Server</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />

                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>Daily Backups</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>
                    </div>

                </div>

                <div className="w-full">
                    {/* "More Features" Toggle */}
                    <span
                        onClick={toggleMoreFeatures}
                        className="text-base hover:text-blue-500 transition flex items-center cursor-pointer"
                    >
                        More Features
                        <RiArrowDropDownLine className="ml-1 text-2xl" />
                    </span>

                    {/* Conditional rendering for additional features */}
                    {showMoreFeatures && (
                        <div className="mt-2 ml-4">
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Free SSL Certificate
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Advanced Security Features
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Python & Node.js Support
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Terminal Access
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Datacenter Option
                            </p>
                        </div>
                    )}
                </div>
            </div>
            {/* Card 3 */}
            <div className="relative border-2 border-blue-500 rounded-lg p-8 flex flex-col items-center md:items-start gap-4 md:gap-8 max-w-md md:max-w-4xl mx-auto">





                <div className="text-center md:text-left mt-8">
                    <h3 className="text-lg font-semibold text-center text-blue-500">LaunchPad Web Hosting</h3>

                </div>
                {/* Price Section */}
                <div className="w-full text-center">
                    <div className="text-sm text-gray-500">From only</div>
                    <div className="text-4xl font-bold text-blue-500 mt-1">Rs 250</div>
                    <div className="text-sm text-gray-500">/ month</div>
                </div>
                {/* Buy Button */}
                <div className="w-full">
                    <button className="w-full mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                        BUY NOW
                    </button>
                </div>





                <div className="w-full mt-4">
                    <p className="text-gray-700 font-bold">Features</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex justify-between  items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>1 Site hosted</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer ml-auto " />
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>3 GB SSD Storage</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>3 Custom Emails</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>LiteSpeed Web Server</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />

                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <p className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <span>Daily Backups</span>
                            </p>
                            <IoIosInformationCircleOutline className="text-gray-500 cursor-pointer" />
                        </div>
                    </div>

                </div>

                <div className="w-full">
                    {/* "More Features" Toggle */}
                    <span
                        onClick={toggleMoreFeatures}
                        className="text-base hover:text-blue-500 transition flex items-center cursor-pointer"
                    >
                        More Features
                        <RiArrowDropDownLine className="ml-1 text-2xl" />
                    </span>

                    {/* Conditional rendering for additional features */}
                    {showMoreFeatures && (
                        <div className="mt-2 ml-4">
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Free SSL Certificate
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Advanced Security Features
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Python & Node.js Support
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Terminal Access
                            </p>
                            <p className="text-gray-600 flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                Datacenter Option
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WebHostingCard;
