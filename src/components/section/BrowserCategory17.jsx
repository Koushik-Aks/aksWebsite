"use client";
import { browserCategory } from "@/data/project";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrowserCategory17() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Divide the categories into two rows
    const upperRow = browserCategory.slice(0, 5);
    const lowerRow = browserCategory.slice(5, 10);
    setCategories([upperRow, lowerRow]);
  }, []);

  return (
    <section className="pt1">
      <div className="container">
        <div className="row align-items-center wow fadeInUp">
          <div className="col-lg-9">
            
              <div className="main-title text-center">
                <h2 className="title" style={{ marginLeft: "370px" }}>
                Sectors We Serve in
                </h2>
            </div>
          </div>
        </div>
        
        {/* Upper Row */}
        <div className="row">
          {categories[0]?.map((elm, i) => (
            <div className="col-md-2 col-sm-4 mb-4" key={i} style={{ marginRight: i < 4 ? '50px' : '0' }}>
              <div className="item">
                <div className="iconbox-style1 at-home17-v2 bdr1 bdrs12">
                  <div className="icon">
                    {/* Icon rendered dynamically from elm.icon */}
                    <span className={elm.icon}></span>
                  </div>
                  <div className="details mt20">
                    <p className="text mb5">{elm.skill}</p>
                    <h5 className="title">
                      <Link href="/service-1">{elm.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lower Row */}
        <div className="row">
          {categories[1]?.map((elm, i) => (
            <div className="col-md-2 col-sm-4 mb-4" key={i} style={{ marginRight: i < 4 ? '50px' : '0' }}>
              <div className="item">
                <div className="iconbox-style1 at-home17-v2 bdr1 bdrs12">
                  <div className="icon">
                    {/* Icon rendered dynamically from elm.icon */}
                    <span className={elm.icon}></span>
                  </div>
                  <div className="details mt20">
                    <p className="text mb5">{elm.skill}</p>
                    <h5 className="title">
                      <Link href="/service-1">{elm.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
