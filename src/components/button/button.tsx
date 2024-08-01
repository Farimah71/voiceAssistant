import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  title,
  className,
  ...rest
}) => {
  return (
    <button
      className={`text-white border rounded-full p-4 hover:scale-125 duration-200 ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};
