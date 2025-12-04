"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg"; // Adjust path if needed
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F2F2F2] pt-12 pb-8 border-t border-gray-200 relative overflow-hidden font-roboto">
            {/* Blurry Background Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden">
                <span className="text-[20vw] font-bold text-blue-200/20 blur-3xl select-none">
                    BASE
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-5 space-y-6">
                        <h2 className="text-4xl font-normal text-slate-900 leading-tight font-mont">
                            Cre8core Labs Fueling <br />
                            the Creative Layer of <br />
                            <span className="text-[#DCBD7A]">Base</span>
                        </h2>
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6E6E6] text-slate-700 hover:bg-[#EBB643] hover:text-white transition-colors"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6E6E6] text-slate-700 hover:bg-[#EBB643] hover:text-white transition-colors"
                            >
                                <FaTelegramPlane size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6E6E6] text-slate-700 hover:bg-[#EBB643] hover:text-white transition-colors"
                            >
                                <FaDiscord size={20} />
                            </a>
                        </div>
                        <p className="text-sm text-slate-500 font-montserrat pt-4">
                            ©, 2025, Base all right reserved
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h3 className="text-lg font-semibold text-slate-500 font-montserrat">Opportunities</h3>
                        <ul className="space-y-4 text-slate-500 font-montserrat font-light">
                            <li>
                                <Link href="/jobs" className="hover:text-[#EBB643] transition-colors">
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/bounties" className="hover:text-[#EBB643] transition-colors">
                                    Active Bounties
                                </Link>
                            </li>
                            <li>
                                <Link href="/hackathon" className="hover:text-[#EBB643] transition-colors">
                                    Upcoming Hackathons
                                </Link>
                            </li>
                            <li>
                                <Link href="/grants" className="hover:text-[#EBB643] transition-colors">
                                    Grant Programs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-6">
                        <h3 className="text-lg font-semibold text-slate-500 font-montserrat">Resources</h3>
                        <ul className="space-y-4 text-slate-500 font-montserrat font-light">
                            <li>
                                <Link href="#" className="hover:text-[#EBB643] transition-colors">
                                    Base Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#EBB643] transition-colors">
                                    Developer Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#EBB643] transition-colors">
                                    Community Forum
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#EBB643] transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <h3 className="text-lg font-semibold text-slate-500 font-montserrat">Company</h3>
                        <ul className="space-y-4 text-slate-500 font-montserrat font-light">
                            <li>
                                <Link href="/about" className="hover:text-[#EBB643] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="hover:text-[#EBB643] transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#EBB643] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-300/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link href="/">
                        <Image src={Logo} alt="Cre8core Labs" width={120} height={32} />
                    </Link>
                    <div className="flex items-center font-montserrat gap-8 text-sm text-slate-600">
                        <Link href="#" className="hover:text-[#EBB643] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-[#EBB643] transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-[#EBB643] transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
