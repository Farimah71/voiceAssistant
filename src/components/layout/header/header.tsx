import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { HeaderProps } from "./header.types";
import { memo } from "react";

export const Header: React.FC<HeaderProps> = memo(({ title }) => {
  // ********** JSX ***********
  return (
    <div className="header-wrapper">
      <span className="header-title">{title}</span>
      <MdOutlineRecordVoiceOver className="header-icon" />
    </div>
  );
});
