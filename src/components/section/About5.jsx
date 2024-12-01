import Image from "next/image";
import Link from "next/link";
import Advisor from "@/app/(about)/about-2/Advisor";
import Team from "@/app/(about)/about-2/Team";

export default function About5() {
  return (
    <>
      <section className="our-about pb0 pt60-lg text center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-xl-4">
              <div
                className="about-img mb30-sm wow fadeInRight"
                data-wow-delay="300ms"
                style={{ marginTop: "-250px" }} 
              >
                <Image
                  height={250}
                  width={350}
                  className="w-90 h-90"
                  src="/images/aks1.png"
                  alt="about"
                />
                <h4
                  className="text-xl max-w-lg mx-auto italic font-light mt-4"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "#222222",
                    fontWeight: "bold",
                  }}
                >
                  "Providing a secure cyber world for a better,<br /> peaceful
                  and progressive environment for <br />
                  mankind."
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-7 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h5 style={{ color: "#222222" }}>
                  <br />
                  <br />
                  <p className="text-left" style={{ color: "#222222" }}>
                    AKS Information Technology Services Pvt. Ltd. (
                    <strong>
                      an ISO 20000, ISO9001:2015 and ISO 27001:2013 certified
                      company
                    </strong>
                    ) was founded in September 2006 and is incorporated under
                    the Companies Act, 1956. It is a leading IT Security
                    Services and Solutions provider company with over{" "}
                    <strong>450+</strong> clients.
                  </p>
                  <br />
                  <p className="text-left" style={{ color: "#222222" }}>
                    AKS IT Services Pvt. Ltd. provides a wide range of IT
                    Security Services including Web Application Security
                    Auditing, Network Security Auditing, Vulnerability
                    Assessment & Penetration Testing (VAPT), Information Risk
                    Management, Compliance to regulatory requirements (like
                    RBI, Aadhar, GDPR, DOT, and International standards), Cyber
                    Forensics, Mobile Forensics & Cyber Crime Investigation,
                    Information Security Training, Computer Security Incident
                    Response Team (Design, Setup and Training) and Security
                    Operations Centre (Design & Implementation). We also
                    provide Software solutions and testing infrastructure for
                    our clients.
                  </p>
                  <br />
                  <p className="text-left" style={{ color: "#222222" }}>
                    &bull; The company is empanelled by CERT-In (Govt. of India)
                    since year 2007
                  </p>
                  <p className="text-left" style={{ color: "#222222" }}>
                    &bull; We are also Authorized Resellers of Security
                    Products & Equipment
                  </p>
                  <p className="text-left" style={{ color: "#222222" }}>
                    &bull; We have 200+ professionals, most having
                    certifications such as CISSP, CISA, ISO 27001, MBCI, CCNA,
                    CEH, RHCE, etc.
                  </p>
                  <p className="text-left" style={{ color: "#222222" }}>
                    &bull; The company successfully carried out more than 14000
                    Application Security Audits, amongst the highest number of
                    audits done by a CERT-In empanelled agency.
                  </p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-8" data-aos="fade-up">
    <h2 className="text-3xl font-semibold text-gray-800 mb-5 -mt-4">OUR TEAM</h2>


          </div>
          <Team />
        </div>
      </section>
{/* Our Advisors Section */}
<section className="py-0" style={{ marginTop: "-80px" }}> 
  <div className="container mx-auto">
    <div className="text-center mb-8" data-aos="fade-up">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5 -mt-4">
        OUR ADVISORS
      </h2>
    </div>
    <Advisor />
  </div>
</section>

    </>
  );
}
