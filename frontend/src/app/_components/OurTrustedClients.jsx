import Image from "next/image";

export default function TrustedClients() {
  const logos = [
    { src: "/images/itaharimedical.png", alt: "Itahari Medical" },
    { src: "/images/aceone.png", alt: "Ace One" },
    { src: "/images/logo_blue.png", alt: "Logo Blue" },
    { src: "/images/nva-logo.png", alt: "NVA Logo" },
    { src: "/images/tripary.png", alt: "Tripary" },
    { src: "/images/itaharimedical.png", alt: "Itahari Medical Duplicate" },
    { src: "/images/aceone.png", alt: "Ace One Duplicate" },
    { src: "/images/logo_blue.png", alt: "Logo Blue Duplicate" },
  ];

  return (
    <div className="px-8 pt-8 2xl:px-56">
      <div>
        <h1 className="text-4xl 2xl:text-5xl text-gray-700 font-bold text-center pb-6">
          Our Trusted Clients
        </h1>
      </div>

      <div className="inline-flex w-full border-y  flex-nowrap overflow-hidden ">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {logos.map((logo, index) => (
            <li
              key={index}
              className=" flex-shrink-0 bg-white "
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} 
                height={120} 
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </li>
          ))}
        </ul>

         {/* Duplicate Logo List for Seamless Loop */}
          <ul
            className="flex  animate-infinite-scroll items-center justify-center   md:justify-start [&_img]:max-w-none [&_li]:mx-8"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120} 
                  height={120}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </li>
            ))}
          </ul>


      </div>
    </div>
  );
}
