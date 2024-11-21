"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TrendingServiceCard1({ data }) {
  const path = usePathname();

  return (
    <div
      className={`listing-style1 ${
        path === "/home-4" ? "default-box-shadow1 bdrs8" : ""
      } ${path === "/home-6" ? "default-box-shadow1 border-0" : ""} ${
        path === "/home-9" ? "border-0 default-box-shadow1 bdrs16" : ""
      } ${path === "/home-10" ? "bdrs16" : ""} ${
        path === "/home-17" ? "bdrs16" : ""
      } ${path === "/home-15" ? "bdrs16" : ""} ${
        path === "/home-12" ? "bdrs16" : ""
      } ${path === "/home-5" ? "style4 default-box-shadow1 mb60" : ""} ${
        path === "/home-18" ? "style4 default-box-shadow1 mb60" : ""
      } ${path === "/home-19" ? "style4 default-box-shadow1 mb60" : ""} ${
        path === "/home-8" ? "style5" : ""
      }`}
      style={{ height: '400px', width: '300px' }} // Ensure all cards have the same size
    >
      <div className="list-thumb" style={{ height: '200px', width: '300px' }}>
        <Image
          height={200}
          width={300}
          className="w-100 h-100 object-fit-cover"
          src={data.img}
          alt="thumbnail"
        />
      </div>
      <div className={`list-content ${path === "/home-8" ? "px-0" : ""}`}>
        <h5 className="list-title">{data.title.slice(0, 40)}</h5>
        <p className="list-text body-color fz15 mb-1">{data.category}</p>
        <div className="list-meta d-flex justify-content-between align-items-center mt15">
          <a className="d-flex" href="#"></a>
          <div className="budget">
            <p className="mb-0 body-color"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
