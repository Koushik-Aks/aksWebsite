"use client";
import Link from "next/link";
import FooterHeader from "./FooterHeader";
import { usePathname } from "next/navigation";
import FooterSelect2 from "./FooterSelect2";
import { about, category, Company, partners, support } from "@/data/footer";

export default function Footer() {
  const path = usePathname();

  return (
    <>
      <section
        className={`footer-style1 pt25 pb-0 
                ${
                  path === "/home-2"
                    ? "at-home6 home2-footer-radius"
                    : path === "/home-4"
                    ? "at-home7"
                    : path === "/home-6"
                    ? "at-home6"
                    : path === "/home-10"
                    ? "at-home10"
                    : path === "/home-11"
                    ? "at-home11"
                    : ""
                }
                 `}
      >
        <div className="container">
          <FooterHeader />
          <div className="row d-flex justify-content-between">
            {/* Logo Section with Text Below */}
            <div className="col-sm-6 col-lg-2 d-flex flex-column align-items-center mb-4 mb-sm-5">
              <img
                src="/images/aks1.png" // replace with your logo path
                alt="Logo"
                className="footer-logo small-logo" // added 'small-logo' class for sizing
              />
              <span className="footer-logo-text text-white text-center mt-2">
                {/* An ISO 9001:2015 | ISO 20000:2018 & ISO 27001:2013 certified company */}
              </span>
            </div>
            {/* Company Section */}
            <div className="col-sm-6 col-lg-2">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5 className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}>
                  Company
                </h5>
                <div className="link-list">
                  {Company.map((item, i) => (
                    <Link key={i} href={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Partners Section */}
            <div className="col-sm-6 col-lg-2">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5 className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}>
                  Partners
                </h5>
                <div className="link-list">
                  {partners.map((item, i) => (
                    <Link key={i} href={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Others Section */}
            <div className="col-sm-6 col-lg-2">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5 className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}>
                  Others
                </h5>
                <ul className="ps-0">
                  {category.map((item, i) => (
                    <li key={i}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Contacts Section */}
            <div className="col-sm-6 col-lg-2">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5 className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}>
                  Contacts
                </h5>
                <ul className="ps-0">
                  {support.map((item, i) => (
                    <li key={i}>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-bdrt1 py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-center text-lg-start">
                <p
                  className={`copyright-text mb-2 mb-md-0 ${
                    path === "/home-11" ? "text-white" : "text-white-light"
                  } ff-heading`}
                >
                  © Copyright AKS IT SERVICES
                  <Link
                    href="https://themeforest.net/user/ib-themes/portfolio"
                    target="_blank"
                    style={{ color: "inherit" }}
                  ></Link>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .footer-logo {
          max-width: 250px; /* Adjust the size to make the logo smaller */
          height: 150px; /* Keep the aspect ratio */
        }

        .footer-logo-text {
          font-size: 0.875rem; /* Adjust the font size if needed */
          text-align: center; /* Center-align the text below the logo */
          margin-top: 1rem; /* Add some spacing between the logo and text */
        }
      `}</style>
    </>
  );
}
