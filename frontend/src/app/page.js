import Image from "next/image";
import Header from "./_components/header";
import TopBar from "./_components/Topbar";
import Hero from "./_components/Hero";
import Footer from "./_components/footer";
import Header2 from "./_components/Header2";

export default function Home() {
  return (
   <div className="w-full bg-[#615EFF]">
    <TopBar/>
    <Header/>
    <Header2/>
    <Hero/>
    <Footer/>

   </div>
  );
}
