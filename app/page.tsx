import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="w-full h-auto px-30 py-4">
    <Navbar/>
    <HeroSection/>
    <Services/>

   </div>
   
   
   </>
  );
}
