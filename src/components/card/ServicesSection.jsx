"use client";
import { useState } from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for hover effect

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.servicesSection}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          Comprehensive Cyber Security and Forensics
        </h2>
        <div style={styles.servicesContainer}>
          {/* Auditing Box */}
          <div
            style={isTouched || isHovered ? { ...styles.serviceBox, ...styles.touchedBox, ...styles.hoveredBox } : styles.serviceBox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter} // Mouse enter for hover
            onMouseLeave={handleMouseLeave} // Mouse leave for hover
          >
            <p style={styles.serviceTitle}>Auditing</p>
            <p>We provide comprehensive auditing services to assess and enhance your cybersecurity measures.</p>
            <div style={styles.overlay}></div>
            <Link
              href="/auditing"
              style={styles.learnMore}
              aria-label="Learn more about Auditing services"
            >
              Learn More
            </Link>
          </div>

          {/* Compliance Box */}
          <div
            style={isTouched || isHovered ? { ...styles.serviceBox, ...styles.touchedBox, ...styles.hoveredBox } : styles.serviceBox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.serviceTitle}>Compliance</p>
            <div style={styles.overlay}></div>
            <Link
              href="/all-compliance"
              style={styles.learnMore}
              aria-label="Learn more about Compliance services"
            >
              Learn More
            </Link>
          </div>

          {/* Forensics Box */}
          <div
            style={isTouched || isHovered ? { ...styles.serviceBox, ...styles.touchedBox, ...styles.hoveredBox } : styles.serviceBox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.serviceTitle}>Forensics</p>
            <div style={styles.overlay}></div>
            <Link
              href="/all-forensics"
              style={styles.learnMore}
              aria-label="Learn more about Forensics services"
            >
              Learn More
            </Link>
          </div>

          {/* Training Box */}
          <div
            style={isTouched || isHovered ? { ...styles.serviceBox, ...styles.touchedBox, ...styles.hoveredBox } : styles.serviceBox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p style={styles.serviceTitle}>Training</p>
            <div style={styles.overlay}></div>
            <Link
              href="/training"
              style={styles.learnMore}
              aria-label="Learn more about Training services"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  servicesSection: {
    backgroundColor: 'transparent',
    marginTop: '6rem',
    padding: '2rem 0',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  servicesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem', // Space between the boxes
    flexWrap: 'wrap',
  },
  serviceBox: {
    position: 'relative',
    width: '16rem', // Increased size
    height: '16rem', // Increased size
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '1rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', // Smooth transitions
  },
  touchedBox: {
    backgroundColor: '#d4edda', // Light green background when touched
    boxShadow: '0 8px 16px rgba(0, 255, 0, 0.2)', // Stronger green shadow
  },
  hoveredBox: {
    transform: 'scale(1.05)', // Slight zoom effect on hover
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', // Increased shadow on hover
  },
  serviceTitle: {
    zIndex: 10,
    fontSize: '1.75rem', // Larger font size
    fontWeight: '500',
    color: 'black',
    textAlign: 'center', // Ensure text is centered
    marginBottom: '1rem', // Add spacing between text and link
  },
  overlay: {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 120%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
  },
  learnMore: {
    position: 'absolute',
    zIndex: 20,
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#0073e6',
    textDecoration: 'none',
    bottom: '1rem', // Position the link at the bottom of the box
  },
};

export default ServicesSection;
