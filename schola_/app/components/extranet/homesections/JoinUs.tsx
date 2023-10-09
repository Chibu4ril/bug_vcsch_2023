import LinkButton from "../../buttons/LinkButton";
import styles from "./WhatWeDO.module.css";

const JoinUs = () => {
  return (
    <div>
      <div className={`${styles.navContainer} mx-auto `}>
        <div className={`${styles.joinBg} py-10`}>
          <div className="flex justify-end">
            <div className="md:w-6/12 py-40 ps-10">
              <h4 className="text-4xl font-bold mb-10">
                <span className="text-primary"> Join Us </span> in <br />{" "}
                Empowering Aspiring <br />
                African Students
              </h4>
              <p className="w-9/12">
                Together, we can break down barriers and create opportunities
                for aspiring African students to achieve their educational
                dreams. Your support makes a real difference.
              </p>

              <div className="mt-20">
                <LinkButton href="" className="link-primary">
                  Learn how you can help us {">>"}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
