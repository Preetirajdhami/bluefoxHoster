import Image from "next/image";
import Header from "./_components/header";
import TopBar from "./_components/Topbar";
import Hero from "./_components/Hero";
import Footer from "./_components/footer";

import HostingPlansCard from "./_components/HostingPlansCard";

export default function Home() {
  return (
   <div className="w-full ">
    <TopBar/>
    <Header/>
    
    <Hero/>
    <HostingPlansCard/>
    <Footer/>

   </div>
  );
}
