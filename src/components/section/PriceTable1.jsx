"use client";
import PriceTableCard1 from "../card/PriceTableCard1";
import { usePathname } from "next/navigation";

export default function PriceTable1() {
  const path = usePathname();

  // Define separate headings and descriptions for each card
  const cardsData = [
    {
      heading: "Auditing",
    
      description: "We provide comprehensive auditing services to assess and enhance your cybersecurity measures.",
    
    },
    {
      heading: "Compliance",
      description: "Ensure regulatory compliance with our tailored compliance assessment and consulting services.",
     
    },
    {
      heading: "Forensics",
      description: "Our forensics experts help in gathering and analyzing digital evidence for investigations and legal proceedings.",
     
    },
    {
      heading: "Training",
      description: "Equip your team with essential cybersecurity skills through our specialized training programs.s",
      
    },
  ];

  return (
    <>
      <section
        className={`our-pricing ${
          path === "/home-2" ? "pb90" : path === "/about-1" ? "pt0 pb0" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto wow fadeInUp">
              <div className="main-title text-center mb30">
                <h2 className="title">Comprehensive Cyber Security and Forensics</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {cardsData.map((item, i) => (
              <div key={i} className="col-sm-6 col-xl-3">
                <PriceTableCard1 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
