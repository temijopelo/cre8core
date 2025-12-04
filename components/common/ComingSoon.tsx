"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title = "Coming Soon!",
  description = "Will host large-scale developer builderthon for projects on Base in various demography",
}) => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/hackathonbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-center  h-[calc(100vh-80px)] flex items-center justify-center"
      >
        <div className="w-full">
          <h1 className="text-6xl text-white md:text-8xl font-bold mb-6 tracking-tight font-roboto">
            {title}
          </h1>
          <p className="text-sm md:text-sm text-blue-100 max-w-lg mx-auto font-light mb-6 font-montserrat">
            {description.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <div className="bg-white border border-white/20 rounded-2xl p-6 md:p-7 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-xl md:text-1.5xl font-normal font-montserrat text-[#10295F] mb-8">
              Want to be the first to know when we are ready?
            </h2>

            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="grow px-6 py-4 font-montserrat rounded-lg bg-gray-100/10 border border-[#6666665C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EBB643] transition-all"
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
      </div>
    </div>
  );
};

export default ComingSoon;
