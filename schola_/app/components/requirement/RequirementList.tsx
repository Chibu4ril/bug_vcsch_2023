"use client";
import React from "react";
import styles from "./Requirment.module.css";

interface RequirementListProps {
  className?: string;
  Icons?: any;
  children?: any;
  title?: string;
  desc?: string;
}

const RequirementList: React.FC<RequirementListProps> = ({
  className,
  Icons,
  title,
  desc,
}) => {
  return (
    <div className="">
      <div className={`flex flex-row ${className || ""}}`}>
        <div className="me-3">
          <div className={styles.iconCard}>{Icons}</div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg mb-2">{title}</p>
          <p className="reqText">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default RequirementList;
