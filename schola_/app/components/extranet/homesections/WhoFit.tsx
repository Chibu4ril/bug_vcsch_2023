import {
  Constraint,
  Education,
  GlobeIcon,
  Handshake,
  SupportIcon,
} from "../../Icons";
import styles from "./WhatWeDO.module.css";

const WhoFit = () => {
  return (
    <div>
      <div className={`${styles.navContainer} mx-auto mb-20 `}>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">Who is a good fit?</h1>
          <p className="w-1/2 text-lg mx-auto mt-4">
            We are looking for an individual who aligns with the mission and
            offerings of the platform. Specifically:
          </p>
        </div>

        <div className="grid grid-flow-dense grid-cols-4 gap-10 ">
          <div className={`${styles.wfCard} p-6`}>
            <div className="mb-8 ">
              <Constraint className="text-primary text-3xl"></Constraint>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-5">
              Future Changer with Financial Constraints
            </h4>
            <p className="">
              An individual determined to transform their life & opportunities
              but face limitations due to financial challenges. They are
              motivated to pursue education and create a better future but
              require financial assistance.
            </p>
          </div>

          <div className={`${styles.wfCard} p-6`}>
            <div className="mb-8 ">
              <GlobeIcon className="text-primary text-3xl"></GlobeIcon>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-5">
              Innovative Thinker with a Global Vision
            </h4>
            <p className="">
              A creative and forward-thinking mindset, driven to share
              ground-breaking ideas that can have a positive impact on a global
              scale. They seek support to turn their vision into reality.
            </p>
          </div>

          <div className={`${styles.wfCard} p-6`}>
            <div className="mb-8 ">
              <Education className="text-primary text-3xl"></Education>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-5">
              Dedicated Pursuer of Postgraduate Education
            </h4>
            <p className="text-justify">
              A motivated individual committed to furthering their academic
              journey through postgraduate studies. They are enthusiastic about
              expanding their knowledge and expertise.
            </p>
          </div>

          <div className={`${styles.wfCard} p-6`}>
            <div className="mb-8 ">
              <SupportIcon className="text-primary text-3xl"></SupportIcon>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-5">
              Admitted Postgraduate Student Seeking Support
            </h4>
            <p className="text-justify">
              These are individuals who have already been granted admission to
              pursue postgraduate studies. They are now seeking financial
              assistance and resources to help them succeed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoFit;
