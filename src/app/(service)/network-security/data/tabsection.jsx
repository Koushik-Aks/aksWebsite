"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
 
  "Network Architecture Review",
  "Vulnerability Assessment",
  "Internal Penetration Testing",
  "External Penetration Testing",
  "Secure Configuration Audit",
  "Wireless Security Assessment",
  "Log Analysis",
];

export default function tabsection() {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");
  const path = usePathname();

  const handleTabClick = (item) => {
    setCurrentTab(item);
  };

  return (
    <>
      <style jsx>{`
        .categories_list_section {
          position: relative;
        }

        .categories_list_section .listings_category_nav_list_menu ul {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
          width: 100%;
          transition: transform 0.3s ease-in-out;
        }

        .categories_list_section .listings_category_nav_list_menu ul li {
          position: relative;
          white-space: nowrap;
          padding: 5px 15px;
        }

        .categories_list_section .listings_category_nav_list_menu ul li a {
          cursor: pointer;
        }

        /* No need for dropdown logic anymore */
        .categories_list_section .listings_category_nav_list_menu ul li ul {
          display: none; /* Remove dropdown */
        }
      `}</style>

      <section
        className={`categories_list_section overflow-hidden ${path === "/home-3" ? "bgc-thm5" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu">
                <ul className="mb0 d-flex ps-0">
                  {categories.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => handleTabClick(item)}
                        className={getCurrentTab === item ? "active" : ""}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
