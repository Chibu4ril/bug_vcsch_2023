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

interface GradCapIconProps {
  className: string;
}
export const GradCapIcon: React.FC<GradCapIconProps> = ({ className }) => {
  return <Icon icon="ph:graduation-cap" className={className} />;
};

interface TrustProps {
  className: string;
}

export const TrustIcon: React.FC<TrustProps> = ({ className }) => {
  return <Icon icon="codicon:workspace-trusted" className={className} />;
};

interface ConstraintProps {
  className: string;
}

export const Constraint: React.FC<ConstraintProps> = ({ className }) => {
  return (
    <Icon icon="heroicons:cube-transparent-20-solid" className={className} />
  );
};

interface GlobeIconProps {
  className: string;
}

export const GlobeIcon: React.FC<GlobeIconProps> = ({ className }) => {
  return <Icon icon="uiw:global" className={className} />;
};

interface EducationProps {
  className: string;
}

export const Education: React.FC<EducationProps> = ({ className }) => {
  return <Icon icon="mdi:education-outline" className={className} />;
};

interface SupportIconProps {
  className: string;
}

export const SupportIcon: React.FC<SupportIconProps> = ({ className }) => {
  return <Icon icon="tdesign:support" className={className} />;
};

export const Strategy = () => {
  return (
    <div className="flex">
      <Icon
        icon="ph:strategy-light"
        className="text-3xl text-primary font-bold"
      />
    </div>
  );
};
export const Handshake = () => {
  return (
    <div className="flex">
      <Icon
        icon="ph:handshake-light"
        className="text-3xl text-primary font-bold"
      />
    </div>
  );
};

interface LaptopIconProps {
  className: string;
}

export const LaptopIcon: React.FC<LaptopIconProps> = ({ className }) => {
  return <Icon icon="mingcute:laptop-line" className={className} />;
};

interface ControlIconProps {
  className: string;
}

export const ControlIcon: React.FC<ControlIconProps> = ({ className }) => {
  return <Icon icon="ant-design:control-outlined" className={className} />;
};

interface CommunityIconProps {
  className: string;
}

export const CommunityIcon: React.FC<CommunityIconProps> = ({ className }) => {
  return (
    <Icon icon="fluent:people-community-16-regular" className={className} />
  );
};

interface DonateIconProps {
  className: string;
}

export const DonateIcon: React.FC<DonateIconProps> = ({ className }) => {
  return <Icon icon="la:donate" className={className} />;
};

interface GoalProps {
  className: string;
}

export const GoalIcon: React.FC<GoalProps> = ({ className }) => {
  return <Icon icon="octicon:goal-24" className={className} />;
};

interface DoubleCaretProps {
  className: string;
}

export const DoubleCaret: React.FC<DoubleCaretProps> = ({ className }) => {
  return (
    <Icon
      icon="teenyicons:double-caret-right-small-outline"
      className={className}
    />
  );
};

interface TransparencyIconProps {
  className: string;
}

export const TransparencyIcon: React.FC<TransparencyIconProps> = ({
  className,
}) => {
  return <Icon icon="solar:shield-up-linear" className={className} />;
};

interface GuideIconProps {
  className: string;
}

export const GuideIcon: React.FC<GuideIconProps> = ({ className }) => {
  return <Icon icon="ep:guide" className={className} />;
};

interface InstagramProps {
  className: string;
}

export const Instagram: React.FC<InstagramProps> = ({ className }) => {
  return <Icon icon="ri:instagram-line" className={className} />;
};

interface FacebookProps {
  className: string;
}

export const Facebook: React.FC<FacebookProps> = ({ className }) => {
  return <Icon icon="ri:facebook-line" className={className} />;
};

interface TwitterProps {
  className: string;
}

export const Twitter: React.FC<TwitterProps> = ({ className }) => {
  return <Icon icon="ri:twitter-line" className={className} />;
};

interface LinkedInProps {
  className: string;
}

export const LinkedIn: React.FC<LinkedInProps> = ({ className }) => {
  return <Icon icon="ri:linkedin-line" className={className} />;
};

interface UserIconProps {
  className: string;
}

export const UserIcon: React.FC<UserIconProps> = ({ className }) => {
  return <Icon icon="solar:user-linear" className={className} />;
};

interface CalenderProps {
  className: string;
}

export const Calender: React.FC<CalenderProps> = ({ className }) => {
  return <Icon icon="uiw:date" className={className} />;
};

interface CopyrightProps {
  className: string;
}

export const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return <Icon icon="ic:outline-copyright" className={className} />;
};
