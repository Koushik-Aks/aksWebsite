import Link from "next/link";

export default function FooterSocial() {
  return (
    <>
      <div className="social-widget d-flex justify-content-between w-100">
        {/* Left side: Privacy Policy and Site Map (aligned to extreme left) */}
        <div className="footer-links d-flex align-items-center" >
          
            {/* Privacy Policy */}
        
          {/* <span className="text-white mx-2">|</span> */}
          {/* <Link className="text-white fw500 fz17" href="/site-map">
            Site Map
          </Link> */}
        </div>

        {/* Right side: Follow us and social icons */}
        {/* <div className="social-style1 d-flex align-items-center">
          <Link className="text-white me-2 fw500 fz17" href="/">
            Follow us
          </Link>
          <a>
            <i className="fab fa-facebook-f list-inline-item" />
          </a>
          <a>
            <i className="fab fa-twitter list-inline-item" />
          </a>
          <a>
            <i className="fab fa-instagram list-inline-item" />
          </a>
          <a>
            <i className="fab fa-linkedin-in list-inline-item" />
          </a>
        </div> */}
      </div>
    </>
  );
}
