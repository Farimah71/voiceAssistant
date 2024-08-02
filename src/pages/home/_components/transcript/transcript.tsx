import { TranscriptProps } from "./transcript.types";

export const Transcript: React.FC<TranscriptProps> = ({ text }) => {
  return (
    <span
      className={`text-white text-lg w-2/3 h-auto`}
    >
      {text}
    </span>
  );
};
