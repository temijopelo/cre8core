"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg"; // Adjust path if needed
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "../../../public/icons/profileicon.svg";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 py-2">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Cre8core Labs" width={70} height={70} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-slate-700 font-normal font-montserrat">
                    <Link href="/hackathon" className="hover:text-blue-600 transition-colors">
                        Hackathons
                    </Link>
                    <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <span>Bounties</span>
                        <ChevronDown size={16} />
                        {/* Dropdown placeholder */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-lg hidden group-hover:block z-50">
                            <Link href="/bounties" className="block px-4 py-2 hover:bg-gray-50">
                                All Bounties
                            </Link>
                            {/* Add more dropdown items here */}
                        </div>
                    </div>
                    <Link href="/grants" className="hover:text-blue-600 transition-colors">
                        Grants
                    </Link>
                    <Link href="/jobs" className="hover:text-blue-600 transition-colors">
                        Jobs
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">
                        About
                    </Link>
                </div>

                {/* Right Side (Profile/Wallet) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        >
                            <Image src={profile} alt="Profile" width={32} height={32} className="rounded-full" />
                            <ChevronDown size={16} className="text-slate-700" />
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-lg z-50 py-2">
                                <Link
                                    href="/profile"
                                    className="block px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors font-montserrat"
                                    onClick={() => setIsProfileDropdownOpen(false)}
                                >
                                    View Profile
                                </Link>
                                <button
                                    onClick={() => {
                                        setIsProfileDropdownOpen(false);
                                        // Add logout logic here
                                    }}
                                    className="w-full text-left px-4 py-2 text-slate-700 hover:bg-gray-50 transition-colors font-montserrat"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Connect Wallet Button */}
                    <Button className="bg-[#EBB643] hover:bg-[#d9a532] text-slate-900 font-normal font-montserrat rounded-full px-6">
                        Connect Wallet
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50 flex flex-col p-4 space-y-4">
                    <Link href="/hackathon" className="text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        Hackathons
                    </Link>
                    <Link href="/bounties" className="text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        Bounties
                    </Link>
                    <Link href="/grants" className="text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        Grants
                    </Link>
                    <Link href="/jobs" className="text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        Jobs
                    </Link>
                    <Link href="/about" className="text-slate-700 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        About
                    </Link>
                    <Button className="bg-[#EBB643] hover:bg-[#d9a532] text-slate-900 font-semibold rounded-full w-full">
                        Connect Wallet
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
