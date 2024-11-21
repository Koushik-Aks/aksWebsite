
import Header18 from "@/components/header/Header18";
import Hero17 from "@/components/hero/Hero17";
import BrowserCategory17 from "@/components/section/BrowserCategory17";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner17 from "@/components/section/CtaBanner17";
import CtaBanner18 from "@/components/section/CtaBanner18";
import CtaBanner19 from "@/components/section/CtaBanner19";
import HighestRated17 from "@/components/section/HighestRated17";
import InspiringService11 from "@/components/section/InspiringService11";
import OurPartner1 from "@/components/section/OurPartner1";
import TrendingService2 from "@/components/section/TrendingService2";
import ServicesSection from "@/components/card/ServicesSection";
import React from "react";
import PriceTableCard1 from "@/components/card/PriceTableCard1";
import PriceTable1 from "@/components/section/PriceTable1";
import Footer from "@/components/footer/Footer";
import FooterHeader from "@/components/footer/FooterHeader";

import Empanelleds from "@/components/section/Empanelleds";
import UpperFooter from "@/components/footer/UpperFooter";



export const metadata = {
  title: "AKS IT SERVICES",
};

export default function page() {
  return (
    <>
    
      <Header18 />
      <div className="body_content">
        <Hero17 />
        
        <Empanelleds/>
        {/* <CounterInfo1 notBorder={true} /> */}
        
        <PriceTable1/>
        
        <CounterInfo1 notBorder={true} />
        <OurPartner1 />
        <TrendingService2 />
       
        <BrowserCategory17 />
        <CtaBanner17 />
        <CtaBanner18 />
        <HighestRated17 />
       <CtaBanner19 />
        <InspiringService11 />
    {/* <UpperFooter/> */}
      </div>

    </>
  );
}
