import { useState } from "react";
import { Radio } from "../../../../components/radio";
import { MdOutlineTextFields } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";

export const ResponseMode: React.FC = () => {
  const [checkedOption, setCheckedOption] = useState<string>();

  return (
    <>
      <span className="text-blue-200 xl:text-lg md:text-lg text-base font-normal -mb-4">
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
            onChange={(e) => setCheckedOption(e.target.value)}
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
            onChange={(e) => setCheckedOption(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
