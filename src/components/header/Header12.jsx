"use client";

import React from "react";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";
import Image from "next/image";
import Link from "next/link";

export default function Header12() {
  return (
    <>
      <header className="header-nav nav-innerpage-style bg-transparent main-menu">
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              {/* Logo on the left */}
              <div className="col-auto px-0 order-1">
                <div className="logos">
                  <Link className="header-logo logo2" href="/">
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
    </>
  );
}
