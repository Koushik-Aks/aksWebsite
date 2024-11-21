import { partners } from "@/data/partners";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero11() {
  return (
    <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              {/* <span className="d-inline-block tag animate-up-1 mb15">
                Get Started
              </span> */}
              <h2 className="title animate-up-2">
                AKS IT SERVICES
              </h2>
              <p className="text animate-up-3">
                AUDITING   |   CONSULTING  |   COMPLIANCE  |   FORENSICS  |   TRAINING
                {/* the most <br className="d-none d-xl-block" /> out of your time
                and cost */}
              </p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
              <Link href="/contact" className="ud-btn btn-thm4 me-3 bdrs12">
                Contact Us
              </Link>
              {/* <Link
                href="/freelancer-1"
                className="ud-btn btn-white bdr1 bdrs12"
              >
                Find Talent
              </Link> */}
            </div>
            <p className="text fz15 me-2 mb-0 mt60 mt30-md animate-up-4">
              {/* Empanelled By */}
            </p><h3 className="title animate-up-2">
              Empanelled By
            </h3>
            {/* <div className="mt20 animate-up-4">
              {partners.map((elm, i) => (
                <li
                  key={i}
                  className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"
                >
                  <Image
                    height={70}
                    width={95}
                    src={elm}
                    className="h-100 w-100 object-fit-contain"
                    alt="image"
                  />
                </li>
              ))}
            </div> */}
            <div className="mt20 animate-up-4">
              <ul className="list-unstyled d-flex flex-wrap">
                {partners.map((elm, i) => (
                  <li
                    key={i}
                    className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"
                    style={{ maxWidth: "100px", height: "auto", display: "flex", justifyContent: "center" }}
                  >
                    <div className="image-container" style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                      <Image
                        src={elm}
                        alt={`Partner ${i}`}
                        layout="intrinsic" // This will ensure that the image maintains its aspect ratio
                        height={100}
                        width={100}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              <Image
                width={478}
                height={600}
                style={{ height: "fit-content" }}
                className="bdrs20"
                src="/images/about/about-13.jpg"
                alt=" image "
              />
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                <span className="icon flaticon-badge"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Proof of quality</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <div className="iconbox-small2 text-start d-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                <span className="icon flaticon-security"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Safe and secure</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
