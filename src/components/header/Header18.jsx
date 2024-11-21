"use client";
import React from "react";
import Navigation from "./Navigation";
import MobileNavigation2 from "./MobileNavigation2";
import Image from "next/image";
import Link from "next/link";

export default function Header18() {
  return (
    <>
      <header className="header-nav nav-homepage-style at-home17 stricky main-menu border-0" style={headerStyles.header}>
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={250}
                        height={50}
                        src="/images/aks2.png"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={253}
                        height={50}
                        src="/images/aks2.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                <div className="d-flex align-items-center">
                  <Navigation />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="search-modal">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="popup-search-field search_area">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="What service are you looking for today?"
                  />
                  <label>
                    <span className="far fa-magnifying-glass"></span>
                  </label>
                  <button className="ud-btn btn-thm" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileNavigation2 />
    </>
  );
}


const headerStyles = {
  header: {
    position: "fixed", 
    top: 0,            
    left: 0,
    right: 0,
    backgroundColor: "#223543", // Dark background for navbar #223543
    color: "#007aff",           // White text for contrast
    zIndex: 9999,
    width: "100%",          
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px 0",      
    display: "block",       
    visibility: "visible",  
    overflow: "visible",    
  },
};

