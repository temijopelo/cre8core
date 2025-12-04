"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Link as LinkIcon, Trophy, DollarSign, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState<"completed" | "active">("completed");

    // Mock data - replace with actual user data
    const profileData = {
        name: "Angelina Bryan",
        username: "@AngDev",
        bio: "Full-stack developer passionate about Web3 and DeFi. Building the future on Base blockchain.",
        location: "San Francisco, CA",
        website: "AngeDev.XYZ",
        skills: ["Solidity", "React", "Typescript", "Smart contracts", "DeFi"],
        avatar: "/icons/profileicon.svg",
        stats: {
            bountiesCompleted: 12,
            totalEarned: "18,500",
            rank: 47,
            rating: 4.8,
        },
    };

    const completedBounties = [
        {
            id: 1,
            title: "Audit & Optimize Lending Protocol Contracts",
            completedDate: "March 2025",
            rating: 5,
            earnings: "18,500",
        },
        {
            id: 2,
            title: "Video Contest: MetaCade",
            completedDate: "March 2025",
            rating: 5,
            earnings: "4,000",
        },
        {
            id: 3,
            title: "Create Base Explainer Video",
            completedDate: "March 2025",
            rating: 5,
            earnings: "3,500",
        },
        {
            id: 4,
            title: "Video Contest: QRBase",
            completedDate: "March 2025",
            rating: 5,
            earnings: "2,000",
        },
        {
            id: 5,
            title: "Video Contest: Base – Onboard to Earn",
            completedDate: "March 2025",
            rating: 5,
            earnings: "10,000",
        },
    ];

    const activeBounties = [
        {
            id: 1,
            title: "NFT Marketplace Design",
            progress: 65,
            deadline: "May 1, 2025",
            earnings: "1,200",
        },
        {
            id: 2,
            title: "Smart Contract Security Audit",
            progress: 40,
            deadline: "June 15, 2025",
            earnings: "5,000",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-6">
                            {/* Avatar */}
                            <div className="w-32 h-32 bg-gradient-to-br font-roboto from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* User Info */}
                            <div className="flex-1">
                                <h1 className="text-4xl font-semibold text-slate-900 mb-1 font-roboto">
                                    {profileData.name}
                                </h1>
                                <p className="text-dark mb-4 font-montserrat">{profileData.username}</p>
                                <p className="text-[#666666] font-normal mb-4 max-w-2xl font-montserrat">
                                    {profileData.bio}
                                </p>

                                <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span className="font-montserrat">{profileData.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LinkIcon size={16} />
                                        <span className="font-montserrat">{profileData.website}</span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {profileData.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-1.5 bg-white text-dark rounded-full text-sm font-roboto border border-[#DCBD7A]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Edit Button */}
                        <Button className="bg-[#E4B95C] hover:bg-[#d9a532] text-slate-900 font-normal font-montserrat rounded-full px-6">
                            Edit profile
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-[#666666] text-xl mb-2 font-montserrat">Bounties Completed</p>
                        <div className="flex items-center gap-2">
                            <Trophy size={24} className="text-[#9B6A00]" />
                            <span className="text-3xl font-semibold text-[#9B6A00] font-montserrat">
                                {profileData.stats.bountiesCompleted}
                            </span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-[#666666] text-xl mb-2 font-montserrat">Total Earned</p>
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-semibold text-[#9B6A00] font-montserrat">
                                {profileData.stats.totalEarned} USDC
                            </span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-[#666666] text-xl mb-2 font-montserrat">Rank</p>
                        <div className="flex items-center gap-2">
                            <Award size={24} className="text-[#9B6A00]" />
                            <span className="text-3xl font-semibold text-[#9B6A00] font-montserrat">
                                #{profileData.stats.rank}
                            </span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-[#666666] text-xl mb-2 font-montserrat">Rating</p>
                        <div className="flex items-center gap-2">
                            <Star size={24} className="text-[#9B6A00] fill-[#9B6A00]" />
                            <span className="text-3xl font-semibold text-[#9B6A00] font-montserrat">
                                {profileData.stats.rating}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="overflow-hidden">
                    <div className="bg-gray-100 p-2 m-4 rounded-full inline-flex w-auto gap-2">
                        <button
                            onClick={() => setActiveTab("completed")}
                            className={`py-2 px-20 font-montserrat font-normal transition-all rounded-full ${activeTab === "completed"
                                ? "bg-[#E4B95C] text-slate-900"
                                : "bg-transparent text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Completed
                        </button>
                        <button
                            onClick={() => setActiveTab("active")}
                            className={`py-2 px-20 font-montserrat font-normal transition-all rounded-full ${activeTab === "active"
                                ? "bg-[#E4B95C] text-slate-900"
                                : "bg-transparent text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Active
                        </button>
                    </div>

                    {/* Bounties List */}
                    <div className="px-6 pb-6 space-y-4">
                        {activeTab === "completed" ? (
                            completedBounties.map((bounty) => (
                                <div
                                    key={bounty.id}
                                    className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2 font-montserrat">
                                            {bounty.title}
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <p className="text-sm text-[#666666] font-montserrat">
                                                Completed {bounty.completedDate}
                                            </p>
                                            <div className="flex items-center gap-1">
                                                {[...Array(bounty.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className="text-[#E4B95C] fill-[#E4B95C]"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-semibold text-[#E4B95C] font-montserrat">
                                            {bounty.earnings} USDC
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            activeBounties.map((bounty) => (
                                <div
                                    key={bounty.id}
                                    className="flex items-start justify-between p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all"
                                >
                                    <div className="flex-1 pr-6">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-3 font-montserrat">
                                            {bounty.title}
                                        </h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#666666] font-montserrat">Progress</span>
                                                <span className="text-[#666666] font-montserrat font-semibold">{bounty.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-[#E4B95C] h-2 rounded-full transition-all"
                                                    style={{ width: `${bounty.progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[#666666] pt-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                <span className="font-montserrat">Deadline: {bounty.deadline}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-semibold text-[#E4B95C] font-montserrat">
                                            {bounty.earnings} USDC
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
