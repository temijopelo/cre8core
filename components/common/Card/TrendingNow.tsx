import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { RiGamepadLine } from "react-icons/ri";
import { RxRocket } from "react-icons/rx";
import { SiOverleaf } from "react-icons/si";

const TrendingNow = () => {
  return (
    <Card className="p-4 font-montserrat">
      <CardHeader className="flex p-0 justify-between">
        <h4 className="text-lg font-semibold">Trending Now</h4>
        <FaFireFlameCurved size={20} />
      </CardHeader>
      <CardDescription className=" font-montserrat text-sm text-[#030406B8]">
        <div className="relative ">
          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center w-12 h-12 bg-[#D5DCEB61] rounded-full">
              <RxRocket color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col gap-3 justify-between ">
              <span className="font-semibold">Base NFT Launchpad</span>
              <span>2,500 USDC. 48 Applications</span>
            </span>
          </div>

          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center w-12 h-12 bg-[#D5DCEB61] rounded-full">
              <SiOverleaf color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col gap-3 justify-between ">
              <span className="font-semibold">Carbon Credit DApp</span>
              <span>3,200 USDC. 31 Applications</span>
            </span>
          </div>

          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center w-12 h-12 bg-[#D5DCEB61] rounded-full">
              <RiGamepadLine color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col gap-3 justify-between ">
              <span className="font-semibold">Gamefi Protocol</span>
              <span>1,800 USDC. 67 Applications</span>
            </span>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default TrendingNow;
