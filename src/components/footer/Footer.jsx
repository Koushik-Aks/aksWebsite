"use client";
import Link from "next/link";
import FooterHeader from "./FooterHeader";
import { usePathname } from "next/navigation";
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
        {/* Footer bottom section */}
        <div className="container white-bdrt1 py-4">
          <div className="d-flex justify-content-between align-items-center">
            {/* Left: Copyright */}
            <div>
              <p
                className={`copyright-text mb-0 ${
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
            {/* Right: Social icons */}
            <div className="social-style1 d-flex align-items-center">
              <Link className="text-white me-2 fw500 fz17" href="/">
                Follow us
              </Link>
              <a className="me-2">
                <i className="fab fa-facebook-f list-inline-item" />
              </a>
              <a className="me-2">
                <i className="fab fa-twitter list-inline-item" />
              </a>
              <a className="me-2">
                <i className="fab fa-instagram list-inline-item" />
              </a>
              <a>
                <i className="fab fa-linkedin-in list-inline-item" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .footer-logo {
          max-width: 250px;
          height: 150px;
        }

        .footer-logo-text {
          font-size: 0.875rem;
          text-align: center;
          margin-top: 1rem;
        }

        .copyright-text {
          font-size: 0.875rem;
        }
      `}</style>
    </>
  );
}
