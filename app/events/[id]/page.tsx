"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const EventDetails = () => {
  const router = useRouter();
  return (
    <div className="max-w-[80%] mx-auto mt-10">
      <div
        onClick={() => router.back()}
        className="mb-5 flex items-center gap-3 text-[#666666]"
      >
        <IoIosArrowRoundBack size={24} />
        <p>Home</p>
        <p>Events</p>
        <p>BBH</p>
      </div>

      <div className="bg-[#1332731C] flex flex-col  gap-3 p-6 rounded-2xl items-center justify-center">
        <span className="bg-white px-4 py-2 rounded-full text-sm font-montserrat   flex items-center gap-2 mb-4">
          {" "}
          <GoDotFill color="#185F0F" /> Registration Open
        </span>
        <h1 className="text-[68.7px]  text-center font-semibold leading-[1.2]">
          Base Builder <br /> <span className="text-[#1C47A2]"> Hackathon</span>
        </h1>
        <p>72 hours of innovation. Build the future of DeFi on Base.</p>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-5">
          <li className="flex gap-2 items-center">
            <GoDotFill color="#1C47A2" />
            <span>May 15-17, 2025</span>
          </li>
          <li className="flex gap-2 items-center">
            <GoDotFill color="#1C47A2" />
            <span>Virtual Event</span>
          </li>
          <li className="flex gap-2 items-center">
            <GoDotFill color="#E4B95C" />
            <span>$50K Prize Pool</span>
          </li>
        </ul>
      </div>

      <div className="p-10 flex justify-between max-w-5xl mx-auto mt-10 flex-wrap">
        <div className="flex flex-col items-center justify-around h-[174px] w-[194px] p-4 text-center bg-white rounded-2xl">
          <img src="/icons/build.svg" alt="Build Icon" width={24} height={24} />
          <h3>Build</h3>
          <p className="font-montserrat text-sm">
            Create innovative DeFi applications
          </p>
        </div>
        <div className="flex flex-col items-center justify-around h-[174px] w-[194px] p-4 text-center bg-white rounded-2xl">
          <img
            src="/icons/connect.svg"
            alt="Connect Icon"
            width={24}
            height={24}
          />
          <h3>Connect</h3>
          <p className="font-montserrat text-sm">Network with top builders</p>
        </div>
        <div className="flex flex-col items-center justify-around h-[174px] w-[194px] p-4 text-center bg-white rounded-2xl">
          <img src="/icons/learn.svg" alt="Learn Icon" width={24} height={24} />
          <h3>Learn</h3>
          <p className="font-montserrat text-sm">
            Expert mentorship & workshops
          </p>
        </div>
        <div className="flex flex-col items-center justify-around h-[174px] w-[194px] p-4 text-center bg-white rounded-2xl">
          <img src="/icons/win.svg" alt="Win Icon" width={24} height={24} />
          <h3>Win</h3>
          <p className="font-montserrat text-sm">Compete for $50K in prizes</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl space-y-6">
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] flex items-center gap-2 ">
            Join the Hackathon
          </h1>
          <p className="text-[#666666] text-sm font-montserrat">
            Secure your spot in 2 minutes
          </p>
        </div>

        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="companyName"
              className="border border-gray-300 rounded-md p-2 font-montserrat "
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="jobType"
              className="border border-gray-300 rounded-md p-2 font-montserrat"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="workType"
              className="border border-gray-300 rounded-md p-2 font-montserrat "
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="salaryRange"
              className="border border-gray-300 rounded-md p-2 font-montserrat"
              placeholder="Role"
            />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="workType"
              className="border border-gray-300 rounded-md p-2 font-montserrat "
              placeholder="Experience level*"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="salaryRange"
              className="border border-gray-300 rounded-md p-2 font-montserrat"
              placeholder="Role"
            />
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <textarea
            id="jobTitle"
            rows={5}
            className="border border-gray-300 rounded-md p-2 font-montserrat "
            placeholder="Project idea or what you will like to build ( Optional )"
          >
            {" "}
          </textarea>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="workType"
              className="border border-gray-300 rounded-md p-2 font-montserrat "
              placeholder="T- shirt size"
            />
          </div>
          <div className="w-full flex flex-col space-y-2">
            <input
              type="text"
              id="salaryRange"
              className="border border-gray-300 rounded-md p-2 font-montserrat"
              placeholder="Dietary restrictions ( Optional )"
            />
          </div>
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm font-montserrat">
              I agree to the{" "}
              <span className="text-[#E4B95C] cursor-pointer">
                terms and conditions
              </span>{" "}
              and understand that all submitted work will be reviewed according
              to the evaluation criteria outline above
            </span>
          </label>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#E4B95C] w-full hover:bg-[#d1b16a] text-white px-8 py-4 rounded-full font-montserrat ">
            Register Now
          </button>
        </div>
        <div>
          <p className="text-center text-sm text-[#666666] font-montserrat">
            Free registration • Confirmation email sent instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
