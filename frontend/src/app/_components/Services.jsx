import React from 'react';
import { FcSupport } from "react-icons/fc";
import { MdBackup } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { FaHdd } from "react-icons/fa";



const Services = () => {
    return (
        <div className="bg-gray-100 py-16 px-8">
            <h2 className="text-3xl text-center font-bold mb-8">Why Choose Our Service?</h2>
            <p className="text-center mb-12">We offer the best features to elevate your experience.</p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                       
                        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm2.5 11H7.5V10h5.5v3zm-5.5-4V8h5.5V7H7.5V6h1V4h1v3h1v1h-1v1h-1z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">99.9% Uptime Guarantee</h3>
                    <p>We do what we say. Free month if we fail.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FaHdd className="text-4xl text-blue-500" />

                    </div>

                    <h3 className="text-lg font-semibold mb-2">Unlimited SSD & Bandwidth</h3>
                    <p>No limit on storage or bandwidth, focus on your website.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <TbMoneybag className="text-4xl text-yellow-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Money Back Guarantee</h3>
                    <p>Try our plans risk-free with a 30-day money-back guarantee.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FcSupport className="text-4xl text-blue-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p>Our team is available to assist you anytime, anywhere.</p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <MdBackup className="text-4xl text-green-500" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Daily Backups</h3>
                    <p>Your data is safe with our daily backup feature.</p>
                </div>

                {/* Card 6 */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <div className="flex items-center justify-center mb-4 ">
                        <div className="flex items-center justify-center p-2 bg-blue-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaGlobeAsia className="text-blue-500 text-2xl" />
                        </div>
                        <div className="flex items-center justify-center p-2 bg-blue-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <BsArrowLeftRight className="text-blue-500 text-2xl" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Easy Migration</h3>
                    <p>Seamlessly migrate your website to our platform.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
