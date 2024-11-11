import React from "react";
import ContactImage from "../_components/ContactImage";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-custom-gradient py-14 2xl:px-56 px-8"
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <div className="w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center ">
          <div className="flex-1 text-white mb-4 md:mb-0">
            <h1 className="mt-2 text-4xl font-semibold lg:text-5xl">
              We’re Here for You, 24/7
            </h1>
            <h2 className="mt-2 text-2xl font-semibold lg:text-5xl">
              Support Whenever You Need It
            </h2>
            <p className="text-base mt-5">
              At Blue Fox Hoster, our support team is available 24/7 to help you
              with any questions or issues. Whether you need technical guidance,
              help setting up your hosting, or troubleshooting, our dedicated
              team is always just a click or call away.
            </p>

            <button className="mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition">
              <strong>Let's Chat</strong>
            </button>
          </div>

          <div className="flex-1">
            <div className="hidden md:block">
              <ContactImage />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-medium mb-6 text-gray-800 max-[700px]:text-[30px]">
            Communication is Everything
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Have questions or need assistance? Reach out to us via the contact
            form below, or use the details to connect with us directly.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Email Us */}
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full">
                <HiOutlineMailOpen className="text-2xl" />
              </div>
              <p className="text-xl font-semibold text-gray-900 mt-3">
                Email Us
              </p>
              <p className="text-gray-600 mt-2">info@bluefoxhoster.com</p>
            </div>

            {/* Call Us */}
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full">
                <MdCall className="text-2xl" />
              </div>
              <p className="text-xl font-semibold text-gray-900 mt-3">
                Call Us
              </p>
              <p className="text-gray-600 mt-2">9802755602 / 9817303073</p>
            </div>

            {/* Our Location */}
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full">
                <FaLocationDot className="text-2xl" />
              </div>
              <p className="text-xl font-semibold text-gray-900 mt-3">
                Our Location
              </p>
              <p className="text-gray-600 mt-2">Itahari-6, Sunsari, Nepal</p>
            </div>
          </div>

          <div className="mt-12 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center rounded-lg space-y-8 md:space-y-0">
              {/* Left Side: Get in Touch */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="text-center px-4">
                  <h3 className="text-3xl font-bold text-gray-800 ">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600">
                    We would love to hear from you! Please fill out the form on
                    the right to send us a message, and we'll get back to you as
                    soon as possible.
                  </p>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="w-full md:w-1/2">
                <form className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700" htmlFor="message">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-800 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
