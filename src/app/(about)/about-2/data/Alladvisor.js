import advisors from "./advisors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ALladvisor = ({ data }) => {
  return (
    <>
      {data.map((agent) => (
        <div className="col" key={agent.id}>
          <div className="mb30 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="feature-img">
              {/* <Link href={`/advisors/${agent.id}`}> */}
                <Image
                  width={210}
                  height={240}
                  className="w-96 h-48"
                  src={agent.image}
                  alt="agents"
                />
              {/* </Link> */}
            </div>
            <div className="feature-content pt5">
            <h5 className="title" style={{ textAlign: "center", transform: "translateX(-10%)" ,marginTop: '6px'}}>
  {agent.name}
</h5>

              <p className="text">{agent.position}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ALladvisor;
