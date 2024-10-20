

import CloudLinuxLogo from './CloudLinuxLogo';
import CloudFlareLogo from './CloudFlareLogo';
import CpanelwhmLogo from './CpanelwhmLogo' ;

const TrustedBySection = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-blue-800">
          BlueFox Hoster trusted by 10,000+ Websites
        </h2>
        <p className="text-gray-500 text-center mt-4">
          We use Industry leading web technologies Cpanel, Litespeed, Imunify360 to enhance the performance of our customers' websites.
        </p>
        <div className="flex justify-center items-center space-x-8 mt-8">
          <CloudLinuxLogo/>
          <CloudFlareLogo/>
          <CpanelwhmLogo/>


          
        </div>
      </div>
  )
}

export default TrustedBySection
