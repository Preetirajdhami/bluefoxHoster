import React from "react";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Collaborate from "../_components/Collaborate";
import Onboarding from "../_components/Onboarding";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const about = () => {
  const features = [
    {
      icon: <BiSupport className="text-4xl text-yellow-500" />,
      title: "24/7 Support",
      description:
        "Get round-the-clock assistance with our 24/7 support. Our team is always available to help you with any hosting issues, ensuring your website runs smoothly at all times.",
    },
    {
      icon: <MdOutlinePayment className="text-4xl text-green-500" />,
      title: "Local Payment Options",
      description:
        "Enjoy the convenience of local payment options tailored to your needs, making it easier and faster to pay for your hosting services with familiar methods.",
    },
    {
      icon: <GiReceiveMoney className="text-4xl" />,
      title: "Money Back Guarantee",
      description:
        "Experience peace of mind with our Money-Back Guarantee. If you're not satisfied within the first 30 days, we'll refund your payment—no questions asked.",
    },
  ];
  return (
    <div>
      <Header />
      <div
        className="flex flex-col items-center justify-center text-white bg-custom-gradient py-8 2xl:px-56 px-8"
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <h1 className="text-5xl py-5 font-bold text-center mb-2">
          Empowering Your Online Presence, Globally Driven by{" "}
          <span className="text-orange-500">Innovation</span>
        </h1>
        <p className="text-center mb-6 text-xl">
          Blue Fox Hoster is a leading web hosting company in Nepal, recognized
          for offering high-performance hosting solutions. We focus on providing
          secure, scalable, and cutting-edge hosting services tailored to
          elevate your online presence and cater to your unique requirements.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-8 space-y-8 md:space-y-0 2xl:px-56">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
          <h2 className="text-4xl font-medium text-gray-800">
            Choose Blue Fox Hoster as Your Trusted Hosting Partner
          </h2>
          <p className="text-lg text-gray-700">
            Blue Fox Hoster is your ideal hosting partner, offering superior
            performance, security, and customer service. With our robust
            infrastructure and proactive monitoring, we guarantee minimal
            downtime and exceptional website performance, perfectly aligned with
            your business objectives.
          </p>
          <p className="text-lg text-gray-700">
            Enhance your online presence with a reliable hosting partner. With
            our advanced technology and dedicated support team, we ensure your
            website performs flawlessly. Choose Blue Fox Hoster today and watch
            your business thrive.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Contact Us
          </a>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
          <div className=" md:block max-[500px]:hidden">
            <Collaborate />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-8 space-y-8 md:space-y-0 2xl:px-56">
        <div className="w-full md:w-1/2 order-1 md:order-1 flex justify-center items-center">
          <div className="max-[500px]:hidden">
            <Onboarding />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-2">
          <h2 className="text-4xl font-medium text-gray-800">
            Seamless Onboarding with Blue Fox Hosting
          </h2>
          <p className="text-lg text-gray-700">
            When you join Verpex as a customer, you become part of our family.
            Our team will help you get your websites up and running quickly and
            easily. Whether you’re starting with WordPress or any other platform
            we support, we'll guide you through the entire process.
          </p>
          <p className="text-lg text-gray-700">
            We also offer free site migration from your previous hosting
            provider. Simply provide us with your current hosting details, and
            we'll move your data for you. We ensure a smooth migration with no
            downtime.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment doesn’t stop there. We’ll monitor your site’s
            performance and suggest improvements to help ensure your website
            runs at its best, consistently.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center text-white bg-custom-gradient py-8 2xl:px-56 px-8"
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <h1 className="text-4xl py-3 font-bold text-center mb-2">
          We are 100% privately-owned company
        </h1>
        <p className="text-left mb-4 text-base">
          At Blue Fox Hoster, we take pride in being a 100% privately-owned
          company. This independence allows us to make decisions that are solely
          focused on the needs of our clients without external influence. Unlike
          publicly traded companies that are accountable to shareholders, we are
          free to prioritize long-term growth and the satisfaction of our
          customers.
        </p>
        <p className="text-left mb-4 text-base">
          Our privately-owned structure empowers us to innovate and invest in
          cutting-edge technology, ensuring that our services remain ahead of
          the curve. We are committed to providing personalized, responsive
          support, as every decision we make is driven by our passion for
          delivering exceptional hosting experiences. This autonomy guarantees
          that our clients' success is our top priority, with no compromises.
        </p>
      </div>

      <div class="my-10  px-8 2xl:px-56 md:mx-0 text-center">
        <h1 className="text-4xl font-medium text-center text-gray-800 mb-4">
          Our Support and Commitment
        </h1>
        <p classN="text-lg text-center text-gray-700 md:max-w-2xl mx-auto">
          Blue Fox Hoster is the fastest-growing web hosting company in Nepal.
          Our focus is on providing what truly makes hosting exceptional:
          dependable servers, user-friendly systems, and outstanding customer
          support. We avoid complicated jargon for simple tasks and won’t
          pressure you into buying unnecessary add-ons. When you need assistance
          with your hosting package, we’ll be here to help — no hassle, no fuss.
          Our goal is to be the hosting company you can always rely on.
        </p>
      </div>

      <div class="flex flex-col mb-16 md:flex-row justify-center md:items-stretch md:space-x-6 space-y-6 md:space-y-0 my-8 mx-4 md:mx-0 items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            class="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs flex flex-col justify-between text-center border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <div class="flex justify-center mb-4">
              <span class="text-4xl text-blue-500">{feature.icon}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p class="text-gray-500 flex-grow">{feature.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default about;
