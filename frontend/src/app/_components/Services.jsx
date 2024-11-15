import React from 'react';
import { MdBackup } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { FaHdd } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";

const Services = () => {
    return (
        <div className="py-16 px-8 mb-5"
        style={{
            background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
          }}
        >
            <h2 className="text-3xl text-center xl:text-5xl  text-white font-bold mb-8">Why Choose Our Service?</h2>
            <p className="text-center xl:text-xl text-white mb-12">We offer the best features to elevate your experience.</p>
            <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <IoCheckmarkDoneCircle className="text-4xl text-blue-500" />
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 "  style={{ color: '#1555db' }}>99.9% Uptime Guarantee</h3>
                    <p>We do what we say. Free month if we fail.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaHdd className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1555db' }}>Unlimited SSD & Bandwidth</h3>
                    <p>No limit on storage or bandwidth, focus on your website.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <TbMoneybag className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1555db' }}>Money Back Guarantee</h3>
                    <p>Try our plans risk-free with a 30-day money-back guarantee.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <MdOutlineSupportAgent  className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1555db' }}>24/7 Support</h3>
                    <p>Our team is available to assist you anytime, anywhere.</p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <MdBackup className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1555db' }}>Daily Backups</h3>
                    <p>Your data is safe with our daily backup feature.</p>
                </div>

                {/* Card 6 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-2 bg-blue-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaGlobeAsia className="text-blue-500 text-2xl" />
                        </div>
                        <div className="flex items-center justify-center p-2 bg-blue-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <BsArrowLeftRight className="text-blue-500 text-2xl" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1555db' }}>Easy Migration</h3>
                    <p>Seamlessly migrate your website to our platform.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
