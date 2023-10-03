import Link from "next/link";
import React from "react";

const ApplyButton = () => {
  return (
    <div>
      <Link
        href="/preview"
        className="btn btn-primary btn-wide capitalize rounded-md"
      >
        Preview Application Details
      </Link>
    </div>
  );
};

export default ApplyButton;
