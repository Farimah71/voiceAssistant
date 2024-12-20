import { ChangeEvent, useState } from "react";
import { Radio } from "../../../../components/radio";
import { MdOutlineTextFields } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";
import { ResponseModeProps } from "./response-mode.types";
import { ResponseModeType } from "../../../../types/response-mode.type";

export const ResponseMode: React.FC<ResponseModeProps> = ({
  responseModeHandler,
}) => {
  // ********** States ***********
  const [checkedOption, setCheckedOption] = useState<ResponseModeType>();

  // ********** Functions ***********
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const mode = value as ResponseModeType;
    if (mode) {
      setCheckedOption(mode);
      responseModeHandler(mode);
    }
  };

  // ********** JSX ***********
  return (
    <div className="flex flex-col w-full items-center mb-5">
      <span className="text-blue-200 xl:text-lg md:text-lg text-base font-normal">
        Response Mode:
      </span>
      <div className="border border-dashed border-blue-300 p-5 lg:w-1/4 rounded-lg">
        <div className="md:flex justify-between gap-5 font-bold">
          <Radio
            name="response_mode"
            id="text"
            title="Text"
            value={"Text"}
            checked={checkedOption == "Text"}
            iconCheck={<MdOutlineTextFields color="white" size={24} />}
            iconChecked={
              <MdOutlineTextFields
                size={24}
                className="duration-200 transition-all text-primary-blue"
              />
            }
            onChange={onChangeHandler}
          />
          <Radio
            name="response_mode"
            id="audio"
            title="Audio"
            value={"Audio"}
            checked={checkedOption == "Audio"}
            iconCheck={<SiAudiomack color="white" size={26} />}
            iconChecked={
              <SiAudiomack
                size={26}
                className="duration-200 transition-all text-primary-blue"
              />
            }
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};
