import { RadioProps } from "./radio.types";

export const Radio: React.FC<RadioProps> = ({
  title,
  id,
  iconChecked,
  iconCheck,
  checked,
  ...rest
}) => {
  return (
    <div className="flex gap-x-1">
      <div className="cursor-pointer">{checked ? iconChecked : iconCheck}</div>
      <input type="radio" id={id} {...rest} hidden />
      <label
        className={`select-none cursor-pointer duration-1000 transition-all ${
          checked ? "text-primary-blue" : "text-white"
        }`}
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  );
};
