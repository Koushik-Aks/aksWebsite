import React from 'react';
import Header18 from '@/components/header/Header18';



const ApplicationSecurity = () => {
  return (
    <div style={styles.pageContainer}>
      <Header18/>
      <h1 style={styles.heading}>Application Security Services</h1>
      <p style={styles.description}>
      Ensure your organization's digital assets are protected with our comprehensive auditing services. We specialize in app security, web security, and network security, identifying vulnerabilities and providing actionable insights to fortify your defenses against cyber threats. Trust us to enhance your security posture and safeguard your critical information.
      </p>

      <div style={styles.cardContainer}>

        {/* Web Application Security Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Web Application Security Testing</h2>
          <p style={styles.cardText}>
            Our Web Application Security Audit service identifies, assesses, and mitigates vulnerabilities in your web application. We conduct Vulnerability Assessment, Penetration Testing, Compliance Verification, Data Encryption, Secure Authentication Review, Detailed Reporting, and Recommendations to safeguard your web assets against unauthorized access, data breaches, and attacks.
          </p>
        </div>

        {/* Mobile Application Security Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Mobile Application Security Testing (Android/IOS)</h2>
          <p style={styles.cardText}>
            Our Mobile Application Security Audit service identifies, assesses, and secures vulnerabilities unique to mobile apps. We safeguard your data and user privacy across both iOS and Android platforms.
          </p>
        </div>

        {/* API Security Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>APIs (REST/SOAP)</h2>
          <p style={styles.cardText}>
            We conduct API security audits to identify and mitigate critical vulnerabilities like Broken Authentication, Mass Assignment, and Improper Asset Management in both REST and SOAP APIs.
          </p>
        </div>

        {/* Source Code Analysis */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Source Code Analysis</h2>
          <p style={styles.cardText}>
            We perform comprehensive source code analysis across languages such as Java, PHP, .NET, Kotlin, and TypeScript, identifying vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), Insecure Cryptography, Hardcoded Secrets, and more.
          </p>
        </div>

        {/* Thick Client Security Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Thick Client Security Testing</h2>
          <p style={styles.cardText}>
            We identify vulnerabilities in standalone applications by analyzing business logic, client-server interactions, Reverse Engineering, and system configurations to ensure comprehensive security.
          </p>
        </div>

        {/* GIGW Compliance Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>GIGW Compliance Testing</h2>
          <p style={styles.cardText}>
            We ensure your website adheres to the Guidelines for Indian Government Websites (GIGW), covering areas like Quality, Lifecycle Management, Accessibility, and Cybersecurity.
          </p>
        </div>

        {/* AUA/KUA/AKA/KSA Compliance Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>AUA/KUA/AKA/KSA Compliance Testing</h2>
          <p style={styles.cardText}>
            We ensure your applications meet the requirements for Aadhaar-based authentication and KYC services, enabling secure and authorized access to government and financial services.
          </p>
        </div>

        {/* ASP/ESP (E-sign) Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>ASP/ESP (E-sign) Compliance Testing</h2>
          <p style={styles.cardText}>
            We test cloud-based or online applications to ensure they meet industry security standards, and validate electronic signature solutions for secure and authenticated digital transactions.
          </p>
        </div>

        {/* VSCC (Form C) Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>VSCC (Form C) Testing</h2>
          <p style={styles.cardText}>
            We provide testing for VSCC (Vendor Site Client Certificate)/Form C to ensure secure digital signatures and payment systems for integration with the SBI Payment Gateway.
          </p>
        </div>

        {/* Functional Testing */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Functional Testing</h2>
          <p style={styles.cardText}>
            We ensure that your application meets all specified requirements, aligned with key milestones, ensuring comprehensive validation and compliance.
          </p>
        </div>

        {/* Performance Testing (Load/Stress) */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Performance Testing (Load/Stress)</h2>
          <p style={styles.cardText}>
            We perform Load and Stress Testing to evaluate your application's ability to handle traffic and extreme conditions, ensuring optimal performance and scalability.
          </p>
        </div>

      </div>
    </div>
  );
};

// Enhanced CSS in JS
const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    marginTop: '80px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#2c3e50',
    fontWeight: '700',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#7f8c8d',
    fontWeight: '400',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#2c3e50',
    fontWeight: '600',
  },
  cardText: {
    fontSize: '1rem',
    color: '#7f8c8d',
    lineHeight: '1.6',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

export default ApplicationSecurity;
