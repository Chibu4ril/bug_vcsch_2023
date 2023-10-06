import React from "react";
import Requirement from "@/app/criteria/page";
import Link from "next/link";
import NavBar from "@/app/components/navbar/NavBar";
import HeroSection from "@/app/components/extranet/hero/HeroSection";
import GetFunded from "@/app/components/extranet/Get Funded/page";
import WhatWeDo from "@/app/components/extranet/whatWeDo/page";

const Landingpage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <GetFunded></GetFunded>
      <WhatWeDo></WhatWeDo>
    </div>
  );
};

export default Landingpage;
