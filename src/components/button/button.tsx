import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  buttonType = "singleState",
  title,
  titleStart,
  titleStop,
  isListening,
  className,
  ...rest
}) => {
  // ********** JSX ***********
  return (
    <button
      className={`btn ${
        isListening ? "text-red-400 border-red-400 animate-pulse" : "text-white"
      } ${className}`}
      {...rest}
    >
      {buttonType == "doubleState" ? (
        isListening ? (
          <div className="flex gap-x-1">
            <span>{titleStop?.title}</span>
            <span>{titleStop?.icon}</span>
          </div>
        ) : (
          <div className="flex gap-x-1">
            <span className="mt-0.5">{titleStart?.title}</span>
            <span className="mt-0.5">{titleStart?.icon}</span>
          </div>
        )
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};
