import React from 'react';
import { FaCloud, FaLock, FaServer } from 'react-icons/fa';

const HostingFeatures = () => {
  const features = [
    {
      icon: <FaCloud className="text-4xl" />,
      title: 'Fast Cloud Platform',
      description:
        'Try our SSD-based hosting packages for exceptional performance – no more delays waiting for your website to load.',
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: 'SSL Certificate',
      description:
        'SSL Certificates are available at no cost for all your domains, both now and in the future, with complimentary automatic renewals.',
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: 'Hosting Reliability',
      description:
        'Our enterprise-level cloud hosting has been optimized by us to achieve significantly higher IOPS, making it ideal for demanding applications and websites.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-6 space-y-6 md:space-y-0 my-8 mx-4 md:mx-0">

      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs flex flex-col justify-between text-center"
        >
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-500 flex-grow">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HostingFeatures;
