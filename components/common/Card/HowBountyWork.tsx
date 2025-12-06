import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { LuUserSearch } from "react-icons/lu";

const HowBountyWork = () => {
  return (
    <Card className="p-4">
      <CardHeader className="bg-[#EFEFEF] font-montserrat border-0 py-4 px-6 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex gap-3 items-center w-full text-lg font-semibold">
          BOUNTIES{" "}
          <span>
            <BsArrowRight />
          </span>
        </div>
        <p className="text-[#4E4E4E]">
          Discover and complete bounties, contribute to Base projects, get to
          the top of the chart earn rewards
        </p>
        <p className="text-[#4E4E4E] text-[12px]">
          Create. Compete. Win. Get rewarded.
        </p>
      </CardHeader>

      <CardDescription className=" font-montserrat text-sm text-[#030406B8]">
        <h4 className="font-semibold text-lg mb-4">How It Works</h4>

        <div className="relative ">
          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center mb-3 w-12 h-12 bg-[#D5DCEB61] rounded-full">
              <HiOutlineUser color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col justify-between h-[70px]">
              <span className="font-semibold">Create your profile</span>
              <span>
                Tell us about yourself and set up your creator or project
                profile.
              </span>
            </span>
          </div>
          <div>
            <img
              src="/icons/Line1.svg"
              alt="Dotted Line"
              className="absolute left-6 top-14 "
            />
          </div>
          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center w-12 h-12 bg-[#D5DCEB61] rounded-full">
              <LuUserSearch color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col justify-between h-[70px]">
              <span className="font-semibold">For Founders</span>
              <span>
                Create bounties and post job opportunities to discover and hire
                top talents.
              </span>
            </span>
          </div>
          <div>
            <img
              src="/icons/Line1.svg"
              alt="Dotted Line"
              className="absolute left-6 top-36"
            />
          </div>
          <div className="flex items-center gap-6 mb-4 ">
            <span className="p-3 flex items-center justify-center w-12 h-12 mt-3 bg-[#D5DCEB61] rounded-full">
              <BiSolidBriefcase color="#183D8B" size={24} />
            </span>
            <span className="flex flex-col justify-between h-[70px]">
              <span className="font-semibold">For Creators</span>
              <span>
                Participate in bounties, apply for jobs, showcase your skills
                and get paid for your work.
              </span>
            </span>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default HowBountyWork;
