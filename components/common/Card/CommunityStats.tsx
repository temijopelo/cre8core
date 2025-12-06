import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import { LiaChartBarSolid } from "react-icons/lia";

const CommunityStats = () => {
  return (
    <Card className="p-4 font-montserrat">
      <CardHeader className="flex p-0 justify-between">
        <h4 className="text-lg font-semibold">Community Stats</h4>
        <LiaChartBarSolid size={20} />
      </CardHeader>
      <CardDescription>
        <div className="flex flex-col gap-4 text-black border-b border-black/10 py-4 ">
          <div className="flex justify-between">
            <span className=" text-[#4E4E4E]">Active Bounties</span>
            <span className="font-semibold">1,250</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-[#4E4E4E]">Total Rewards</span>
            <span className="font-semibold">$3.20M</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-[#4E4E4E]">Creators</span>
            <span className="font-semibold">85,000</span>
          </div>
          <div className="flex justify-between">
            <span className=" text-[#4E4E4E]">Projects</span>
            <span className="font-semibold">4,000</span>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <h6>This Month</h6>
          <p>
            {" "}
            <span className="font-semibold text-[#098D3E]">+23%</span> new
            bounties created
          </p>
        </div>
      </CardDescription>
    </Card>
  );
};

export default CommunityStats;
