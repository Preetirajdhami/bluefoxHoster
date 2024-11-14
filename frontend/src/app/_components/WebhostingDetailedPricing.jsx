"use client";
import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaJoomla } from "react-icons/fa";
import { DiDrupal } from "react-icons/di";
import { FaLaravel } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import WebHostingImage3 from './WebHostingImage3';

const WebhostingDetailedPricing = () => {
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
            question: "What is Web Hosting",
            answer: "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet "
        },
        {
            question: "How do i choose the best web hosting plan ? ",
            answer: "To choose the best web hosting plan, assess your website's needs, such as traffic, resources, and budget. Shared hosting is affordable for small sites, while VPS or dedicated hosting suits larger sites with higher traffic. Cloud hosting offers flexibility and scalability. Consider support, uptime guarantees, and essential features like security and backups. Compare pricing and renewal rates to find the best value for your needs."
        },
        {
            question: "Can I upgrade my hosting plan as my website grows?",
            answer: "Absolutely! As your website grows and its needs change, we offer flexible hosting plans that can be easily upgraded. Whether you need more storage, bandwidth, or control over your server, we provide seamless transitions from shared hosting to VPS or dedicated servers. Our team is here to assist you with the upgrade process, ensuring minimal downtime and a smooth experience. "
        },
        {
            question: "How do you ensure website security and data protection?",
            answer: "We prioritize your website’s security with SSL certificates, firewalls, regular malware scans, and automated backups. Our servers are monitored 24/7, and we use encryption protocols to protect your data. We continually update our systems to safeguard against emerging threats and ensure your website remains secure."
        },
        {
            question: "What level of customer support can I expect from your hosting service?",
            answer: "Our hosting service offers 24/7 customer support through multiple channels, including live chat, email, and phone. Our knowledgeable support team is ready to assist with any technical issues, setup questions, or concerns you may have, ensuring that your website runs smoothly at all times. We aim to provide prompt and effective solutions, no matter the complexity of your request."
        }
    ];


    const plans = [
        {
            planName: 'Alpha Cloud',
            feature: 'Lightning fast NVMe powered web hosting backed by 24/7 support',
            monthlyPrice: 10,
            annualPrice: 100,
            biennialPrice: 180,
        },
        {
            planName: 'Beta Cloud',
            feature: 'Lightning fast SSD powered web hosting backed by 24/7 support',
            monthlyPrice: 20,
            annualPrice: 200,
            biennialPrice: 360,
        },
        {
            planName: 'Enterprise',
            feature: 'Lightning fast NVMe powered web hosting backed by 24/7 support',
            monthlyPrice: 50,
            annualPrice: 500,
            biennialPrice: 900,
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
        <div >
            <div id="pricing-section" className='bg-gray-100 py-20 px-8 2xl:px-56'>
                <div className="flex flex-col items-center justify-center mb-12">
                    <h1 className="text-4xl font-semibold text-gray-700 mb-4">Choose the Web Hosting Plan for You</h1>
                    <h2 className="text-xl text-gray-700 mb-8">Our web hosting plans are perfectly curated, offering unbeatable features at an incredible price.</h2>

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
                    <div className="flex flex-col sm:flex-row sticky top-0 z-10 bg-white rounded-lg justify-between gap-5 mb-10">
                        {/*  Chat with us section */}
                        <div className="sm:w-1/4 p-5">
                            <h2 className="text-lg font-semibold mb-5 text-gray-600 mt-5" >Have any questions? </h2>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                                <div className="col-span-2 sm:col-span-1 p-4" style={{ color: '#0073b3' }}>
                                    <button className="text-lg font-medium border-2  px-9 py-4 rounded-md border-blue-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2">
                                        <IoChatboxEllipsesOutline className="text-white text-xl  " style={{ color: '#0073b3' }} />
                                        Chat with us
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* Pricing cards */}
                        <div className="sm:w-3/4 sm:flex-row flex flex-col gap-5">
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


                </div>

                {/* Detail pricing table */}
                <div className="overflow-x-auto">
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
            </div>

            {/*  Optimized for WordPress & more */}

            <div className='flex flex-col  px-8 2xl:px-56 '
                style={{
                    background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
                }}
            >
                <div>
                    <h1 className="text-5xl text-center mt-14 font-bold text-white mb-4">
                        Optimized for WordPress & more
                    </h1>
                    <p className='text-center text-white'>
                        Explore our range of hosting plans in Nepal, including affordable options for WordPress, Joomla, Drupal, Laravel, and OpenCart, all at unbeatable prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pb-16 gap-8 mt-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-md">
                        <div className="text-5xl mb-4 rounded-full bg-gray-200">
                            <FaWordpress className=' m-2' style={{ color: '#1248b9' }} />
                        </div>
                        <h3 className="text-xl font-medium">WordPress</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-md">
                        <div className="text-5xl mb-4 rounded-full bg-gray-200">
                            <FaJoomla className=' m-2' style={{ color: '#1248b9' }} />
                        </div>
                        <h3 className="text-xl font-medium">Joomla</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-md">
                        <div className="text-5xl mb-4 rounded-full bg-gray-200">
                            <DiDrupal className=' m-2' style={{ color: '#1248b9' }} />
                        </div>
                        <h3 className="text-xl font-medium">Drupal</h3>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-md">
                        <div className="text-5xl mb-4 rounded-full bg-gray-200">
                            <FaLaravel className=' m-2' style={{ color: '#1248b9' }} />
                        </div>
                        <h3 className="text-xl font-medium">Laravel</h3>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col items-center bg-gray-100 py-12 rounded-lg shadow-md">
                        <div className="text-5xl mb-4 rounded-full bg-gray-200">
                            <FaOpencart className=' m-2' style={{ color: '#1248b9' }} />
                        </div>
                        <h3 className="text-xl font-medium">OpenCart</h3>
                    </div>
                </div>
            </div>

            <div className='px-8 2xl:px-56'>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 my-14">

                    <div className="sm:w-1/2 text-left">
                        <h2 className="text-2xl text-gray-700 font-semibold hover:text-[#407bff] mb-3">WHM & cPanel</h2>
                        <p className="text-base mb-4">
                            Blue Fox Hoster ensures your cPanel is backed up daily, safeguarding your data even in unforeseen circumstances. Opt for Blue FoxHoster’s cPanel shared hosting and enjoy a seamless experience with CloudLinux, Softaculous, and other premium features designed for reliability and performance.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-700 hover:text-[#407bff] mb-4">Choice of location</h2>
                        <p className="text-base mb-4">
                            Choosing the ideal location for your web hosting provider is key to maximizing performance and delivering an exceptional user experience. At Blue FoxHoster, we offer strategically placed data centers worldwide to ensure optimal speed and reliability for your website.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4 hover:text-[#407bff] text-gray-700">Unlimited Migrations</h2>
                        <p className="text-base mb-9">
                            Seamlessly move your websites to Blue FoxHoster without any hassle. Our dedicated team handles the entire migration process, including email transfers, at no extra charge. Enjoy unlimited, fast, and stress-free migrations for all websites hosted on our shared hosting plans, no matter their current location.
                        </p>

                        <a
                            href=""
                            className="px-14 py-4 bg-blue-600 text-xl text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                        >
                            Get Started
                        </a>

                    </div>


                    <div className="sm:w-1/2 flex items-center justify-center ">
                        <div className="w-full h-full bg-slate-50 hidden md:block ">
                            <WebHostingImage3 />
                        </div>
                    </div>
                </div>



            </div>







            {/*  FAQ*/}

            <div className="flex flex-col mb-16 md:flex-row gap-10 pt-9 px-8 2xl:px-56">

                <div className="flex-1 p-6  bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-700 mb-4">Have Inquiries?
                        We have a best hosting solution.</h2>
                    <p className="text-gray-600  mb-6">
                        Our hosting solutions are tailored to accommodate the unique requirements of every website, delivering exceptional speed, consistent reliability, and effortless scalability.
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

export default WebhostingDetailedPricing;
