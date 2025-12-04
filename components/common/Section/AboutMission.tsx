import React from "react";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { IoBulbSharp } from "react-icons/io5";

const mission = [
  {
    icon: <IoBulbSharp />,
    title: "Innovation First",
    text: "We believe the most groundbreaking ideas come from connecting diverse minds across the globe, fostering creativity through meaningful collaboration.",
  },
  {
    icon: <HiOutlineUser />,
    title: "Creator Empowerment",
    text: "Every creator deserves fair compensation and recognition for their contributions. We ensure talent is valued and rewarded appropriately in the Web3 economy..",
  },
  {
    icon: <CiGlobe />,
    title: "Global Impact",
    text: "By bridging geographical and cultural gaps, we're creating a truly borderless ecosystem where the best ideas rise to the top regardless of origin.",
  },
];

const AboutMission = () => {
  const featureCard = (icon: React.ReactNode, title: string, text: string) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 max-w-sm">
        <div className="text-4xl text-white flex items-center justify-center h-12 w-12 p-3 rounded-2xl bg-[#1C47A2] shadow-md">
          {icon}
        </div>
        <h4 className="text-[24px] font-semibold">{title}</h4>
        <p className="text-sm text-[#666666] font-montserrat">{text}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#EFEFEF] ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-6 gap-3">
          <h3 className="text-[32px]">Our Mission</h3>
          <p className="font-montserrat text-[#666666]">
            We exist to democratize access to Web3 opportunities and empower the
            next generation of onchain builders. By creating the most
            comprehensive platform for talent discovery and project
            collaboration, we're accelerating the transition to a decentralized
            future.
          </p>
        </div>
        <div className="flex justify-evenly text-center flex-wrap gap-10 py-20">
          {mission.map((item, index) => (
            <div key={index}>
              {featureCard(item.icon, item.title, item.text)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
