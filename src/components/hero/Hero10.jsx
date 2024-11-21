"use client";
import { useEffect, useState } from "react";

const herobg = [
  {
    id: 1,
    bg: "/images/background/3.png",
    headline: (
      <>
        <span
          className="hero-title"
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            fontFamily: "'Arial', sans-serif",
            color: "gray",
          }}
        >
          AKS IT SERVICES
        </span>
        <br className="d-none d-lg-block" />
      </>
    ),
    brief: (
      <span style={{ fontSize: "1.5rem", color: "gray" }}>
        AUDITING | CONSULTING | COMPLIANCE | FORENSICS | TRAINING
      </span>
    ),
  },
];

export default function Hero10() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section className="hero-home10 p-0 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-banner-wrapper home10-hero-content">
              {showContent && (
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${herobg[0].bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    position: "relative",
                  }}
                >
                  <div
                    className="container text-left"
                    style={{
                      position: "absolute",
                      top: "300px",
                      left: "150px",
                    }}
                  >
                    <div className="row">
                      <div className="col-xl-7">
                        <h3 className="banner-title">{herobg[0].headline}</h3>
                        <div
                          style={{
                            position: "relative",
                            left: "-80px", // Adjust to move this text only to the left
                          }}
                        >
                          <p className="banner-text text-white ff-heading mb30">
                            {herobg[0].brief}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
