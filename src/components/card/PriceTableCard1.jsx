"use client";
import { usePathname } from "next/navigation";

export default function PriceTableCard1({ data }) {
  const path = usePathname();

  return (
    <>
      <div
        className={`pricing_packages text-center bdrs16 ${
          path === "/home-10" ? "overflow-hidden" : "at-home2"
        }`}
        style={{
          border: "1px solid #ccc", // Visible border with a light gray color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for better visibility
          height: "100%",  // Ensures equal height for all cards
        }}
      >
        <a
          className={`ud-btn ${path === "/home-10" ? "btn-dark-border" : "btn-light-thm"}`}
        >
          {data?.heading} {/* Custom heading */}
        </a>
        <div className="heading mb10">
          <h4 className="package_title mt-2">{data?.plan}</h4> {/* Display custom plan name */}
        </div>
        <div className="details">
          <p className="text mb30">
            {data?.description} {/* Custom description */}
          </p>
        </div>
      </div>
    </>
  );
}
