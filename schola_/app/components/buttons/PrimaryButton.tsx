import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface PrimaryButtonProps {
  children: ReactNode;
  className: string;
  href: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <div>
      <Link
        href={href}
        className={`btn + " " + ${styles.myPrimaryBtn} + " " + ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
