import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import img from "../../../public/images/placeholder.svg";

const TopCreator = () => {
  return (
    <Card className="p-4 font-montserrat">
      <CardHeader className="flex p-0 justify-between">
        <h4 className="text-lg font-semibold">Top Creators</h4>
        <IoCalendarOutline size={20} />
      </CardHeader>
      <CardDescription className=" font-montserrat text-sm text-[#030406B8]">
        <div className="relative ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 mb-4 ">
              <span className=" flex items-center justify-center rounded-full">
                <Image
                  src={img}
                  alt="Base NFT Launchpad"
                  width={58}
                  height={58}
                />
              </span>
              <span className="flex flex-col gap-3 justify-between ">
                <span className="font-semibold">Emma Zhang</span>
                <span>Smart Contract Dev</span>
              </span>
            </div>
            <span className="text-[#FDB00A]">$12.5K</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 mb-4 ">
              <span className=" flex items-center justify-center rounded-full">
                <Image
                  src={img}
                  alt="Base NFT Launchpad"
                  width={58}
                  height={58}
                />
              </span>
              <span className="flex flex-col gap-3 justify-between ">
                <span className="font-semibold">Carlos Rivera</span>
                <span>UI/UX Designer</span>
              </span>
            </div>
            <span className="text-[#FDB00A]">$22.5K</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 mb-4 ">
              <span className=" flex items-center justify-center rounded-full">
                <Image
                  src={img}
                  alt="Base NFT Launchpad"
                  width={58}
                  height={58}
                />
              </span>
              <span className="flex flex-col gap-3 justify-between ">
                <span className="font-semibold">David Kim</span>
                <span>Full-Stack Dev</span>
              </span>
            </div>
            <span className="text-[#FDB00A]">$8.9K</span>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default TopCreator;
