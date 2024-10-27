"use client"
import React from 'react'
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoServer } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";

const VpsHostingFeatures = () => {
    const [isYearly, setIsYearly] = useState(true);
    const features = [
        {
            icon: <IoServer className="text-4xl" />,
            title: 'Dedicated Resources',
            description:
                'Each VPS environment is allocated dedicated resources like CPU, RAM, and storage, ensuring consistent performance and preventing other users from impacting your website or application.',
        },
        {
            icon: <BsGraphUpArrow className="text-4xl" />,
            title: 'Scalability',
            description:
                ' VPS hosting can easily adapt to your needs as your business or website grows, allowing you to increase or adjust resources like memory, storage, and bandwidth without migrating to a new server.',
        },
        {
            icon: <AiOutlineFileProtect className="text-4xl" />,
            title: 'Enhanced Security and Control',
            description:
                'VPS hosting provides a higher level of security compared to shared hosting, as each VPS is isolated from others. Users often have root access, allowing them to  manage resources fully.',
        },
    ];
    return (
        <div className='bg-gray-200'>
            <div className='flex flex-col px-8 2xl:px-56 items-center '>
                <div>1
                    <div className='flex flex-col  justify-center space-y-7'>
                        <h2 className='text-4xl text-center font-medium'>Why Choose Bluefoxhoster as Your VPS Hosting Provider?</h2>
                        <p className='text-sm text-center'>At BlueFox Hoster, our Virtual Private Servers (VPS) provide a dynamic solution for web hosting, data storage, application deployment, and beyond. Offering more flexibility, scalability, and cost efficiency than traditional servers, our VPS hosting empowers your business to grow without limits. With BlueFox Hoster’s top-tier features and dedicated support, you’ll experience reliable, high-performance hosting tailored to meet all your needs.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 my-8 mx-4 md:mx-0'>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs items-center flex flex-col justify-between text-center"
                            >
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 flex-grow">{feature.description}</p>
                            </div>
                        ))}</div>
                </div>
                <div>
                    <h2>VPS Hosting Plans For You</h2>
                    <p></p>
                    <div className="flex justify-center items-center mt-6">
                        <span className="text-gray-500">Monthly</span>
                        <label className="mx-2 relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isYearly}
                                onChange={() => setIsYearly(!isYearly)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none   rounded-full peer peer-checked:bg-gray-700"></div>
                            <span className="absolute left-0.5 top-0.5 peer-checked:left-5 transition-all duration-300">
                                <FaCircle className="text-white w-5 h-5" />
                            </span>
                        </label>
                        <span className="text-gray-500">Yearly</span>

                    </div>

                    <div className='bg-slate-400'>
                        <table className='border border-gray-300'>
                            <thead>
                                <tr className='bg-blue-800 text-white '>
                                    <th className='py-2 px-4 h-12 border-b border-gray-300 text-left  font-medium'>
                                        VALUE
                                    </th>
                                    <th>
                                        CORE
                                    </th>
                                    <th>
                                        RAM
                                    </th>
                                    <th>
                                        STORAGE
                                    </th>
                                    <th>
                                        PRICE
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>


                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>
                                <tr>
                                    
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    

                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default VpsHostingFeatures
