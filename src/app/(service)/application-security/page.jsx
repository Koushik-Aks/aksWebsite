// /pages/ApplicationSecurity.js

import React from "react";
import Header18 from "@/components/header/Header18";
import Category from "./data/Category";
import { servicesData } from "./data/servicesData";

const ApplicationSecurity = () => {
  return (
    <>
      <Header18 />
      <Category />
      {/* <Category/> */}
      <h1 style={styles.heading}>Application Security Services</h1>
      <p style={styles.description}>
        Ensure your organization's digital assets are protected with our
        comprehensive auditing services. We specialize in app security, web
        security, and network security, identifying vulnerabilities and providing
        actionable insights to fortify your defenses against cyber threats. Trust
        us to enhance your security posture and safeguard your critical
        information.
      </p>

      <div style={styles.cardContainer}>
        {servicesData.map((service, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "700",
    textAlign: "center",  // Center the heading
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#7f8c8d",
    fontWeight: "400",
    textAlign: "center",  // Center the description
    maxWidth: "800px",   // Limit the width for better readability
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "30px",
    padding: "0 20px",
    marginTop: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    padding: "25px",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #f2f2f2",  // Lighter border
    cursor: "pointer",
    overflow: "hidden",  // Prevent overflow of elements
  },
  cardTitle: {
    fontSize: "1.8rem",  // Slightly larger font size for better prominence
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "600",
    textTransform: "uppercase",  // Make the title look more prominent
    letterSpacing: "1px",  // Slight spacing between letters
  },
  cardText: {
    fontSize: "1rem",
    color: "#7f8c8d",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  cardHover: {
    transform: "scale(1.05)",  // Slightly scale up the card on hover
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",  // Enhance shadow on hover
  },
};

export default ApplicationSecurity;
