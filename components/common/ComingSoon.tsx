"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
    title?: string;
    description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
    title = "Coming Soon!",
    description = "Will host large-scale developer builderthon for projects on Base in various demography",
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-linear-to-r from-[#0C1F47] to-[#1D4CAD] text-white py-32 overflow-hidden flex-grow flex items-center">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    {/* Diagonal line or shape from design */}
                    <div className="absolute -left-20 top-1/2 w-[150%] h-[1px] bg-blue-400/20 rotate-[-15deg]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-roboto">
                        {title}
                    </h1>
                    <p className="text-sm md:text-sm text-blue-100 max-w-4xl mx-auto font-light mb-16 font-montserrat">
                        {description.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < description.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>

                    {/* Subscription Card */}
                    <div className="bg-white border border-white/20 rounded-2xl p-6 md:p-7 max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-xl md:text-1.5xl font-normal font-montserrat text-[#10295F] mb-8">
                            Want to be the first to know when we are ready?
                        </h2>

                        <form className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 font-montserrat rounded-lg bg-gray-100/10 border border-[#6666665C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EBB643] transition-all"
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-[#0F2555] hover:bg-[#1a2f5e] text-white px-8 py-4 h-auto text-sm rounded-lg font-normal font-montserrat transition-colors"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComingSoon;
