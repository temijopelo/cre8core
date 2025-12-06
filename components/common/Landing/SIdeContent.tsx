import React from "react";
import HowBountyWork from "../Card/HowBountyWork";
import CommunityStats from "../Card/CommunityStats";
import TrendingNow from "../Card/TrendingNow";
import UpcomingEvent from "../Card/UpcomingEvent";
import TopCreator from "../Card/TopCreator";
import FutureOfWeb3 from "../Section/FutureOfWeb3";

const SideContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <HowBountyWork />
      <CommunityStats />
      <TrendingNow />
      <UpcomingEvent />
      <TopCreator />
    </div>
  );
};

export default SideContent;
