"use client";
import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiArrowArcRightLight } from "react-icons/pi";

const WordpressDetailedPricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const updatePrice = (cycle) => {
        setBillingCycle(cycle);
    };

    const [openQuestion, setOpenQuestion] = useState(null);
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqItems = [

        {
            question: "What is WordPress Hosting?",
            answer: "WordPress hosting is a specialized hosting service designed for WordPress websites. It includes features optimized for WordPress performance, such as automatic updates, enhanced security, and seamless integration with the WordPress platform. "
        },
        {
            question: "How do I choose the best WordPress hosting plan? ",
            answer: "When selecting a WordPress hosting plan, consider your website's needs such as traffic, performance, security, and budget. Key features to look for include automatic WordPress updates, daily backups, security measures like firewalls and SSL certificates, and scalability for future growth. Make sure the hosting plan fits your site's size and provides enough resources for performance​"
        },

        {
            question: "How do you ensure website security and data protection?",
            answer: " WordPress hosting services typically provide enhanced security features such as SSL certificates, firewalls, malware scanning, and DDoS protection. Regular updates and backups also ensure that your site remains secure, even in the face of emerging threats"
        },
        {
            question: "What level of customer support can I expect from your hosting service?",
            answer: " Quality WordPress hosting services offer 24/7 customer support via multiple channels like live chat, email, and phone. Support is available to assist with troubleshooting, site management, and any technical issues you may encount"
        }
    ];


    const plans = [
        {
            planName: '2GB cPanel Hosting + .com Free Domain',
            feature: 'Lightning fast NVMe powered web hosting backed by 24/7 support',
            monthlyPrice: 600,
            annualPrice: 5000,
            biennialPrice: 80000,
        },
        {
            planName: 'Wp Standard',
            feature: 'Lightning fast NVMe powered web hosting backed by 24/7 support',
            monthlyPrice: 1000,
            annualPrice: 10000,
            biennialPrice: 18000,
        },
        {
            planName: 'Wp Ultimate',
            feature: 'Lightning fast NVMe powered web hosting backed by 24/7 support',
            monthlyPrice: 2000,
            annualPrice: 20000,
            biennialPrice: 35000,
        }
    ];

    const PricingCard = ({ planName, feature, monthlyPrice, annualPrice, biennialPrice, selectedCycle }) => {
        const price = selectedCycle === 'monthly' ? monthlyPrice : selectedCycle === 'annually' ? annualPrice : biennialPrice;
        const cycleText = selectedCycle === 'monthly' ? '/ month' : selectedCycle === 'annually' ? '/ year' : '/ 2 years';

        return (
            <div className=" p-6  w-full ">
                <h2 className="text-xl font-semibold text-gray-700 mb-4" style={{ color: '#0073b3' }}>{planName}</h2>
                <div className="text-2xl font-bold  mb-1" style={{ color: '#0073b3' }}>Rs {price}</div>
                <p className="text-lg mb-2">{cycleText}</p>
                <p className="mb-6 text-gray-700 ">{feature}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Select Plan
                </button>
            </div>
        );
    };

    return (
        <div id="pricing-section" className='bg-gray-100 py-20 '>
            <div className="flex px-8 2xl:px-56 flex-col items-center justify-center mb-12">
                <h1 className="text-5xl font-semibold text-gray-700 mb-4">Detailed Pricing and Features</h1>
                <h2 className="text-xl md:text-center text-gray-700 mb-8">Get a clear understanding of our pricing details and the robust range of features included, designed to empower you with flexible hosting solutions.</h2>

                <div className="flex items-center mb-6 rounded-lg"
                    style={{
                        background: "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 0%, rgba(24, 95, 246, 1) 80%)"
                    }}
                >
                    <div className="flex space-x-4 py-3 px-3">
                        <button
                            onClick={() => updatePrice('monthly')}
                            className={`px-3 py-2 rounded-md ${billingCycle === 'monthly' ? 'bg-white text-black' : ' text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => updatePrice('annually')}
                            className={`px-3 py-2 rounded-md ${billingCycle === 'annually' ? 'bg-white text-black' : ' text-white'}`}
                        >
                            Annually
                        </button>
                        <button
                            onClick={() => updatePrice('biennially')}
                            className={`px-3 py-2 rounded-md ${billingCycle === 'biennially' ? 'bg-white text-black' : ' text-white'}`}
                        >
                            Biennially
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-white rounded-lg justify-center gap-5 mb-10">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            planName={plan.planName}
                            feature={plan.feature}
                            monthlyPrice={plan.monthlyPrice}
                            annualPrice={plan.annualPrice}
                            biennialPrice={plan.biennialPrice}
                            selectedCycle={billingCycle}
                        />
                    ))}
                </div>
            </div>

            <div className=" px-8 2xl:px-56 overflow-x-auto">
                <table className="w-full bg-white text-gray-700 shadow-md border-t border-b rounded-lg text-left overflow-hidden">
                    <thead>
                        <tr className="border-t border-b"
                            style={{
                                background:
                                    "#e2f4fe"

                            }}>
                            <th className="p-4 text-lg font-semibold">Web Hosting Overview</th>
                            <th className="p-4 text-lg font-semibold">Alpha Cloud</th>
                            <th className="p-4 text-lg font-semibold">Beta Cloud</th>
                            <th className="p-4 text-lg font-semibold">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-t border-b'>
                            <td className="p-3">Websites</td>
                            <td className="p-3">1 Website</td>
                            <td className="p-3">10 Websites</td>
                            <td className="p-3">Unlimited Websites</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">SSD Storage</td>
                            <td className="p-3">10GB</td>
                            <td className="p-3">25GB</td>
                            <td className="p-3">Unlimited</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Bandwidth</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Free 256-bit SSL certificates</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Mailboxes</td>
                            <td className="p-3">10 Accounts</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Uptime guarantee</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Sub-domains</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                        </tr>
                        <tr className='border-t border-b' style={{
                            background:
                                "#e2f4fe"

                        }} >
                            <td className='p-3 font-semibold text-lg' >Software</td>
                            <td className='p-3' ></td>
                            <td className='p-3' ></td>
                            <td className='p-3' ></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Cpanel</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Latest PHP</td>
                            <td className="p-3">Upto 8.4</td>
                            <td className="p-3">Upto 8.4</td>
                            <td className="p-3">Upto 8.4</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Mailboxes</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Unlimited</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">phpMyAdmin</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Database</td>
                            <td className="p-3">MySQL / MariaDB</td>
                            <td className="p-3">MySQL / MariaDB</td>
                            <td className="p-3">MySQL / MariaDB</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Free 1-click installs</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Free 1-click installs</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b' style={{
                            background:
                                "#e2f4fe"

                        }}>
                            <td className="p-3 text-lg font-semibold" >Security</td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Firewall</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">DDoS protection</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Malware Scanner</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Cloudlinux OS Isolation / Caging</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Backups</td>
                            <td className="p-3">Daily</td>
                            <td className="p-3">Daily</td>
                            <td className="p-3">Daily</td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Two-Factor Authentication</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b' style={{
                            background:
                                "#e2f4fe"

                        }}>
                            <td className="p-3 text-lg font-semibold ">Developer Features</td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">SSH / Terminal</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">FTP / SFTP</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Git</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">File Manager</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Process/Error Logs</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">POP / IMAP /SMTP</td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                            <td className="p-3"><IoMdCheckmarkCircleOutline className='text-green-500 text-xl' /></td>
                        </tr>
                        <tr className='border-t border-b' style={{
                            background:
                                "#e2f4fe"

                        }}>
                            <td className="p-3 text-lg font-semibold">Plan Specification</td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>
                            <td className="p-3"></td>


                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">LVE (CPU)</td>
                            <td className="p-3">2 vCPU</td>
                            <td className="p-3">2 vCPU</td>
                            <td className="p-3">2 vCPU</td>

                        </tr>
                        <tr className='border-t border-b'>
                            <td className="p-3">Physical Memory</td>
                            <td className="p-3">2GB RAM</td>
                            <td className="p-3">2GB RAM</td>
                            <td className="p-3">4GB RAM</td>

                        </tr>







                    </tbody>
                </table>
            </div>

            {/*Migrate Your Hosting for free*/}
            <div className=''
                style={{
                    background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
                }}>



                <div className="py-16 px-6 sm:px-8 md:px-12 2xl:px-56">

                    <div>
                        <p className='text-base text-white   md:px-24 '>6+ Years with excellent Service</p>
                        <h1 className='md:text-5xl text-4xl font-bold pt-4  md:px-24 text-white'>Migrate Your Hosting For Free</h1>
                    </div>
                    <div className="mx-auto text-white pt-4 md:px-24 sm:p-12 grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3 text-left">

                        <div className="md:px-5 sm:px-2 ">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">State-of-the-art Servers</h3>
                            <p className="text-sm sm:text-base text-white leading-relaxed">
                                Enterprise-grade servers for ultimate performance
                            </p>
                        </div>


                        <div className=" md:px-5 sm:px-2 md:border-l md:border-gray-200">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">60-day Money-back</h3>
                            <p className="text-sm sm:text-base text-white leading-relaxed">
                                We offer 60 days Money-back guarantee on migration services
                            </p>
                        </div>


                        <div className=" md:border-l sm:px-2 md:px-5 md:border-gray-200">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Seamless Migration</h3>
                            <p className="text-sm sm:text-base text-white leading-relaxed">
                                Experience a hassle-free transition from your previous provider.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
  
                 {/*Dedicated 24/7 customer service*/}
            <div className='px-8 2xl:px-56 pt-10'>
                <div className="bg-slate-50 px-6 py-16 rounded-lg shadow-sm  flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 border border-blue-100">
                   
                    <div className="md:flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 ">Dedicated 24/7 customer service</h2>
                        <p className="text-gray-600 mt-4 ">
                            At Blue Fox Hoster, we pride ourselves on offering 24/7 customer support to ensure you receive assistance whenever you need it. Our knowledgeable team is committed to providing swift resolutions and maintaining high standards of service reliability.
                        </p>
                    </div>

                   
                    <div className="md:flex-1 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        {/* Chat Box */}
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="flex flex-col ">
                                <div className="text-blue-600 text-3xl mb-2">
                                    
                                    <IoChatbubbleEllipsesOutline />
                                </div>
                                <h3 className="text-gray-700 font-semibold text-left text-lg">Live Chat</h3>
                                <p className="text-sm text-gray-600">24/7 through the chat widget</p>
                            </div>
                        </div>

                        {/* Phone Box */}
                        <div className="relative bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 text-center">
                            <div className="flex items-center justify-center">
                                <div className="text-blue-600 text-3xl mr-2">
                                <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="text-gray-600 font-semibold text-lg">+977-9817303073</h3>
                                </div>
                            </div>
                            {/* Arrow */}
                            <div className="absolute -top-10 hidden md:block -left-8 md:-left-12">
                            <PiArrowArcRightLight className='text-6xl text-blue-500'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col px-8 2xl:px-56 mb-16 md:flex-row gap-10 pt-9">

                <div className="flex-1 p-6  bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-700 mb-4">Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600  mb-6">
                        Our WordPress hosting solutions are crafted to provide exceptional performance, top-tier security, and seamless scalability, ensuring your WordPress site operates at its best, no matter how much traffic you experience.
                    </p>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
                    >
                        Contact Now
                    </a>

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


        </div>


    );
};

export default WordpressDetailedPricing;
