import { InputHTMLAttributes } from "react";

export const Radio: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  title,
  id,
  ...rest
}) => {
  return (
    <div className="flex gap-x-2">
      <input
        type="radio"
        id={id}
        value={value}
        onSelect={() => console.log("selected")}
        {...rest}
      />
      <label className="text-white" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};
