
import Header12 from "@/components/header/Header12";
import Hero11 from "@/components/hero/Hero11";
import BrowserCategory11 from "@/components/section/BrowserCategory11";
import CtaBanner11 from "@/components/section/CtaBanner11";
import InspiringService11 from "@/components/section/InspiringService11";
import OurFunFact11 from "@/components/section/OurFunFact11";
import OurPartner1 from "@/components/section/OurPartner1";
import PopulerService11 from "@/components/section/PopulerService11";
import Talent11 from "@/components/section/Talent11";
import Testimonials11 from "@/components/section/Testimonials11";
import React from "react";

import TrendingService2 from "@/components/section/TrendingService2";
import BrowserCategory17 from "@/components/section/BrowserCategory17";
import UpperFooter from "@/components/footer/UpperFooter";
import PriceTable1 from "@/components/section/PriceTable1";

export const metadata = {
  title: "AKS IT SERVICES",
};

export default function page() {
  return (
    <>
    
      <Header12 />
      <Hero11 />
      {/* <Empanelleds/> */}
      <PriceTable1/>
      <OurFunFact11 />
      <OurPartner1 />
      <TrendingService2 />
      {/* <PopulerService11 /> */}
      <BrowserCategory17 />
      {/* <BrowserCategory11 /> */}
      <CtaBanner11 />
      <Testimonials11 />
      
      <Talent11 />
      <InspiringService11 />
      <UpperFooter/>
    </>
  );
}
