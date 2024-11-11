"use client"
import React, { useState, useMemo } from 'react';
import Header from '../_components/Header2';
import { FcGoogle } from "react-icons/fc";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReactFlagsSelect from "react-flags-select";
import TopBar from '../_components/Topbar2';


const Register = () => {
    const [phone, setPhone] = useState('');
    const [selected, setSelected] = useState("");

    return (
        <div>
            <TopBar />
            <Header />
            <div className='bg-gray-200 py-16'
            style={{
                background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
              }}>
                <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>

                    <p className="text-gray-600 mb-4 text-center">Use social account (optional)</p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-blue-50">
                            <div className="mr-2">
                                <FcGoogle className='text-2xl' />
                            </div>
                            Sign in with Google
                        </button>
                    </div>

                    <div className="flex items-center justify-center my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <p className="mx-4 text-gray-600">or fill the form below</p>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <h3 className="text-2xl font-base mb-4">Personal Information</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name *</label>
                                <input type="text" id="firstName" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name *</label>
                                <input type="text" id="lastName" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-2">Email Address *</label>
                                <input type="email" id="email" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number *</label>
                                <PhoneInput
                                    country={'us'}
                                    value={phone}
                                    onChange={setPhone}
                                    inputClass="p-3 py-6 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl font-medium mb-4">Billing Address</h3>
                        <div>
                            <label htmlFor="company" className="block text-gray-600 mb-2">Company Name (Optional)</label>
                            <input type="text" id="company" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="vatNumber" className="block text-gray-600 mb-2">VAT Number (Optional)</label>
                            <input type="text" id="vatNumber" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="streetAddress" className="block text-gray-600 mb-2">Street Address *</label>
                            <input type="text" id="streetAddress" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="streetAddress2" className="block text-gray-600 mb-2">Street Address 2 (Optional)</label>
                            <input type="text" id="streetAddress2" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="city" className="block text-gray-600 mb-2">City *</label>
                                <input type="text" id="city" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-gray-600 mb-2">State</label>
                                <input type="text" id="state" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="country" className="block text-gray-600 mb-2">Country *</label>
                                <ReactFlagsSelect
                                    selected={selected}
                                    onSelect={(code) => setSelected(code)}
                                />;

                            </div>
                            <div>
                                <label htmlFor="postcode" className="block text-gray-600 mb-2">Postcode *</label>
                                <input type="text" id="postcode" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-medium mb-4">Additional Information</h3>
                        <div>
                            <label htmlFor="currency" className="block text-gray-600 mb-2">Choose Currency *</label>
                            <select id="currency" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option value="NPR">NPR</option>
                                <option value="NPR">USD</option>
                                <option value="NPR">INR</option>
                            </select>
                        </div>

                        <h3 className="text-2xl font-medium mb-4">Account Security</h3>
                        <div>
                            <label htmlFor="password" className="block text-gray-600 mb-2">Password *</label>
                            <input type="password" id="password" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">Confirm Password *</label>
                            <input type="password" id="confirmPassword" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>

                        <div className="flex items-center mt-6">
                            <input type="checkbox" id="terms" className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded" required />
                            <label htmlFor="terms" className="ml-2 text-gray-600">I have read and agree to the Terms of Service *</label>
                        </div>

                        <button type="submit" className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                            Register
                        </button>

                        <p className="text-center text-gray-600 mt-4">
                            Already have an account? <a href="" className="text-blue-600">Log In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
