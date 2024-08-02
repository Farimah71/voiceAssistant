import { MdOutlineRecordVoiceOver } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <div className="flex gap-x-2 mt-14 justify-center">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-black text-light-blue/90 mb-8">
        Voice Assistance
      </h1>
      <MdOutlineRecordVoiceOver className="text-primary-blue text-2xl md:text-3xl lg:text-4xl" />
    </div>
  );
};
