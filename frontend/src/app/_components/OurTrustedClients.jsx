'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const TrustedClients = () => {
  const clients = [
    {
      href: 'https://example1.com',
      src: 'https://via.placeholder.com/150?text=Client+1',
      alt: 'Client 1',
    },
    {
      href: 'https://example2.com',
      src: 'https://via.placeholder.com/150?text=Client+2',
      alt: 'Client 2',
    },
    {
      href: 'https://example3.com',
      src: 'https://via.placeholder.com/150?text=Client+3',
      alt: 'Client 3',
    },
    {
      href: 'https://example4.com',
      src: 'https://via.placeholder.com/150?text=Client+4',
      alt: 'Client 4',
    },
    {
      href: 'https://example5.com',
      src: 'https://via.placeholder.com/150?text=Client+5',
      alt: 'Client 5',
    },
    {
      href: 'https://example6.com',
      src: 'https://via.placeholder.com/150?text=Client+6',
      alt: 'Client 6',
    },
  ];

  return (
    <div className="px-8 2xl:px-56">
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-2xl font-bold mb-6">Our Trusted Clients</h2>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={5} // Number of items to show at once
          spaceBetween={20} // Spacing between slides
          breakpoints={{
            320: { slidesPerView: 1 }, // For small screens
            768: { slidesPerView: 2 }, // For medium screens
            1024: { slidesPerView: 4 }, // For large screens
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <a href={client.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-full h-auto rounded-md shadow-md"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClients;
