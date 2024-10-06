"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1b076e] text-white py-8">
            <div className="w-full px-8  ">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                    {/* Company Section */}
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul>
                            {['About Us', 'Legal', 'Careers', 'Sponsorship', 'Contact Us', 'Blogs'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul>
                            {['Customer Login', 'Raise a ticket', 'Server Status', 'Knowledge Base', 'Live chat'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hosting Section */}
                    <div>
                        <h4 className="font-bold mb-4">Hosting</h4>
                        <ul>
                            {['Web Hosting', 'WordPress Hosting', 'VPS Hosting', 'Email Hosting', 'Nodejs Hosting', 'Python Hosting', 'Ecommerce Hosting', 'Cloud Reseller'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account Section */}
                    <div>
                        <h4 className="font-bold mb-4">Account</h4>
                        <ul>
                            {['My Products', 'Create Account', 'Renewals & Billing', 'Manage Domains', 'Partner Program', 'SLA'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul>
                            {['Buy a Domain', 'Transfer Domain Names', 'Place New Order', 'SSL Certificates', 'Google Workspace'].map((item) => (
                                <li key={item} className="mb-2">
                                    <a href="#" className="hover:underline">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

               

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-2 md:mb-0">
                        BlueFox Pvt Ltd Company Registration No. 350502, Registered Office: Sunsari, Nepal
                    </p>
                    <div className="flex space-x-4">
                        {['Cookies Policies', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                            <a key={item} href="#" className="hover:underline">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
