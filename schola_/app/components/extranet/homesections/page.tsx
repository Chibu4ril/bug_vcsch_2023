"use client";
import { Icon } from "@iconify/react";
import {
  CommunityIcon,
  ControlIcon,
  DonateIcon,
  DoubleCaret,
  FundsIcon,
  GoalIcon,
  GradCapIcon,
  GuideIcon,
  Handshake,
  LaptopIcon,
  Strategy,
  SupportIcon,
  TransformIcon,
  TransparencyIcon,
} from "../../Icons";
import styles from "./WhatWeDO.module.css";
import Image from "next/image";
import LinkButton from "../../buttons/LinkButton";

const WhatWeDo = () => {
  return (
    <div className={``}>
      <div className={`${styles.navContainer} mx-auto pb-28 `}>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">What we do?</h1>
          <p className="w-1/2 text-lg mx-auto mt-4">
            At vcScholar, we're not just helping you fund your education; we're
            helping you write a good story of your future.{" "}
          </p>
        </div>

        <div className="mb-28 relative">
          <div>
            <h1 className="text-3xl font-bold my-20">
              Unlock Your Educational Dreams.
            </h1>
          </div>
          <div className=" grid grid-cols-2 grid-flow-dense mt-20">
            <ul className="self-center">
              <li className="mb-10">
                <div className="flex align-top gap-5">
                  <div>
                    <div
                      className={` ${styles.iconCard} p-3 justify-center align-middle`}
                    >
                      <FundsIcon className="text-primary text-2xl"></FundsIcon>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Access to Essential Funds
                    </h2>
                    <p className="font-normal text-base">
                      Here at vcScholar, we you gain access to the critical
                      funding needed to cover tuition fees and deposits. We
                      remove the financial barriers that can hinder your
                      academic pursuits, allowing you to focus on your
                      education. No collateral required, no repayments.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-10">
                <div className="flex align-top gap-5">
                  <div>
                    <div
                      className={` ${styles.iconCard} p-3 justify-center align-middle`}
                    >
                      <SupportIcon className="text-primary text-2xl"></SupportIcon>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Holistic Support
                    </h2>
                    <p className="font-normal text-base">
                      We go beyond just providing funds. Our commitment to your
                      success means offering guidance, mentorship, and
                      assistance in every step of your educational journey.
                      You're not alone; you have a dedicated team behind you.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-10">
                <div className="flex align-top gap-5">
                  <div>
                    <div
                      className={` ${styles.iconCard} p-3 justify-center align-middle`}
                    >
                      <TransformIcon className="text-primary text-2xl"></TransformIcon>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold mb-3">
                      Transforming Lives
                    </h2>
                    <p className="font-normal text-base">
                      We are an organisation that believes in the power of
                      education to change lives. Your decision can lead to
                      personal growth, career advancement, and a brighter
                      future, not just for yourself but for generations to come.
                      This is what we stand for and you have nothing to loose.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex justify-center">
              <Image
                src={"/eduwwd.svg"}
                width={400}
                height={500}
                className="z-30 ms-32"
                alt=""
              ></Image>
            </div>
          </div>
          <Image
            src={"/boxAsset.svg"}
            alt=""
            width={570}
            height={1}
            className="absolute md:-right-80 top-80"
          ></Image>
        </div>

        <div className=" mb-20 relative ">
          <div className=" grid grid-cols-2 grid-flow-dense mt-20">
            <div className="flex align-middle content-center">
              <div className="flex">
                <Image
                  src={"/aidMyStud.svg"}
                  width={400}
                  height={500}
                  className="z-30 me-32 self-center"
                  alt=""
                ></Image>
              </div>

              <Image
                src={"/boxAsset.svg"}
                alt=""
                width={570}
                height={1}
                className="absolute bottom-0 -left-80"
              ></Image>
            </div>

            <div className="self-center">
              <h1 className="text-3xl font-bold mb-10">
                One Micro-Donation at a Time
              </h1>
              <ul className="self-center">
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <DonateIcon className="text-primary text-2xl"></DonateIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-3">
                        Micro-Donations That Matter
                      </h2>
                      <p className="font-normal text-base">
                        We're committed to transparency in our processes. You'll
                        always know where every dollar comes from and where it
                        goes, giving you peace of mind.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <CommunityIcon className="text-primary text-2xl"></CommunityIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-3">
                        Community of Support
                      </h2>
                      <p className="font-normal text-base">
                        Our team of education and scholarship experts has a deep
                        understanding of the challenges African students face
                        when seeking international education. We leverage this
                        expertise to guide you through every step of the funding
                        journey.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <ControlIcon className="text-primary text-2xl"></ControlIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-3">
                        Flexibility and Control
                      </h2>
                      <p className="font-normal text-base">
                        We believe that education should never be limited by
                        financial barriers. Our mission is clear: to enable
                        driven African students, like you, to access quality
                        education abroad by providing the support you need to
                        subsidise your necessary fees or secure full
                        scholarships.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <LaptopIcon className="text-primary text-2xl"></LaptopIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-3">
                        Enabling Dreams
                      </h2>
                      <p className="font-normal text-base">
                        we believe that education should never be limited by
                        financial barriers. Our mission is clear: to empower
                        driven African students, like you, to access quality
                        education abroad by providing the support you need to
                        subsidize your necessary fees or secure full
                        scholarships.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div>
            <h1 className="text-3xl font-bold">What Sets Us Apart: </h1>
          </div>
          <div className=" grid grid-cols-2 grid-flow-dense">
            <div className="self-center">
              <ul className="">
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <TransparencyIcon className="text-primary text-2xl"></TransparencyIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-2">
                        Transparency and Accountability
                      </h2>
                      <p className="font-normal text-base">
                        We're committed to transparency in our processes. You'll
                        always know where every dollar comes from and where it
                        goes, giving you peace of mind.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <GuideIcon className="text-primary text-2xl"></GuideIcon>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-2">
                        Expert Guidance
                      </h2>
                      <p className="font-normal text-base">
                        Our team of education and scholarship experts has a deep
                        understanding of the challenges African students face
                        when seeking international education. We leverage this
                        expertise to guide you through every step of the funding
                        journey.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="mb-10">
                  <div className="flex align-top gap-5">
                    <div>
                      <div
                        className={` ${styles.iconCard} p-3 justify-center align-middle`}
                      >
                        <div className="text-2xl">
                          <GoalIcon className="text-primary"></GoalIcon>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold mb-2">
                        Our Mission:
                      </h2>
                      <p className="font-normal text-base">
                        we believe that education should never be limited by
                        financial barriers. Our mission is clear: to empower
                        driven African students, like you, to access quality
                        education abroad by providing the support you need to
                        subsidize your necessary fees or secure full
                        scholarships.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/setApart.svg"}
                width={400}
                height={500}
                className="z-30 ms-32 self-center"
                alt=""
              ></Image>
            </div>
          </div>
          <Image
            src={"/boxAsset.svg"}
            alt=""
            width={570}
            height={1}
            className="absolute md:-right-80 top-80"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
