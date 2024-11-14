import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const BusinessEmailPricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [currency, setCurrency] = useState("NPR");

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
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
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
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
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
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
        ],

        annually: [
            {
                title: "Starter",
                price: 25000, 
                features: [
                    "Email API, SMTP relay, webhooks",
                    "Tracking and Analytics",
                    "Webmail",
                    "Mobile Sync",
                    "Auto-responders",
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
            {
                title: "Premium",
                price: 45000, 
                features: [
                    "Email API, SMTP relay, webhooks",
                    "Tracking and Analytics",
                    "Webmail",
                    "Mobile Sync",
                    "Auto-responders",
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
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
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
        ],

        biennially: [
            {
                title: "Starter",
                price: 50000, 
                features: [
                    "Email API, SMTP relay, webhooks",
                    "Tracking and Analytics",
                    "Webmail",
                    "Mobile Sync",
                    "Auto-responders",
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
            {
                title: "Premium",
                price: 90000, 
                features: [
                    "Email API, SMTP relay, webhooks",
                    "Tracking and Analytics",
                    "Webmail",
                    "Mobile Sync",
                    "Auto-responders",
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
            {
                title: "Enterprise",
                price: 150000, 
                features: [
                    "Email API, SMTP relay, webhooks",
                    "Tracking and Analytics",
                    "Webmail",
                    "Mobile Sync",
                    "Auto-responders",
                    "Advanced Calendar & more",
                ],
                advanced_feature: [
                    "POP & IMAP Access",
                    "TLS Support",
                    "Last Login IP",
                    "Antivirus Check",
                    "Advanced Anti-Spam",
                ],
                label: "Order Now",
            },
        ],
    };


    const updatePrice = (cycle) => setBillingCycle(cycle);

    return (
        <div>
            <div className="py-14 px-8 2xl:px-56">
                <h2
                    className="text-5xl font-medium text-gray-800 text-center"
                    style={{ color: "#0073b3" }}
                >
                    Choose a plan that suits your business
                </h2>

                {/* Billing and Currency Section */}
                <div className="flex justify-between items-center mt-8">
                   
                    <div
                        className="flex items-center mb-6 rounded-lg"
                        style={{
                            background:
                                "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 0%, rgba(24, 95, 246, 1) 80%)",
                        }}
                    >
                        <div className="flex space-x-4 py-3 px-3">
                            <button
                                onClick={() => updatePrice("monthly")}
                                className={`px-3 py-2 rounded-md ${billingCycle === "monthly" ? "bg-white text-black" : "text-white"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => updatePrice("annually")}
                                className={`px-3 py-2 rounded-md ${billingCycle === "annually" ? "bg-white text-black" : "text-white"
                                    }`}
                            >
                                Annually
                            </button>
                            <button
                                onClick={() => updatePrice("biennially")}
                                className={`px-3 py-2 rounded-md ${billingCycle === "biennially" ? "bg-white text-black" : "text-white"
                                    }`}
                            >
                                Biennially
                            </button>
                        </div>
                    </div>

                    {/* Currency Selector */}
                    <div className="flex items-center">
                        <label className="mr-3 text-gray-700 font-medium">Currency:</label>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
                        >
                            <option value="NPR">NPR</option>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
                    {(pricingPlans[billingCycle] || []).map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-102"
                        >
                            <h3 className="text-2xl font-semibold text-center mb-4">
                                {plan.title}
                            </h3>
                            <p className="text-xl font-bold text-center text-blue-600 mb-4">{`₨ ${plan.price}`}</p>

                            <div className="text-center mb-6">
                                <h4 className="text-lg font-medium text-gray-800 mb-2">
                                    Features:
                                </h4>
                                <ul className="list-none space-y-2 text-left pl-4">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-gray-700"
                                        >
                                            <IoMdCheckmarkCircleOutline className="text-green-500 text-xl mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center mb-6">
                                <h4 className="text-lg font-medium text-gray-800 mb-2">
                                    Advanced Features:
                                </h4>
                                <ul className="list-none space-y-2 text-left pl-4">
                                    {plan.advanced_feature.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-gray-700"
                                        >
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
        </div>
    );
};

export default BusinessEmailPricing;
