"use client";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VpsHostingFeatures = () => {
    const [isYearly, setIsYearly] = useState(true);
    const features = [
        {
            icon: <IoServer className="text-4xl" />,
            title: "Dedicated Resources",
            description:
                "Each VPS environment is allocated dedicated resources like CPU, RAM, and storage, ensuring consistent performance and preventing other users from impacting your website or application.",
        },
        {
            icon: <BsGraphUpArrow className="text-4xl" />,
            title: "Scalability",
            description:
                "VPS hosting can easily adapt to your needs as your business or website grows, allowing you to increase or adjust resources like memory, storage, and bandwidth without migrating to a new server.",
        },
        {
            icon: <AiOutlineFileProtect className="text-4xl" />,
            title: "Enhanced Security and Control",
            description:
                "VPS hosting provides a higher level of security compared to shared hosting, as each VPS is isolated from others. Users often have root access, allowing them to manage resources fully.",
        },
    ];



    return (
        <div className="bg-gray-200">
            <div className="  flex flex-col px-8 2xl:px-56 items-center">
                <div>
                    <div className="flex flex-col justify-center space-y-7">
                        <h2 className="text-4xl text-center font-medium">
                            Why Choose Bluefoxhoster as Your VPS Hosting Provider?
                        </h2>
                        <p className="text-sm text-center">
                            At BlueFox Hoster, our Virtual Private Servers (VPS) provide a dynamic solution for web hosting, data storage, application deployment, and beyond. Offering more flexibility, scalability, and cost efficiency than traditional servers, our VPS hosting empowers your business to grow without limits. With BlueFox Hoster’s top-tier features and dedicated support, you’ll experience reliable, high-performance hosting tailored to meet all your needs.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 my-8 mx-4 md:mx-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs items-center flex flex-col justify-between text-center"
                            >
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 flex-grow">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>VPS Hosting Plans For You</h2>
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

                    <div className="bg-gray-50">

                    </div>
                </div>
            </div>
            <div className="px-8 2xl:px-56">
                <table className='text-sm text-left text-gray-700 border border-gray-200 w-full mt-9'>
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-800 to-blue-600 text-white uppercase tracking-wider">
                            <th className='py-3 px-4 h-12 border-b border-gray-300 font-medium'>VALUE</th>
                            <th className='py-3 px-4 h-12 border-b border-gray-300 font-medium'>CORE</th>
                            <th className='py-3 px-4 h-12 border-b border-gray-300 font-medium'>RAM</th>
                            <th className='py-3 px-4 h-12 border-b border-gray-300 font-medium'>STORAGE</th>
                            <th className='py-3 px-4 h-12 border-b border-gray-300 font-medium'>PRICE</th>
                            <th className='py-3 px-4 h-12 border-b border-gray-300'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 transition duration-150">
                            <td className="py-4 px-6 border-b border-gray-200">SC D4</td>
                            <td className="py-4 px-6 border-b border-gray-200">2vCORE</td>
                            <td className="py-4 px-6 border-b border-gray-200">4 GB</td>
                            <td className="py-4 px-6 border-b border-gray-200">25GB SSD</td>
                            <td className="py-4 px-6 border-b border-gray-200">Rs 2,500/ mo</td>
                            <td className="py-4 px-6 border-b border-gray-200 text-center">
                                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-150">
                                    Deploy Now
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition duration-150">
                            <td className="py-4 px-6 border-b border-gray-200">SC D5</td>
                            <td className="py-4 px-6 border-b border-gray-200">4vCORE</td>
                            <td className="py-4 px-6 border-b border-gray-200">8 GB</td>
                            <td className="py-4 px-6 border-b border-gray-200">50GB SSD</td>
                            <td className="py-4 px-6 border-b border-gray-200">Rs 4,500/ mo</td>
                            <td className="py-4 px-6 border-b border-gray-200 text-center">
                                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-150">
                                    Deploy Now
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition duration-150">
                            <td className="py-4 px-6 border-b border-gray-200">SC D6</td>
                            <td className="py-4 px-6 border-b border-gray-200">6vCORE</td>
                            <td className="py-4 px-6 border-b border-gray-200">16 GB</td>
                            <td className="py-4 px-6 border-b border-gray-200">100GB SSD</td>
                            <td className="py-4 px-6 border-b border-gray-200">Rs 6,500/ mo</td>
                            <td className="py-4 px-6 border-b border-gray-200 text-center">
                                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-150">
                                    Deploy Now
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition duration-150">
                            <td className="py-4 px-6 border-b border-gray-200">SC D7</td>
                            <td className="py-4 px-6 border-b border-gray-200">8vCORE</td>
                            <td className="py-4 px-6 border-b border-gray-200">32 GB</td>
                            <td className="py-4 px-6 border-b border-gray-200">200GB SSD</td>
                            <td className="py-4 px-6 border-b border-gray-200">Rs 8,500/ mo</td>
                            <td className="py-4 px-6 border-b border-gray-200 text-center">
                                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-150">
                                    Deploy Now
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition duration-150">
                            <td className="py-4 px-6 border-b border-gray-200">SC D8</td>
                            <td className="py-4 px-6 border-b border-gray-200">10vCORE</td>
                            <td className="py-4 px-6 border-b border-gray-200">64 GB</td>
                            <td className="py-4 px-6 border-b border-gray-200">500GB SSD</td>
                            <td className="py-4 px-6 border-b border-gray-200">Rs 10,500/ mo</td>
                            <td className="py-4 px-6 border-b border-gray-200 text-center">
                                <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-150">
                                    Deploy Now
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="6" className="py-4 text-center text-lg font-semibold">
                                All Plans Come With
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>Full Root Access</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>SSD Storage</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>DDoS Protection</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>24/7 Customer Support</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>Full Root Access</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>SSD Storage</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>DDoS Protection</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">

                                        <CiCircleCheck className="text-2xl mr-2 text-green-500" />
                                        <span>24/7 Customer Support</span>
                                    </div>
                                    <button className=" py-1 px-2 ">
                                        <IoIosInformationCircleOutline className="text-2xl mr-2" />
                                    </button>
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default VpsHostingFeatures;
