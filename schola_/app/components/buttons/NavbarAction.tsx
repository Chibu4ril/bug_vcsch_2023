"use client";

import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

interface NavbarActionProps {
  label: string;
  className: string;
}
export const NavbarAction: React.FC<NavbarActionProps> = ({
  label,
  className,
}) => {
  return (
    <div>
      <Link
        className={`text-white px-14 btn capitalize font-bold rounded-full py-0 ${styles.bgPrimary} ${className}`}
        href="/apply"
      >
        {label}
      </Link>
    </div>
  );
};
