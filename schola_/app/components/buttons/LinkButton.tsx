import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.css";

interface LinkButtonProps {
  children: ReactNode;
  className: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <div className="my-auto">
      <a className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
