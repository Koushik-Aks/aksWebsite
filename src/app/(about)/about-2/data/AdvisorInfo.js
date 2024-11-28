import agents from "@/data/advisors";

import Image from "next/image";
import React from "react";

const AdvisorInfo = ({ id }) => {
  const data = agents.filter((elm) => elm.id == id)[0] || agents[0];

  const agentData = {
    name: data.name,
    company: data.position,
    reviews: "5.0 • 49 Reviews",
    phone1: "+848 032 03 01",
    phone2: "+848 032 03 01",
    social: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-linkedin-in", link: "#" },
    ],
  };
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={data.image}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0">{agentData.name}</h2>
          <p className="fz15">
            {" "}
            <b>{agentData.company}</b>
          </p>

          <div className="agent-social">
            {agentData.social.map((socialItem, index) => (
              <a key={index} className="mr20" href={socialItem.link}>
                <i className={socialItem.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisorInfo;
