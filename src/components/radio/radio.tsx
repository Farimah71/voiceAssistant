import { RadioProps } from "./radio.types";

export const Radio: React.FC<RadioProps> = ({
  title,
  id,
  iconChecked,
  iconCheck,
  checked,
  ...rest
}) => {
  // ********** JSX ***********
  return (
    <div className="flex gap-x-1">
      <div role="button">{checked ? iconChecked : iconCheck}</div>
      <input type="radio" id={id} {...rest} hidden />
      <label
        className={`radio-label ${checked ? "text-primary-blue" : "text-white"}`}
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  );
};
