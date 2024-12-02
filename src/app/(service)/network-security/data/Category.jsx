import React from "react";

export default function Category() {
  return (
    <section className="categories_list_section overflow-hidden">
      <style>
        {`
          .categories_list_section .listings_category_nav_list_menu ul {
            padding-left: 0;
            margin: 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center; /* Center the items */
            box-sizing: border-box;
          }

          .categories_list_section .listings_category_nav_list_menu ul li {
            margin: 0 5px 0 0; /* Reduced gap between items */
            padding: 0;
            flex: 0 0 auto;
            box-sizing: border-box;
          }

          .categories_list_section .listings_category_nav_list_menu ul li a {
            padding: 2px 10px;
            font-size: 14px;
            display: block;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }

          .categories_list_section .listings_category_nav_list_menu ul li a:hover {
            background-color: #f0f0f0;
          }

          .categories_list_section .listings_category_nav_list_menu ul li a.active {
            background-color: #007bff;
            color: white;
          }

          .categories_list_section {
            width: 100vw;
            padding: 10px 0;
          }

          .container-fluid {
            max-width: 1200px; /* Add a max-width to control the container width */
            margin: 0 auto; /* Center the container */
            padding-left: 20px; /* Add padding to the left */
            padding-right: 20px; /* Add padding to the right */
          }
        `}
      </style>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="listings_category_nav_list_menu">
              <ul className="mb0 ps-0">
                {/* First Row with 6 items */}
                <li>
                  <a href="#">Network Architecture Review </a>
                </li>
                <li>
                  <a href="#">Vulnerability Assessment</a>
                </li>
                <li>
                  <a href="#">Internal Penetration Testing</a>
                </li>
                <li>
                  <a href="#">External Penetration Testing </a>
                </li>
                <li>
                  <a href="#">Secure Configuration Audit</a>
                </li>
                <li>
                  <a href="#">Wireless Security Assessment</a>
                </li>
                <li>
                  <a href="#">Log Analysis</a>
                </li>

                Second Row with 5 items
                {/* <li>
                  <a href="#">Mobile Application Security Testing</a>
                </li>
                <li>
                  <a href="#">ASP/ESP (E-sign) Compliance Testing</a>
                </li>
                <li>
                  <a href="#">Performance Testing (Load/Stress)</a>
                </li>
                <li>
                  <a href="#">GIGW Compliance Testing</a>
                </li>
                <li>
                  <a href="#">VSCC (Form C) Testing</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
