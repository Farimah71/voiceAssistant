import { TranscriptProps } from "./transcript.types";

export const Transcript: React.FC<TranscriptProps> = ({ text }) => {
  return (
    <span
      className={`text-white text-lg mb-10 mt-16 w-2/3 h-auto ${
        text ? "visible" : "invisible"
      }`}
    >
      {text}
    </span>
  );
};
