"use client";
import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
            question: "Where is Web Hosting",
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

            <div className="flex flex-col mb-16 md:flex-row gap-10 pt-9">

                <div className="flex-1 p-6  bg-gray-100 rounded-lg shadow-lg">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-700 mb-4">Have Inquiries?
                    We have a best hosting solution.</h2>
                    <p className="text-gray-600  mb-6">
                    Our hosting solutions are tailored to accommodate the unique requirements of every website, delivering exceptional speed, consistent reliability, and effortless scalability.
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
        </div>


    );
};

export default WebhostingDetailedPricing;
