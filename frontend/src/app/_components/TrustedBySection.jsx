

import CloudLinuxLogo from './CloudLinuxLogo';
import CloudFlareLogo from './CloudFlareLogo';
import CpanelwhmLogo from './CpanelwhmLogo';

const TrustedBySection = () => {
  return (
    <div className="bg-gray-100 pb-16 pt-10 px-8">
      <h2
        className="text-3xl  md:text-5xl  font-semibold  text-center"
        style={{ color: '#1249bb' }}
      >
        Blue Fox Hoster trusted by 10,000+ Websites
      </h2>

      <p className="text-gray-500 text-center mt-4">
        We use Industry leading web technologies Cpanel, Litespeed, Imunify360 to enhance the performance of our customers' websites.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-8 mt-8">
        <CloudLinuxLogo />
        <CloudFlareLogo />
        <CpanelwhmLogo />



      </div>
    </div>
  )
}

export default TrustedBySection
