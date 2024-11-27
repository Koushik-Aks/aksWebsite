"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
  "All Categories",
  "Web Application Security Testing",
  "Mobile Application Security Testing ",
  "APIs (REST/SOAP) ",
  "Source Code Analysis",
  "Thick Client Security Testing",
  "GIGW Compliance Testing",
  "AUA/KUA/AKA/KSA Compliance Testing",
  "ASP/ESP (E-sign) Compliance Testing",
  "VSCC (Form C) Testing",
  "Performance Testing (Load/Stress)",
  "Functional Testing",
];

export default function TabSection1() {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown
  const path = usePathname();

  const handleTabClick = (item) => {
    setCurrentTab(item);
    // Only toggle dropdown when "All Categories" is clicked
    if (item === "All Categories") {
      setIsDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility when "All Categories" is clicked
    }
    // Don't close the dropdown when other categories are clicked
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
          padding: 10px 20px;
        }

        .categories_list_section .listings_category_nav_list_menu ul li a {
          cursor: pointer;
        }

        .categories_list_section .listings_category_nav_list_menu ul li ul {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          background-color: white;
          border: 1px solid #ccc;
          list-style-type: none;
          padding: 10px;
        }

        .categories_list_section .listings_category_nav_list_menu ul li:hover ul {
          display: block;
        }

        .categories_list_section .listings_category_nav_list_menu ul li ul li {
          padding: 5px 0;
        }

        /* Initially, display only 6 categories */
        .categories_list_section .listings_category_nav_list_menu ul li:nth-child(n+7) {
          display: ${isDropdownOpen ? "block" : "none"};
        }

        /* Show dropdown when it's open */
        .categories_list_section .listings_category_nav_list_menu ul li.all-categories-dropdown {
          display: ${isDropdownOpen ? "block" : "none"};
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
                  {/* First 6 categories */}
                  {categories.slice(0, 6).map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => handleTabClick(item)}
                        className={getCurrentTab === item ? "active" : ""}
                      >
                        {item}
                      </a>
                    </li>
                  ))}

                  {/* Categories after "All Categories" */}
                  {categories.slice(6).map((item, index) => (
                    <li
                      key={index + 6}
                      className={item === "All Categories" ? "all-categories-dropdown" : ""}
                    >
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
