"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Importing the DataFooter structure
import { DataFooter } from "@/data/DataFooter";

export default function UpperFooter() {
  const path = usePathname();

  return (
    <section className="footer-style1 pt25 pb-0">
      <div className="container">
        <div className="row d-flex justify-content-between"> {/* Added justify-content-between to evenly space sections */}
          {DataFooter.map((section, index) => (
            <div key={index} className="col-sm-6 col-lg-2 mb-1"> {/* Changed to col-sm-6 and col-lg-2 for responsive and equal spacing */}
              <div className="link-style1">
                {/* Section Title */}
                <h5
                  className={`mb15 ${
                    path !== "/home-4" ? "text-white" : "text-dark"
                  }`}
                >
                  {section.title}
                </h5>
                {/* Section Links */}
                <ul className="ps-0">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer styles */}
      <style jsx>{`
        .footer-style1 {
          background-color: #222222; /* Footer background color */
        }

        .text-white {
          color: #ffffff !important; /* Text color for titles and content */
        }

        .footer-link {
          color: #dcdcdc;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .link-style1 ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .link-style1 li {
          margin-bottom: 0.5rem;
        }

        .copyright-text {
          font-size: 0.875rem;
        }

        .white-bdrt1 {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
