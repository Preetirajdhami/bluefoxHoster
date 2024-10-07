import Image from "next/image";
import Header from "./_components/header";
import TopBar from "./_components/Topbar";
import Hero from "./_components/Hero";
import Footer from "./_components/footer";
import TrustedBySection from "./_components/TrustedBySection";
import HostingPlansCard from "./_components/HostingPlansCard";
import HostingFeature from "./_components/HostingFeature";
import RegisterDomain from "./_components/RegisterDomain";

export default function Home() {
  return (
   <div className="w-full ">
    <TopBar/>
    <Header/>
    
    <Hero/>
    <TrustedBySection/>
    <RegisterDomain/>
    
    <HostingPlansCard/>
    <HostingFeature />
    <Footer/>

   </div>
  );
}
