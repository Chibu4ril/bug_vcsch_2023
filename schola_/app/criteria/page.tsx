"use client";
import React from "react";
import styles from "../components/requirement/Requirment.module.css";
import RequirementList from "../components/requirement/RequirementList";
import { Icon } from "@iconify/react";
import BeginApplication from "../components/buttons/requirementButton/BeginApplication";

const requirementsData = [
  {
    title: "Admission to Eligible Institutions",
    desc: "You must have secured admission to a university or college in the United States, Canada, United Kingdom, any European country, Australia, or New Zealand.",
    icon: "la:university",
  },
  {
    title: "Statement of Intent",
    desc: "Craft a compelling statement of intent. This should convey your passion for your chosen career path, your financial background, and why you require this opportunity to pursue your dreams.",
    icon: "solar:document-linear",
  },
  {
    title: "African Citizenship or Residency ",
    desc: "You should either be an African citizen or possess permanent citizenship in a developing or underdeveloped African country.",
    icon: "carbon:map",
  },
  {
    title: "Accurate Information",
    desc: "It's crucial to provide accurate and honest information about yourself as requested during the application process.",
    icon: "fluent-mdl2:waitlist-confirm-mirrored",
  },
  {
    title: "Admission Letter",
    desc: "Ensure you have received a verifiable official letter of admission from your chosen institution.",
    icon: "pepicons-pencil:letter-open",
  },
  {
    title: "Valid International Passport",
    desc: "Possession of a valid international passport is essential to confirm your citizenship and eligibility for the program.",
    icon: "solar:passport-outline",
  },
  {
    title: "Form Completion and Fees",
    desc: "Complete the application form accurately, and make the necessary payment of fees to process your application.",
    icon: "fluent:form-48-regular",
  },
];

const Requirement = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-semibold	">Applications Requirements</h1>
          <p className="text-sm mb-5">
            To expedite the processing of your application, please ensure that
            you meet these straightforward eligibility criteria.
          </p>
        </div>

        <div className={styles.myColoredCards}>
          <div className="grid gap-10	 grid-cols-2">
            {requirementsData.map((requirement, index) => (
              <RequirementList
                key={index}
                className="w-full aspect-auto"
                title={requirement.title}
                desc={requirement.desc}
                Icons={
                  <Icon
                    icon={requirement.icon}
                    className="text-purple-700 text-2xl"
                  />
                }
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20 ">
          <BeginApplication></BeginApplication>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
