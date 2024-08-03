import { MdOutlineRecordVoiceOver } from "react-icons/md";

export const Header: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="header-wrapper">
      <span className="header-title">Voice Assistant</span>
      <MdOutlineRecordVoiceOver className="header-icon" />
    </div>
  );
};
