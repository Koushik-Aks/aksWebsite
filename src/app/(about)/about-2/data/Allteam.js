import team from "./team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Allteam = ({ data }) => {
  return (
    <>
      {data.map((agent) => (
        <div
          className="col flex justify-center group" 
          key={agent.id}
        >
          <div className="mb30 hover:scale-110 transition-transform duration-300 justify-self-center w-full max-w-[240px]">
            <div className="feature-img overflow-hidden rounded-lg">
              {/* <Link href={`/team/${agent.id}`}> */}
                <Image
                  width={210}
                  height={240}
                  className="w-98 h-48 group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300"
                  src={agent.image}
                  alt="agents"
                />
              {/* </Link> */}
            </div>
            <div className="feature-content pt5 flex flex-col items-center">
            <h5 className="title" style={{ textAlign: "center", transform: "translateX(-20%)", marginTop: '6px' }}>
  {agent.name}
</h5>
              <p className="text text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"style={{ textAlign: "center", transform: "translateX(-20%)",marginTop: '-8px' }}>
                {agent.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Allteam;
