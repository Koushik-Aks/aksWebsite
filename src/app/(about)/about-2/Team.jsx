"use client";

import React, { useEffect, useState } from "react";
import teamData from "./data/team"; // Renamed import
import Allteam from "./data/Allteam";

export default function Team() {
  const [team, setTeam] = useState(teamData); 

  useEffect(() => {
    setTeam(team); 
  }, []);

  return (
    <section className="our-agents" style={{ paddingTop: "0", marginTop: "0" }}>
      <div className="container">
        <div className="row align-items-center"></div>
       
        <div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Allteam data={team} />
        </div>
       
      </div>
    </section>
  );
}
