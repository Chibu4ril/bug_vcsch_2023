import { GradCapIcon, TrustIcon } from "../../Icons";
import LinkButton from "../../buttons/LinkButton";
import styles from "./WhatWeDO.module.css";

const TrustSection = () => {
  return (
    <div>
      <div className={`${styles.bgTrust} mb-20 py-28`}>
        <div className={`${styles.navContainer} mx-auto text-white `}>
          <div className="flex mb-20">
            <TrustIcon className="self-center mr-2 text-xl "></TrustIcon>
            <h4 className="text-lg font-bold ">Confidence and Security</h4>
          </div>

          <div className="md:w-8/12">
            <h4 className="text-3xl  mb-10">
              We ensure all aids are supervised by a dedicated team directly for
              the purpose and no direct contact with the beneficiary.
            </h4>

            <p className="text-xl md:w-8/12 mb-28 font-thin">
              With a dedicated team of committed to ensuring your security and
              peace of mind, we effectively oversee efforts around the world,
              making sure your concerns are in capable hands.
            </p>

            <LinkButton href="" className="text-white hover:text-zinc-300">
              Read More {">>"}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
