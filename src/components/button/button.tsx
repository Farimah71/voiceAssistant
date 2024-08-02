import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  titleStart,
  titleStop,
  isListening,
  className,
  ...rest
}) => {
  return (
    <button
      className={`${
        isListening ? "text-red-400 border-red-400 animate-pulse" : "text-white"
      } border rounded-full md:p-3 p-2 hover:scale-110 duration-200 focus:outline-none ${className}`}
      {...rest}
    >
      {isListening ? (
        <div className="flex gap-x-1">
          <span>{titleStop?.title}</span>
          <span>{titleStop?.icon}</span>
        </div>
      ) : (
        <div className="flex gap-x-1">
          <span className="mt-0.5">{titleStart?.title}</span>
          <span className="mt-0.5">{titleStart?.icon}</span>
        </div>
      )}
    </button>
  );
};
