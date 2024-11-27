"use client";
import React, { useState } from "react";
import Header18 from "@/components/header/Header18";
import Category from "./data/Category";
import { servicesData } from "./data/servicesData";
import Breadcumb12 from "./data/breadcumb";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Tabsection from "./data/tabsection";
import Breadcrumb from "./data/breadcumb";

import Listing9 from "@/components/section/Listing9";

const ApplicationSecurity = () => {
  // State to track hover status
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    
      <Header18 />
      <Tabsection></Tabsection>
      {/* <Category /> */}

      <Breadcumb3 path={["Home", "Services","Application Security"]} />
      <Breadcrumb />


      <div className="container">
        {/* Card container matching the grid layout */}
        <div style={styles.cardContainer}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoveredIndex === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Updated styles to match container size behavior
const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
    gap: "20px 30px", // Reduced horizontal gap to 5px
    padding: "0 20px",
    marginTop: "30px",
    justifyItems: "center", // Center the cards horizontally
    maxWidth: "100%",
    gridAutoRows: "auto",
    marginBottom: "40px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "2px solid #dcdcdc",
    padding: "25px",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    aspectRatio: "1", // Keeps cards square
    width: "95%", // Adjusts width to fit grid
  },
  cardText: {
    fontSize: "1rem",
    color: "#7f8c8d",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
    // borderColor: "#222222",
  },
  footer: {
    marginTop: "40px",
  },
};

export default ApplicationSecurity;
