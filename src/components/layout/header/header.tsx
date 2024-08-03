import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({title}) => {
  // ********** JSX ***********
  return (
    <div className="header-wrapper">
      <span className="header-title">{title}</span>
      <MdOutlineRecordVoiceOver className="header-icon" />
    </div>
  );
};
