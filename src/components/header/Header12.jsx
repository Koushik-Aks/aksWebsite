"use client";

import React from "react";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";
import Image from "next/image";
import Link from "next/link";

export default function Header12() {
  return (
    <>
      <header className="header-nav nav-innerpage-style main-menu fixed-header">
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              {/* Logo on the left */}
              <div className="col-auto px-0 order-1">
                <div className="logos">
                  <Link className="header-logo logo2" href="/home-11">
                    <Image
                      width={230}
                      height={50}
                      src="/images/aks.png"
                      alt="Header Logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Optional actions (Mobile navigation) */}
              <div className="col-auto px-0 order-2">
                <MobileNavigation6 />
              </div>

              {/* Navigation on the far right with more spacing */}
              <div className="col-auto px-0 order-3" style={{ marginLeft: 'auto', paddingRight: '60px' }}>
                <Navigation id="respMenu" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style jsx global>{`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000; /* Ensure the header stays above other content */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
          background-color: #ffffff; /* Solid white background */
          transition: background-color 0.3s ease; /* Smooth transition when the header becomes sticky */
        }

        /* Optional effect to change background on scroll */
        .fixed-header.scrolled {
          background-color: #333333; /* Change to any color you want when scrolling */
        }

        body {
          padding-top: 100px; /* Adjust this value to prevent content from hiding behind the header */
        }
      `}</style>
    </>
  );
}
