import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.css";

interface LinkButtonProps {
  children: ReactNode;
  className: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <div>
      <a className="link-primary" href={href}>
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
