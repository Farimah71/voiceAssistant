import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  title,
  isListening,
  className,
  ...rest
}) => {
  return (
    <button
      className={`text-white border rounded-full md:p-4 p-3 hover:scale-125 duration-200 focus:outline-none ${className}`}
      {...rest}
    >
      <span className={`${isListening && "text-red-400 animate-pulse"}`}>
        {title}
      </span>
    </button>
  );
};
