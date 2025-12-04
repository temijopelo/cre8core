"use client";

import Image from "next/image";
import React, { useState } from "react";
import profileData from "../../../public/icons/profileicon.svg";

const Edit = () => {
  const [skill, setSkill] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([
    "javascript",
    "react",
    "nextjs",
  ]);

  const handleAddSkill = (e: any) => {
    e.preventDefault();
    if (skill.trim() !== "" && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  const removeSkill = (item: string): void => {
    setSkills(skills.filter((s) => s !== item));
  };
  return (
    <div className="bg-white px-10 py-8 max-w-[90%] my-10 rounded-2xl mx-auto">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div>
          <h1 className="text-[48px]">Edit Profile</h1>
          <p className="text-[#666666] text-sm font-montserrat">
            Update your profile information and showcase your skills
          </p>
        </div>
        <div className="w-48 h-48 bg-linear-to-br font-roboto from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={profileData}
            alt={profileData}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <form action="">
          <div className="flex flex-col space-y-6 mt-10 ">
            <div className="w-full flex gap-4">
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="avatarUrl" className=" font-medium">
                  Avatar URL
                </label>
                <input
                  type="text"
                  id="avatarUrl"
                  className="border border-gray-300 rounded-md p-2 "
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="name" className=" font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md p-2 font-montserrat"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="avatarUrl" className=" font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 rounded-md p-2 "
                  placeholder="@alexdev"
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="name" className=" font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="border border-gray-300 rounded-md p-2 "
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="bio" className=" font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                rows={10}
                className="border border-gray-300 rounded-md p-2 "
                placeholder="Full-stack developer passionate about Web3 and DeFi. Building the future on Base blockchain."
              ></textarea>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="skills" className=" font-medium">
                Website
              </label>
              <input
                type="text"
                id="skills"
                className="border border-gray-300 rounded-md p-2 "
                placeholder="https://alexdev.XYZ"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 font-medium">Skills</label>

              {/* Input Row */}
              <div className="flex items-center gap-3 border rounded-lg p-3">
                <input
                  type="text"
                  placeholder="Add a skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="flex-1 outline-none"
                />

                <button
                  onClick={(e) => handleAddSkill(e)}
                  className="bg-[#E4B95C] text-black text-sm px-14 py-3 rounded-full hover:opacity-80"
                >
                  Add
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => removeSkill(item)}
                      className="font-bold text-gray-500 hover:text-gray-800"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex items-center gap-4">
              <button
                type="submit"
                className="bg-[#E4B95C] text-black py-3  rounded-3xl text-sm hover:bg-[#E4B95C]/50 flex-1"
              >
                Save Changes
              </button>
              <button
                className="w-[300px] border py-3 rounded-3xl border-[#E4B95C] text-sm text-black hover:bg-[#E4B95C]/10 "
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
