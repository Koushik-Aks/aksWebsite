"use client";
import Image from "next/image";

const staticPartners = [
  "/images/partners/certin.png",
  "/images/partners/stqc.png",
  "/images/partners/cca.png",
  "/images/partners/NHA.png",
];

const StaticPartnerSection = () => {
  return (
    <div className="static-partner-section">
      <h1 className="section-heading">Empanelled By</h1>
      <div className="logo-container">
        {staticPartners.map((partner, index) => (
          <div key={index} className="logo-item">
            <div className="logo">
              <Image
                src={partner} // Ensure partner is a valid path string
                alt={`Partner ${index}`}
                width={200}  // Width is flexible based on your logo size
                height={100}  // Height is flexible based on your logo size
                layout="intrinsic" // Ensures the image uses its original aspect ratio
                unoptimized={true} // Prevents Next.js from compressing the image
                className="logo-image"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .static-partner-section {
          text-align: center;
          margin-top: 120px; /* Add top margin to move the section lower */
          margin-bottom: 20px;
        }
        .section-heading {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 32px;
          color: #333;
        }
        .logo-container {
          display: flex;
          justify-content: center;
          gap: 100px;
        }
        .logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 220px; /* Set max width for logos */
          max-height: 120px; /* Set max height for logos */
        }
        .logo {
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .logo-image {
          object-fit: contain;  /* Ensure aspect ratio is maintained */
          max-width: 100%; /* Ensure logo fits within container without stretching */
          max-height: 100%; /* Ensure logo fits within container without stretching */
        }
      `}</style>
    </div>
  );
};

export default StaticPartnerSection;
