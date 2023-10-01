import Link from "next/link";
import React from "react";

const BeginApplication = () => {
  return (
    <div>
      <Link
        href="/apply"
        className="btn btn-primary btn-wide capitalize rounded-sm"
      >
        Begin Application
      </Link>
    </div>
  );
};

export default BeginApplication;
