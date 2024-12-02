"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
  { name: "Web Application Security Testing", link: "/application-security/web-application-security-testing" },
  { name: "Mobile Application Security Testing", link: "/application-security/mobile-application-security-testing" },
  { name: "Performance Testing (Load/Stress)", link: "/performance-testing" },
  { name: "Thick Client Security Testing", link: "/thick-client-security-testing" },
  { name: "GIGW Compliance Testing", link: "/gigw-compliance-testing" },
  { name: "AUA/KUA/AKA/KSA Compliance Testing", link: "/aua-kua-aka-ksa-compliance-testing" },
  { name: "ASP/ESP (E-sign) Compliance Testing", link: "/asp-esp-compliance-testing" },
  { name: "VSCC (Form C) Testing", link: "/vscc-testing" },
  { name: "Functional Testing", link: "/functional-testing" },
  { name: "APIs (REST/SOAP)", link: "/api-testing" },
  { name: "Source Code Analysis", link: "/source-code-analysis" },
];

export default function TabSection() {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");
  const path = usePathname();

  const handleTabClick = (item) => {
    setCurrentTab(item.name);
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

        .categories_list_section .listings_category_nav_list_menu ul li .active {
          color: #007bff;
          font-weight: bold;
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
                      <Link 
                        href={item.link} 
                        onClick={() => handleTabClick(item)} 
                        className={getCurrentTab === item.name ? "active" : ""}
                      >
                        {item.name}
                      </Link>
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
