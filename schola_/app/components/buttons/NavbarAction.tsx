"use client";

import Link from "next/link";
import React from "react";

interface NavbarActionProps {
  label: string;
}
export const NavbarAction: React.FC<NavbarActionProps> = ({ label }) => {
  return (
    <div>
      <Link
        className="btn btn-primary py-0 px-10 rounded-full capitalize"
        href="/apply"
      >
        {label}
      </Link>
    </div>
  );
};
