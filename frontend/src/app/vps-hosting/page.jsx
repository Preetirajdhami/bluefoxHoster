
"use client";
import React, { useState } from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import VpsHostingImage from '../_components/VpsHostingImage';
import VpsHostingFeature from '../_components/VpsHostingFeatures';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import VpsImage2 from '../_components/VpsImage2'
import VpsImage3 from '../_components/VpsImage3'

const VpsHosting = () => {

  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqItems = [

    {
      question: "What is VPS Hosting?",
      answer: "VPS (Virtual Private Server) hosting provides a dedicated segment of server resources, giving you more power, control, and flexibility than shared hosting. It’s ideal for websites or applications that need more performance and security."
    },
    {
      question: "Who should consider VPS hosting?",
      answer: "VPS hosting is suitable for businesses or individuals who need more power than shared hosting can offer. It’s ideal for medium to large websites, eCommerce sites, and applications requiring high uptime, enhanced security, and greater control."
    },
    {
      question: "Is it possible to run multiple websites on a VPS?",
      answer: "Yes, VPS hosting allows you to host multiple websites on a single server, as you have dedicated resources. This makes it an efficient and cost-effective solution for businesses or individuals managing multiple sites."
    },
    {
      question: "Do you offer backups for VPS hosting?",
      answer: "Yes, we offer automated backup options for our VPS hosting plans. This ensures that your data is regularly backed up, and you can easily restore it if needed. Our team can assist with backup configuration and recovery."
    },
    {
      question: "How does VPS hosting handle high traffic spikes?",
      answer: "VPS hosting provides dedicated resources, so your server can handle higher traffic without affecting other users. Additionally, with scalable options, you can increase resources to accommodate traffic spikes, ensuring smooth performance under load."
    }
  ];
  return (
    <div className=''>
      <Header />
      <div
        className='bg-custom-gradient py-14 2xl:px-56 px-8 '
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >
        <div className='w-full px-4 md:px-8 flex overflow-x-hidden flex-col md:flex-row justify-between items-center'>
          <div className='flex-1 text-white mb-4 md:mb-0'>
            <p className='mt-2 text-4xl font-semibold lg:text-5xl'>
              Stay Ahead with Reliable, Lightning-Fast VPS Hosting in Nepal
            </p>
            <h1 className='text-base mt-5 '>
              Experience the next level of performance and adaptability. Our VPS hosting in Nepal provides the speed and scalability your expanding business needs, guaranteeing an outstanding user experience, every single time.
            </h1>

            <button className='mt-7 bg-[rgba(24,95,246,1)] text-white text-xl font-normal px-9 py-3 rounded-lg hover:bg-blue-800 transition'>
              <strong>Get Started</strong>
            </button>

            <p>

            </p>

          </div>

          <div className='flex-1 hidden md:block'>

            <div className=''>
              <VpsHostingImage />


            </div>

            <p className='text-sm text-gray-400 mt-2'>
              <a href="https://storyset.com/online" target="_blank" rel="noopener noreferrer">

              </a>
            </p>
          </div>
        </div>

      </div>
      <VpsHostingFeature />
      <div
        className="px-8 2xl:px-56 "
        style={{
          background:
            "linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)",
        }}
      >
        <h1 className="text-white text-center text-5xl font-semibold py-10">
          Can't find your requirements?
        </h1>
        <div className="text-center rounded-xl pb-14 py-4 text-lg">
          <span className="border border-gray-800 px-6 font-semibold py-3 rounded-lg bg-white text-gray-800">Request Quote</span>
        </div>
      </div>


      {/* MOre Reasons to choose VPS */}
      <div className='px-8 2xl:px-56 '>
        <div className='text-center text-4xl text-gray-800 font-bold pt-14'>
          More Reasons To Choose VPS Hosting
          for your projects
        </div>
        <div>

          <h2 className="text-3xl font-bold text-center text-gray-700 mt-14 mb-1">
            Extreme Performance
          </h2>
          <p className='text-gray-600 text-center'>
            Our VPS hosting solutions in Nepal are designed to meet the most demanding requirements, delivering unparalleled performance.
          </p>

          <div className="flex flex-col md:flex-row  p-8 ">


            <div className="flex-1 flex flex-col items-start mb-6 md:mb-0 md:pr-10">


              <div className=" max-[500px]:hidden">
                <VpsImage2 />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                <a
                  href="https://storyset.com/online"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-4">
                <li className="flex border border-blue-500 p-4 rounded-lg  shadow-md items-start transition-transform duration-300 ">
                  <span className="text-blue-500 font-bold text-xl mr-2">1.</span>
                  <p className="text-gray-600 font-medium">
                    Advanced SSD Storage: We provide state-of-the-art SSD storage that guarantees fast website loading times and seamless performance, even during high-traffic periods.
                  </p>
                </li>
                <li className="flex border border-blue-500 p-4 rounded-lg bg- shadow-md items-start transition-transform duration-300 ">
                  <span className="text-blue-500 font-bold text-xl mr-2">2.</span>
                  <p className="text-gray-800 font-medium">
                    Exclusive Resources: Enjoy dedicated access to CPU, RAM, and disk space, ensuring reliable performance without the limitations of shared hosting.
                  </p>
                </li>
                <li className="flex border border-blue-500 p-4 rounded-lg  shadow-md items-start transition-transform duration-300 ">
                  <span className="text-blue-500 font-bold text-xl mr-2">3.</span>
                  <p className="text-gray-800 font-medium">
                    Enhanced Network Infrastructure: Our cutting-edge network minimizes latency and maximizes uptime, boosting your site's performance and providing a seamless experience for your visitors.
                  </p>
                </li>

              </ul>
            </div>


          </div>
        </div>



        <div>
          <h2 className="text-3xl font-bold text-center  text-gray-700">
            Intuitive Management
          </h2>
          <p className="text-gray-600 text-center ">
            Our VPS hosting offers intuitive features and tools, enabling seamless account management.
          </p>
          <div className="flex flex-col md:flex-row p-8 shadow-lg">




            <div className="flex-1 flex flex-col justify-center md:pr-10">
              <ul className="space-y-4">
                <li className="flex border border-blue-500 p-4 rounded-lg shadow-md items-start transition-transform duration-300">
                  <span className="text-blue-500 font-bold text-xl mr-2">1.</span>
                  <p className="text-gray-600 font-medium">
                    Effortless VPS Management: Our user-friendly control panel is perfect for both beginners and advanced users. It simplifies resource management, provides real-time performance monitoring, and allows easy configuration of server settings, ensuring a seamless experience for all users.
                  </p>
                </li>
                <li className="flex border border-blue-500 p-4 rounded-lg shadow-md items-start transition-transform duration-300">
                  <span className="text-blue-500 font-bold text-xl mr-2">2.</span>
                  <p className="text-gray-800 font-medium">
                    Exclusive Resources: Enjoy dedicated access to CPU, RAM, and disk space, ensuring reliable performance without the limitations of shared hosting.
                  </p>
                </li>
                <li className="flex border border-blue-500 p-4 rounded-lg shadow-md items-start transition-transform duration-300">
                  <span className="text-blue-500 font-bold text-xl mr-2">3.</span>
                  <p className="text-gray-800 font-medium">
                    Enhanced Network Infrastructure: Our cutting-edge network minimizes latency and maximizes uptime, boosting your site's performance and providing a seamless experience for your visitors.
                  </p>
                </li>
              </ul>
              <p className="text-sm text-gray-400 mt-2">
                <a
                  href="https://storyset.com/online"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                </a>
              </p>
            </div>


            <div className="hidden md:block">

              <VpsImage3 className="" />
            </div>

          </div>
        </div>

      </div>

      {/*Think Global, Host Local*/}
      <div className=''
        style={{
          background: 'linear-gradient(93.2deg, rgba(10, 40, 100, 1) 14.4%, rgba(24, 95, 246, 1) 90.8%)',
        }}
      >
        <div className='px-8 2xl:px-56'>
          <h1 className='text-white text-5xl font-bold pt-14 text-center'>Think Global, Host Local</h1>
          <p className='text-white text-base pt-6 text-center'> At Blue Fox Hoster, we believe in bringing your online presence closer to home, ensuring unparalleled speeds and reliable connections for your website.</p>

        </div>

        <div className="py-16 px-6 sm:px-8 md:px-12 2xl:px-56">
          <div className="mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3 text-left">
            {/* Nepal Server */}
            <div className="px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Nepal Server</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                With our dedicated servers in Nepal, enjoy top-notch hosting. Reliable performance and a local experience guarantee your website functions flawlessly, regardless of traffic.
              </p>
            </div>

            {/* Closest Server To You */}
            <div className="px-4 sm:px-6 md:px-12 md:border-l md:border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Closest Server To You</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Opt for the closest server to you instead of distant ones. Our data centers are strategically positioned to provide the lowest latency and highest uptime possible. Stay in touch with your audience effortlessly.
              </p>
            </div>

            {/* Server Information */}
            <div className="px-4 sm:px-6 md:border-l md:px-12 md:border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Server Information</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Check out our state-of-the-art server options that can accommodate any requirement. We provide top-notch technology and expert support for everything from security to scalability.
              </p>
            </div>
          </div>
        </div>




          {/*world map*/}
        <div className="flex items-center justify-center pb-16">
          <img
            src="/images/world-map.svg"
            alt="World Map"
            width="1110"
            height="544"
            className="text-transparent"
          />
        </div>

      </div>


      {/*FAQs*/}

      <div className="flex flex-col mb-16 md:flex-row gap-10 px-8 2xl:px-56 pt-9">

        <div className="flex-1 p-6  bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold  text-gray-700 mb-4">Have Inquiries?
            We have a best VPS hosting solution.</h2>
          <p className="text-gray-600  mb-6">
            Confused about which hosting package best suits your needs? Look no further! Blue Fox Hoster offers tailored solutions designed to enhance your online presence, going beyond just hosting. Whether you're a startup or an established business, our team of experts is here to guide you every step of the way.
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



      <Footer />

    </div>
  )
}

export default VpsHosting
