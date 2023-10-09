import React from "react";
import Requirement from "@/app/criteria/page";
import Link from "next/link";
import NavBar from "@/app/components/navbar/NavBar";
import HeroSection from "@/app/components/extranet/hero/HeroSection";
import GetFunded from "@/app/components/extranet/Get Funded/GetFunded";
import WhatWeDo from "@/app/components/extranet/homesections/page";
import WhoFit from "@/app/components/extranet/homesections/WhoFit";
import TrustSection from "@/app/components/extranet/homesections/TrustSection";
import JoinUs from "@/app/components/extranet/homesections/JoinUs";
import Partners from "@/app/components/extranet/homesections/Partners";
import Testimonial from "@/app/components/extranet/homesections/Testimonial";
import FAQs from "@/app/components/extranet/Accordion/FAQs";
import BlogSect from "@/app/components/extranet/Blog/BlogSect";
import Footer from "@/app/components/extranet/Footer/FooterSection";

const Landingpage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <GetFunded></GetFunded>
      <WhatWeDo></WhatWeDo>
      <WhoFit></WhoFit>
      <TrustSection></TrustSection>
      <JoinUs></JoinUs>
      <Partners></Partners>
      <Testimonial></Testimonial>
      <FAQs></FAQs>
      <BlogSect></BlogSect>
      <Footer></Footer>
    </div>
  );
};

export default Landingpage;
