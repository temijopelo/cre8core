import React from "react";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { IoBulbSharp } from "react-icons/io5";

const mission = [
  {
    value: "$5.2M",
    title: "Total Rewards Distributed",
    text: "Directly to creators and builders",
  },
  {
    value: "15,892",
    title: "Active Creators",
    text: "From 67 countries worldwide",
  },
  {
    value: "3,456",
    title: "Successful Projects",
    text: "Completed and deployed onchain",
  },
  {
    value: "98.7%",
    title: "Satisfaction Rate",
    text: "From both creators and projects",
  },
];

const AboutNumber = () => {
  const featureCard = (value: string, title: string, text: string) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 max-w-sm">
        <div className="text-4xl flex items-center justify-center">{value}</div>
        <h4 className=" font-semibold">{title}</h4>
        <p className="text-sm text-[#666666] font-montserrat">{text}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#EFEFEF] ">
      <div className="w-[90%] mx-auto p-3">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-6 gap-3">
          <h3 className="text-[32px]">Our Impact by the Numbers</h3>
          <p className="font-montserrat text-[#666666]">
            Experienced builders leading the charge toward a decentralized
            future
          </p>
        </div>
        <div className="flex justify-evenly text-center flex-wrap gap-10 py-20">
          {mission.map((item, index) => (
            <div key={index}>
              {featureCard(item.value, item.title, item.text)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutNumber;
