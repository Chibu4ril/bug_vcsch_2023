import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { PrimaryButton } from "../../buttons/PrimaryButton";

export const EmailSearchBar = () => {
  return (
    <form>
      <div className="relative">
        <input
          type="text"
          id="default-search"
          className="block w-full p-5 py-7 text-sm text-gray-900 input-bordered rounded-full input "
          placeholder="Enter your email address..."
          required
        />

        <PrimaryButton
          label="Get Started"
          className="text-white absolute right-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm  "
        ></PrimaryButton>
      </div>
      <p className="text-center mt-3 text-sm text-gray-500">
        {" "}
        No repayment. <span className="ms-5"> No Collateral</span>
      </p>
    </form>
  );
};

const CarouselBox = () => {
  return (
    <div className="w-full">
      <div className="carousel rounded-box">
        <div className="carousel-item w-full">
          <Image
            className="w-full"
            src={"/heroImage.svg"}
            alt="Hero image"
            width={1}
            height={1}
          ></Image>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className={`${styles.heroBg} ${styles.heroLiner}`}>
      <div className={`${styles.navContainer} mx-auto py-28 `}>
        <div className="grid grid-cols-2 gap-40 ">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <Image
                src={"/smarter.svg"}
                width={150}
                height={150}
                alt=""
                className="absolute right-0"
                style={{ top: -10 }}
              ></Image>
            </div>
            <div className="">
              <p className=" ">
                <span className="text-purple-700">
                  Transforming Dreams into{" "}
                </span>
                <span className="text-green-500">Degrees.</span>
              </p>

              <h1 className="text-6xl font-bold mt-5">
                Secure funding for your education.
              </h1>
              <p className="mt-7">
                Our mission is to help students who face financial challenges
                access the funding they need. We offer financial assistance to
                those from underprivileged backgrounds who meet our award
                criteria.
              </p>
            </div>

            <div className="my-10">
              <EmailSearchBar></EmailSearchBar>
            </div>
          </div>

          <div>
            <CarouselBox></CarouselBox>
          </div>
        </div>
      </div>

      {/* <div>
        <Image
          src={"/heroLine.svg"}
          alt="line"
          width={1}
          height={1}
          className="w-full"
        ></Image>
      </div> */}
    </div>
  );
};

export default HeroSection;
