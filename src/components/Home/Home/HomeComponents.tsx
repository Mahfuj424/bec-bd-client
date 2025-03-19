import React from "react";
import AboutBec from "../AboutBec/AboutBec";
import WhatSay from "../WhatSay/WhatSay";
import MembershipSection from "../MembershipSection/MembershipSection";
import ExecutiveCommittee from "../ExecutiveCommittee/ExecutiveCommittee";
import LatestNewsEvents from "../LatestNewsEvent/LatestNewsEvent";
import LocationMaps from "../Location/LocationMaps";
import SupportUs from "../SupportUs/SupportUs";

const HomeComponents = () => {
  return (
    <div className="space-y-24 mb-24">
      <AboutBec />
      <WhatSay />
      <MembershipSection />
      <ExecutiveCommittee />
      <LatestNewsEvents />
      <LocationMaps />
      <SupportUs />
    </div>
  );
};

export default HomeComponents;
