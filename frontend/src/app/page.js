import Image from "next/image";
import Header from "./_components/Header";
import TopBar from "./_components/Topbar";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import TrustedBySection from "./_components/TrustedBySection";
import HostingPlansCard from "./_components/HostingPlansCard";
import HostingFeature from "./_components/HostingFeature";
import RegisterDomain from "./_components/RegisterDomain"; 
import Services from './_components/Services';
import TrustedClients from './_components/OurTrustedClients' ;

export default function Home() {
  return (
   <div className="w-full ">
    <TopBar/>
    <Header/>
    
    <Hero/>
    <TrustedBySection/>
    <RegisterDomain/>
    
    <HostingPlansCard/>
    <Services />
    <HostingFeature />
    <TrustedClients />
    <Footer/>

   </div>
  );
}
