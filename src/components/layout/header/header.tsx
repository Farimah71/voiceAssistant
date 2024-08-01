import { MdOutlineRecordVoiceOver } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <div className="flex gap-x-2 mt-14 justify-center">
      <h1 className="text-3xl font-black text-blue-300 mb-8 brightness-50">
        Voice Assistance
      </h1>
      <MdOutlineRecordVoiceOver size={35} className="text-blue-500" />
    </div>
  );
};
