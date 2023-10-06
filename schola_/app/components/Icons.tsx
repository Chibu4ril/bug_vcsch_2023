"use client";

import { Icon } from "@iconify/react";

interface PDFIconProps {
  label?: string;
}

export const PDFIcon: React.FC<PDFIconProps> = ({ label }) => {
  return (
    <div className="flex align-middle content-center">
      <Icon icon="vscode-icons:file-type-pdf2" className="text-3xl me-2" />{" "}
      <p>{label || "Default Label"}</p>
    </div>
  );
};

interface DeleteIconProps {
  label: string;
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({ label }) => {
  return (
    <div className="flex">
      <p>{label}</p>
      <Icon
        icon="fluent:delete-24-regular"
        className="text-xl me-2 text-red-500"
      />{" "}
    </div>
  );
};

export const MenuIcon = () => {
  return (
    <div className="flex">
      <Icon icon="fluent:delete-24-regular" className="text-xl me-2" />
    </div>
  );
};
export const GradCapIcon = () => {
  return (
    <div className="flex">
      <Icon icon="ph:graduation-cap" className="text-xl me-2" />
    </div>
  );
};
